const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require ('./schema/schema');
const mongoose = require('mongoose');

const app = express();


// connect to mongodb database
mongoose.connect('mongodb+srv://kupenya:satyisa.@cluster0.0as0mnb.mongodb.net/test');
mongoose.connection.once('open',()=>{
    console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql:true
}));

app.listen(4000, () => {
    console.log('Listening for request')
})