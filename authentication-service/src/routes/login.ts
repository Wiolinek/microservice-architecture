import { loginUser } from '@handlers/login';
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.post('/', loginUser);

export default router;
