import { json } from "express";
import User from "../model/User"

export const getAllUser = async(req , res , next) => {
	let users;
	try {
		users = await User.find();
	} catch(e) {
		// statements
		console.log(e);
	}
	if(!users){
		return res.status(404).json({
			message : "No users found"
		});
	}
	return res.status(200).json({
		users
	});
}

export const createUser = async(req , res , next) => {
	const {name , profileImage , posts} = req.body;

	const user = new User({
		name,
		profileImage,
		posts : [],
	});


	try {
		await user.save();
		res.status(200).json({ user });
	} catch (error) {
		console.log(error);
		next(error);
	}
} 

export const getById = async (req , res , next) => {
    const id = req.params.id;
    let user;
    try {
        user = await User.findById(id);
    } catch (error) {
        return console.log(error);
    }

    if(!user){
        return res.status(404).json({
            message : "No User Found"
        })
    }
    return res.status(200).json({user});
};