FROM node:14

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN chmod +x ./wait-for-it.sh

EXPOSE 3000

RUN npm install -g sequelize-cli

ENV DB_NAME=d4d9c98n3vi901
ENV DB_PORT=5432
ENV DB_DIALECT=postgres
ENV DB_PASSWORD=a4709b09850f7830b1293f35dc0548669c82517dadf75d391cdf9f5f2ce8db4c
ENV DB_USER=bdqwwldqooofbp
ENV DB_HOST=ec2-54-160-96-70.compute-1.amazonaws.com
ENV SALTROUNDS=10
ENV JWT_SECRET=secret

CMD [ "npm", "start" ]