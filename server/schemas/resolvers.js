const { AuthenticationError } = require('apollo-server-express');
const { User, Category, Artwork } = require('../models');
const { signToken } = require('../utils/auth');
const { populate } = require('../models/User');
// const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc');

const resolvers = {
  Query: {
    categories: async () => {
      return await Category.find()
    },
    category: async (parent, {_id, name}) => {
      const params = {};

      if (_id){
        return await Category.findById(_id)
      }

      if (name){
        params.name = name
      }

      return await Category.find(params)
    },
    artworks: async () => {
      return await Artwork.find()
    },
    artwork: async (parent, { _id, category }) => {
      const params = {};

      if (_id){
        return await Artwork.findById(_id).populate('category')
      }

      if (title){
        params.title = title
      }

      return await Artwork.find(params).populate('category')
    },
    user: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findById(context.user.userId)
        return user;
      }

      throw new AuthenticationError('Not logged in');
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
