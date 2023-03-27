import { Router } from "express";
import { getAll, getByName, create, remove, update, getById } from "./controller";
import { getAllVillains, getVillainByName, getVillainById, createVillain, removeVillain, updateVillain } from "./controller";

// Hero Routes
export const heroeRoute = Router();

heroeRoute.get('/', getAll);

heroeRoute.get('/:id', getById);

heroeRoute.get('/nombre/:nombre', getByName);

heroeRoute.post('/', create);

heroeRoute.delete('/:id', remove);

heroeRoute.put('/:id', update);

// Villain Routes
export const villainRoute = Router();

villainRoute.get('/', getAllVillains);

villainRoute.get('/:id', getVillainById);

villainRoute.get('/nombre/:nombre', getVillainByName);	

villainRoute.post('/', createVillain);

villainRoute.delete('/:id', removeVillain);

villainRoute.put('/:id', updateVillain);