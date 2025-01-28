FROM node:20-alpine

ENV NODE_ENV=production

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 3005

CMD ["node", "server/index.js"]
