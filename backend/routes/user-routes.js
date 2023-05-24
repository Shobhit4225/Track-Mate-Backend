import express from 'express';
import { createUser, getAllUser, getById} from "../controllers/user-controllers";
import User from '../model/User';

const router = express.Router();

router.get("/",getAllUser);
router.post("/createUser",createUser);
router.get("/:id",getById);
router.post("/:userId/liked-posts" , updateLikedPost)

export default router;