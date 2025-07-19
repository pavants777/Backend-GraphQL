const express = require('express');
const { graphqlHTTP } = require("express-graphql");
const schema = require('./GraphQL/schema'); 
const connectDB = require('./Config/connectDB');
const authRoutes = require('./Routes/auth'); 
require('dotenv').config();

const app = express();
const PORT = 5001;

// Connect to DB
connectDB();

app.use(express.json());
// GraphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema, 
    graphiql: true
}));
app.use('/api', authRoutes);

app.get("/", (req, res) => {
    res.json({ message: "API is running..." });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


module.exports = app;