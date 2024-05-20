import Board from '../models/board.model.js'

export const getAllBoards = async (req, res) => {
    try {
        const boards = await Board.find();
        res.json(boards);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const createBoard = async (req, res) => {
    const { name } = req.body

    try {
        const newBoard = new Board({name})
        const savedBoard = await newBoard.save()
        res.status(201).json(savedBoard)
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const getBoardById = async (req, res) => {
    const { id } = req.params

    try {
        const board = await Board.findById(id)
        if (!board) {
            return res.status(404).json({message: 'Board not found'})
        }
    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

export const updateBoard = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const updatedBoard = await Board.findByIdAndUpdate(id, { name }, { new: true });
        res.json(updatedBoard);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteBoard = async (req, res) => {
    const { id } = req.params;

    try {
        await Board.findByIdAndDelete(id);
        res.json({ message: 'Board deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};