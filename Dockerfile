FROM node:16.13.0
MAINTAINER Andrea Li
WORKDIR /usr/src/echarts
COPY . /usr/src/echarts
RUN npm install express
RUN npm install 
EXPOSE 3000
CMD [ "node", "app.js" ]
