import 'reflect-metadata';
import express from 'express';
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

app.listen(port, () => console.log(`Server is running on port ${port}`));