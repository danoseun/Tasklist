import express from 'express';
import { taskObject } from '../controllers';

export const router = express.Router();

router.post('/tasks', taskObject.createTask);
router.get('/tasks', taskObject.fetcAllTasks);
router.delete('/tasks/:id', taskObject.deleteTask);