import { Request, Response } from "express";
import { AppDataSource } from "../../datasource";
import { Heroe } from "../models/heroe.entity";
import { Villain } from "../models/villain.entity";

const heroRepository = AppDataSource.getRepository(Heroe);
const villainRepository = AppDataSource.getRepository(Villain);

// Hero Controller

export const getAll = async (req: Request, res: Response) => {
    const allHeroes = await heroRepository.find();
    
    res.status(200).json(allHeroes);
}

export const getByName = async (req: Request, res: Response) => {
    const nombre = req.params.nombre;
    const existingHero = await heroRepository.findOne({ where: { nombre } });

    if (!existingHero) {
        return res.status(404).json({
                message: 'Super Hero Nmae Not Found'
            });
    }
    res.json(existingHero);
}

export const getById = async (req: Request, res: Response) => {
    const heroId = parseInt(req.params.id);
    const existingHero = await heroRepository.findOneBy({ id: heroId });

    if (!existingHero) {
        return res.status(404).json({
            message: 'Super Hero Id Not Found'
        });
    }
    res.json(existingHero);
}

export const create = async (req: Request, res: Response) => {
    const { alte, nombre } = req.body;
    const existingHero = await heroRepository.findOneBy({ alte });

    if (existingHero) {
      return res.status(400).json({
        message: `The hero ${alte} already exists`,
      });
    }
  
    const newHero = heroRepository.create({ alte, nombre });
    await heroRepository.save(newHero);

    res.status(201).json(newHero);
}

export const remove = async (req: Request, res: Response) => {
    const heroId = parseInt(req.params.id);
    const existingHero = await heroRepository.findOne({ where: { id: heroId } });

    if (!existingHero) {
        return res.status(404).json(`The hero ${heroId} not found`)
    }

    await heroRepository.remove(existingHero);
    res.json(existingHero);
}

export const update = async (req: Request, res: Response) => {
    const { alte, nombre } = req.body;
    const heroId = parseInt(req.params.id);
    const existingHero = await heroRepository.findOne({ where: { id: heroId } });

    if (!existingHero) {
        return res.status(404).json({
            message: `The hero ID ${heroId} not found`
        })
    }

    if(alte) {
        const oldHero = await heroRepository.findOne({ where: { alte } });

        if (oldHero && oldHero.id !== heroId) {
            return res.status(400).json({
                message: `The hero ${alte} already exists`,
            });
        }
    }

    existingHero.alte = alte !== undefined ? alte : existingHero.alte;
    existingHero.nombre = nombre !== undefined ? nombre : existingHero.nombre;

    await heroRepository.save(existingHero);
    res.json(existingHero);
}

// Villains Controller

export const getAllVillains = async (req: Request, res: Response) => {
    const allVillains = await villainRepository.find();
    
    res.status(200).json(allVillains);
}

export const getVillainByName = async (req: Request, res: Response) => {
    const nombre = req.params.nombre;
    const existingVillain = await villainRepository.findOne({ where: { nombre } });

    if (!existingVillain) {
        return res.status(404).json({
                message: 'Super Villain Nmae Not Found'
            });
    }
    res.json(existingVillain);
}

export const getVillainById = async (req: Request, res: Response) => {
    const villainId = parseInt(req.params.id);
    const existingVillain = await villainRepository.findOne({ where: { id: villainId } });

    if (!existingVillain) {
        return res.status(404).json({
            message: 'Super Villain Id Not Found'
        });
    }
    res.json(existingVillain);
}

export const createVillain = async (req: Request, res: Response) => {
    const { villano, nombre } = req.body;
    const existingVillain = await villainRepository.findOne({ where: { villano } });

    if (existingVillain) {
      return res.status(400).json({
        message: `The villain ${villano} already exists`,
      });
    }
  
    const newVillain = villainRepository.create({ villano, nombre });
    await villainRepository.save(newVillain);

    res.status(201).json(newVillain);
}

export const removeVillain = async (req: Request, res: Response) => {
    const villainId = parseInt(req.params.id);
    const existingVillain = await villainRepository.findOne({ where: { id: villainId } });

    if (!existingVillain) {
        return res.status(404).json(`The villain ${villainId} not found`)
    }

    await villainRepository.remove(existingVillain);
    res.json(existingVillain);
}

export const updateVillain = async (req: Request, res: Response) => {
    const { villano, nombre } = req.body;
    const villainId = parseInt(req.params.id);
    const existingVillain = await villainRepository.findOne({ where: { id: villainId } });

    if (!existingVillain) {
        return res.status(404).json({
            message: `The villain ID ${villainId} not found`
        })
    }

    if(villano) {
        const oldVillain = await villainRepository.findOne({ where: { villano } });

        if (oldVillain && oldVillain.id !== villainId) {
            return res.status(400).json({
                message: `The villain ${villano} already exists`,
            });
        }
    }

    existingVillain.villano = villano !== undefined ? villano : existingVillain.villano;
    existingVillain.nombre = nombre !== undefined ? nombre : existingVillain.nombre;

    await villainRepository.save(existingVillain);
    res.json(existingVillain);
}