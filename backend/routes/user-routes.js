import express from 'express';
import { createUser, getAllUser, getById} from "../controllers/user-controllers";

const router = express.Router();

router.get("/",getAllUser);
router.post("/createUser",createUser);
router.get("/:id",getById);
export default router;