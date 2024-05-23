import { getUsers, getUserById } from '../handlers/users';
import express from 'express';
const router = express.Router();

/* GET users listing. */
router.get('/', getUsers);

router.get('/:id', getUserById);

export default router;
