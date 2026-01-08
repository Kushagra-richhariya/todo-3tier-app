FROM node:18
WORKDIR /app
COPY server.js .
RUN npm init -y && npm install express mongoose cors
EXPOSE 5000
CMD ["node", "server.js"]
