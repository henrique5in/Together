import express from 'express';

const port = 8080;
const app = express();

/**
 * GET    => Buscar uma informação
 * POST   => Inserir (Criar) uma informação
 * PUT    => Alterar uma informação
 * DELETE => Remover um dado
 * PATCH  => Alterar uma informação específica
 */

 app.get("/test", (request, response) => {
    return response.send("Olá NLW");
})

app.post("/test-post", (request, response) => {
    return response.send("Olá NLW método POST");
})

app.listen(port, () => console.log(`Server is running on port ${port}`));