const mongoose = require('mongoose');
require('dotenv').config();
const DB = "mongodb+srv://pavangowdats01:12345@cluster0.358fgjj.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error('Mongoose not connected', error);
        process.exit(1);
    }
};

module.exports = connectDB;
