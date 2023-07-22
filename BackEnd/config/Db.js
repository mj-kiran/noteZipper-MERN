const mongoose = require('mongoose')
const colors=require('colors')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {});
        console.log(`MongoDb Connected :${conn.connection.host}`.green.bold);
    } catch (error) {
        console.error(`Error : ${error.message}`.red.underline);
        process.exit();
    }
}
module.exports = connectDB;