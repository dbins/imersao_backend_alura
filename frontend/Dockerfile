# Usando uma imagem oficial do Node.js
FROM node:16

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json
COPY package*.json ./

# Instalar as dependências da aplicação
RUN npm install

# Copiar todo o código da aplicação para dentro do container
COPY . .

# Expõe a porta que o frontend vai usar
EXPOSE 8000

# Comando para rodar a aplicação 
CMD ["npx","parcel","--port","8000","index.html"]
