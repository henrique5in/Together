import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import "express-async-errors";
import { router } from './routes';
import './database';


const port = 8080;
const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

/**
 * Tipos de parâmetros
 * Routes Params => http://localhost:8080/produtos/123456
 * Query Params => http://localhost:8080/produtos?name=teclado (filtro)
 * Body Params => {
 *  "name" : "teclado",
 *  "description" : "teclado bom"
 * }
 */
 app.use(express.json());
 app.use(router);
 app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if(err instanceof Error){
        return response.status(400).json({
            error: err.message
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal Server Error' 
    })
 });

app.listen(port, () => console.log(`Server is running on port ${port}`));