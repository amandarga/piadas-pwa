const express = require('express');
const router = express.Router();
const Piada = require('../models/Piada');

// Criar uma nova aluna
router.post('/', async (req, res) => {
    const { title, jokeMessage } = req.body;
    const newPiada = new Piada({ title, jokeMessage });
    await newPiada.save();
    res.json(newPiada);
});

// Listar todas as reclamações
router.get('/', async (req, res) => {
    const piadas = await Piada.find();
    res.json(piadas);
});

// Atualizar uma reclamação
router.put('/:id', async (req, res) => {
    const { title, jokeMessage } = req.body;
    const updatedPiada = await Piada.findByIdAndUpdate(req.params.id, { title, jokeMessage }, { new: true });
    res.json(updatedPiada);
});

// Deletar uma reclamação
router.delete('/:id', async (req, res) => {
    await Piada.findByIdAndDelete(req.params.id);
    res.json({ jokeMessage: 'Piada deletada com sucesso!' });
});

module.exports = router;
