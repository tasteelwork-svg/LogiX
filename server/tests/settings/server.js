import app from "../../index.js";
import mongoose from "mongoose";

mongoose.connect(process.env.MONGO_URI).then(() => {
    app.listen(5000, () => {
        console.log("Test Server is running");
    })
})