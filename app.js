const express = require('express');
let pokemons = require('./mock-pokemon');

const app = express();

const port = 3000;

app.get('/', (req, res) => res.send('Hello again, Express !'));

app.get('/api/pokemons', (req, res) => {
    res.json(pokemons);
});

app.get('/api/pokemons/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const pokemon = pokemons.find(pokemon => pokemon.id === id);

    if (!pokemon) {
        return res.status(404).json({ message: `Le pokémon avec l'ID ${id} n'existe pas.` });
    }

    res.json(pokemon);
});


app.listen(port, () => console.log(`Notre application Node est démarrée sur http://localhost:${port}`));