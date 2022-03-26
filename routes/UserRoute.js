import express from 'express';
import { getUsers, getUserById, postUser, updateUser, deleteUser } from '../controllers/UserController.js';

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', postUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

export default router;
