import express from 'express';
import { heroeRoute, villainRoute } from './heroe/routes';

const port = 3000;
const app = express();

app.use(express.json());

app.use('/heroe', heroeRoute);

app.use('/villain', villainRoute);

app.listen(port, () => {
    console.log(`The application is listening on port ${port}!`);
});