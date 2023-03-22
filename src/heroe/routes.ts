import { Router } from "express";
import { getAll, getByName, create, remove, update } from "./controller";

export const heroeRoute = Router();

heroeRoute.get('/', getAll);

heroeRoute.get('/:alte', getByName);

heroeRoute.post('/', create);

heroeRoute.delete('/:alte', remove);

heroeRoute.put('/:id', update);
