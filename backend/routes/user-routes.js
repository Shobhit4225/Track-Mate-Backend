import express from 'express';
import { createUser, getAllUser} from "../controllers/user-controllers";

const router = express.Router();

router.get("/",getAllUser);
router.post("/createUser",createUser);
export default router;