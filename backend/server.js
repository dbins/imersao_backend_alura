import express from "express";
import path from "path";  // Importando o módulo 'path'
import routes from "./src/routes/postsRoutes.js";

const app = express();

// Para obter o diretório do arquivo atual (no ES Modules)
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);  // Calcula o diretório onde o arquivo server.js está localizado

// Configura o Express para servir arquivos estáticos da pasta '/uploads'
const uploadsPath = path.join(__dirname, 'uploads');  // Isso pode precisar ser ajustado
app.use('/uploads', express.static('/uploads'));  // Agora está servindo a pasta '/uploads' dentro do container

// Define suas rotas
routes(app);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000...");
});