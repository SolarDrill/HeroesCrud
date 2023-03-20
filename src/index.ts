import express, { Request, Response } from 'express';

const app = express();

const port = 3000;

interface Heroe {
    id: Number,
    nombre: String,
    alte: String
}

const heroes: Heroe[] = [
    {
        id: 1,
        nombre: "Bruce Wayne",
        alte: "Batman"
    },
    {
        id: 2,
        nombre: "Damian Wayne",
        alte: "Robin"
    },
    {
        id: 3,
        nombre: "Clark Kent",
        alte: "SuperMan"
    }
]

app.get('/heroe', (req: Request, res: Response) => {
    res.json(heroes);
});

app.get('/heroe/:alte', (req: Request, res: Response) => {
    const alte = req.params.alte;

    const heroe = heroes.find((hero: Heroe) => hero.alte.toLowerCase() === alte.toLowerCase())

    if (!heroe) {
        return res.status(404).json(
            {
                message: 'Super Hero Not Found'
            }
        );
    }

    res.json(heroe);

});

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});