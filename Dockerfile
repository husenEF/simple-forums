# FROM node:14

# WORKDIR /usr/src/app

# COPY package*.json ./

# RUN npm install

# COPY . .

# EXPOSE 3000

# RUN chmod a+x ./wait-for-it.sh
# CMD [ "npm", "start" ]

FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x ./wait-for-it.sh

EXPOSE 3000

RUN npm install -g sequelize-cli