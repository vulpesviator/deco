const { AuthenticationError } = require("apollo-server-express");
const { User, Category, Image, UserScore } = require("../models");
const { signToken } = require("../utils/auth");
const fetch = require("node-fetch");

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find().populate("image");
    },
    category: async (parent, { _id }) => {
      return await Category.findById(_id);
    },

    images: async () => {
      var result = await Image.find().populate("category");

      return result;
    },
    image: async (parent, { _id }) => {
      return await Image.findById(_id).populate("category");
    },
    user: async (parent, args, context) => {
      if (context.user) {
        let user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError("Not logged in");
    },
    categoryImages: async (parent, { categoryId }) => {
      try {
        const category = await Category.findById(categoryId);

        if (!category) {
          throw new AuthenticationError("Category not found");
        }

        function getArt(query) {
          var artInstApi = `https://api.artic.edu/api/v1/artworks/search?fields=id,artist_display,title,image_id&q=${query}`;
          return fetch(artInstApi).then(function (response) {
            if (response.ok) {
              return response.json().then(async function (data) {
                const artData = data.data;
                return Promise.all(
                  artData.map(async (artwork) => {
                    const image = await Image.create({
                      src: `https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`,
                      artist: artwork.artist_display,
                      category: category._id,
                    });
                    return image;
                  })
                );
              });
            } else {
              throw new Error("Error fetching data");
            }
          });
        }

        const categoryImages = await getArt(category.scoreCategory);
        console.log("Run Function", categoryImages);
        return categoryImages;

      } catch (error) {
        throw new AuthenticationError("Error fetching category images");
      }
    },
  },
  Category: {
    image: async (parent) => {
      const categoryId = parent._id;
      const image = await Image.findOne({ category: categoryId });
      return image;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create({ ...args, userScore: {} });
      const token = signToken(user);

      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },

    updateUserScore: async (parent, { rating, category }, context) => {
      const currentUser = await User.findById(context.user._id);
      currentUser.userScore[category] = rating;

      const updated = await currentUser.save();
      return updated;
    },
    updateCategory: async (parent, { category, images }, context) => {
      const currentCategory = await Category.findById(category._id);

      if (!currentCategory) {
        throw new Error('Category not found');
      }

      currentCategory.images = images;

      const updatedCategory = await currentCategory.save();
      return updatedCategory;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(user);

      return { token, user };
    },
  },
};

module.exports = resolvers;
