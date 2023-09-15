const { AuthenticationError } = require('apollo-server-express');
const { User, Category, Image, UserScore } = require('../models');
const { signToken } = require('../utils/auth');
const { ApolloClient, InMemoryCache, gql } = require('@apollo/client');

const artInstituteClient = new ApolloClient({
  uri: 'https://api.artic.edu/api/v1/artworks/search?query[term][is_public_domain]=true&limit=0', 
  cache: new InMemoryCache(),
});


const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find().populate('image');
    },
    category: async (parent, {_id}) => {
      return await Category.findById(_id);
    },
    
    images: async () => {
      var result = await Image.find().populate('category');
   
      return result
    },
    image: async (parent, { _id }) => {
      return await Image.findById(_id).populate('category');
    },
    user: async (parent, args, context) => {
      if (context.user) {
        let user = await User.findById(context.user._id);
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    categoryImages: async (parent, { categoryId }) => {
      try {
        const category = await Category.findById(categoryId);

        if (!category) {
          throw new AuthenticationError('Category not found');
        }

        const { data } = await artInstituteClient.query({
          query: QUERY_CATEGORY_IMAGES,
          variables: { categoryId: category._id },
        });

        return data.category.image;
      } catch (error) {
        throw new AuthenticationError('Error fetching category images');
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
      const user = await User.create({...args, userScore: {}});
      const token = signToken(user);
      
      return { token, user };
    },

    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },

    updateUserScore: async (parent, { rating, category }, context) => {
      const currentUser = await User.findById(context.user._id);
      currentUser.userScore[category] = rating;
      
      const updated = await currentUser.save();
      return updated;
    },

    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    }
  }
};

module.exports = resolvers;
