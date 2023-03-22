import "reflect-metadata";
import { DataSource } from "typeorm";
import { Heroe } from "./src/models/heroe.entity";

export const AppDataSource = new DataSource({
    type: "mssql",
    host: "localhost",
    port: 1433,
    username: "sa",
    password: "Sa123456",
    database: "backendalterna",
    entities: [Heroe],
    //synchronize: true,
    logging: true,
    options: {
        encrypt: true,
    },
})

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))