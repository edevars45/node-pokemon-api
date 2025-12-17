const express = require('express');
const { success } = require('./helper.js');
let pokemons = require('./mock-pokemon');

const app = express();

const port = 3000;

app.use(express.json());

app.get('/', (req, res) => res.send('Hello again, Express !'));

app.get('/api/pokemons', (req, res) => {
    const message = 'La liste des pokémons a bien été récupérée.';
    res.json(success(message, pokemons));
});

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === id);
    
    if (!pokemon) {
        const message = `Le pokémon avec l'ID ${id} n'existe pas.`;
        return res.status(404).json({ message });
    }
    
    const message = 'Un pokémon a bien été trouvé.';
    res.json(success(message, pokemon));
});

app.listen(port, () => console.log(`Notre application Node est démarrée sur http://localhost:${port}`));