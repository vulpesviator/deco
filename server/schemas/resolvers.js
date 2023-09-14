const { AuthenticationError } = require('apollo-server-express');
const { User, Category, Image, UserScore } = require('../models');
const { signToken } = require('../utils/auth');


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
        let user = await User.findById(context.user._id)
        return user;
      }

      throw new AuthenticationError('Not logged in');
    },
    userScore: async (parent, args, context) => {
      if (context.user) {
        let user = await User.findById(context.user._id)
        let userScore = await User.findOneAndUpdate()
        
      }
    }
  },
  Category: {
    image: async (parent) => {
      const categoryId = parent._id;
      const image = await Image.find({ category: categoryId });
      return image;
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        return await User.findByIdAndUpdate(context.user._id, args, { new: true });
      }

      throw new AuthenticationError('Not logged in');
    },
    // addUserScore: async (parent, { }) => {

    //   // get score and category
    //   // update the userscore model
      
    // },
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
