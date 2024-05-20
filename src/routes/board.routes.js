import express from 'express';
import {
    getAllBoards,
    createBoard,
    getBoardById,
    updateBoard,
    deleteBoard
} from '../controllers/board.controller.js';

const router = express.Router();

// Rutas para tableros
router.get('/boards', getAllBoards);
router.post('/boards', createBoard);
router.get('/boards/:id', getBoardById);
router.put('/boards/:id', updateBoard);
router.delete('/boards/:id', deleteBoard);

export default router;