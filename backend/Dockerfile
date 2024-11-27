# Usando a imagem oficial do Node.js
FROM node:20

# Definir o diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar o package.json e o package-lock.json para instalar as dependências
COPY package*.json ./

# Instalar as dependências da aplicação
RUN npm install

# Copiar todo o código da aplicação para dentro do container
COPY . .

# Expõe a porta que o app vai usar
EXPOSE 3000

# Permissão para gravar na pasta uploads
RUN chmod -R 777 /usr/src/app/uploads
# Pasta temporaria para uploads
RUN mkdir -p /tmp/uploads && chmod -R 777 /tmp/uploads

# Comando para rodar a aplicação
CMD ["npm", "start"]
