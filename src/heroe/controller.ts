import { Request, Response } from "express";
import { Heroe } from "./interfaces";


const heroes: Heroe[] = [];
let _id = 0;

export const getAll = (req: Request, res: Response) => {
    return res.json(heroes);
}

export const getByName = (req: Request, res: Response) => {
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
}

export const create = (req: Request, res: Response) => {

    const { alte, nombre } = req.body;
    const hero = heroes.find((hero) => hero.alte === alte);

    if (hero) {
        return res.status(400).json(
            {
                message: `The hero ${alte} already exist`
            }
        )
    }

    _id += 1;
    const newHero = {
        id: _id,
        nombre,
        alte
    };

    heroes.push(newHero);
    res.status(201).json(newHero);
}

export const remove = (req: Request, res: Response) => {
    const { alte } = req.params;
    const index = heroes.findIndex(
        (hero) =>
            hero.alte.toLowerCase() === alte.toLowerCase());

    if (index < 0) {
        return res.status(404).json(`The hero ${alte} not found`)
    }

    const hero = heroes.splice(index, 1);

    res.json(hero);
}

export const update = (req: Request, res: Response) => {
    const { alte, nombre } = req.body;
    const { id } = req.params;

    const hero = heroes.find((hero) => hero.id === Number.parseInt(id))

    if (!hero) {
        return res.status(401).json({
            message: `The hero ${alte} not found`
        })
    }

    hero.alte = alte !== undefined ? alte : hero.alte;
    hero.nombre = nombre !== undefined ? nombre : hero.alte;

    res.json(hero);
}
