const {
    GraphQLString,
    GraphQLObjectType,
    GraphQLList,
    GraphQLSchema,
    graphql
} = require('graphql');
const UserQL = require('./typedef/userQL.js')
const User = require('../Models/userSchema')


const RootQuery = new GraphQLObjectType({
    name : "RootQuery",
    fields : {
        getAllUser : {
            type : new GraphQLList(UserQL),
            async resolve(){
                return await User.find();
            }
        },
        getUser : {
            type : UserQL,
            args : {email : {type : GraphQLString}},
            async resolve(args){
                return await User.findOne({email : args.email});
            }
        }
    }
})

const mutation = new GraphQLObjectType({
    name: "mutation",
    fields: {
        createUser: {
            type: UserQL,
            args: {
                userName: { type: GraphQLString },
                email: { type: GraphQLString },
                password: { type: GraphQLString },
            },
            async resolve(parent, args) {
                const newUser = new User({
                    userName: args.userName,
                    email: args.email,
                    password: args.password,
                });

                await newUser.save();
                return newUser;
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query : RootQuery,
    mutation : mutation,
})