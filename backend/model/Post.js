import mongoose from "mongoose";

const Schema = mongoose.Schema;

const postSchema = new Schema({
    caloriesBurned : {
        type : String,
        require : true
    },
    avgSpeed : {
        type : String,
        require : true
    },
    duration : {
        type : String,
        require : true
    },
    postImage : {
        type : Buffer,
        require : true
    },
    likes : {
        type : String,
        require : true
    },
    user : {
        type : mongoose.Types.ObjectId,
        ref : "User",
        require : true
    },
    userProfile : {
        type : String,
        require : true
    }
})

export default mongoose.model("Post" , postSchema);