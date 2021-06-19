import express from 'express';
import * as DB from './src/database/db';

const app = express();

DB.dbConnect();



app.get('/v1/api', (req, res, next) => {
    res.send({message: 'Welcome to backend api version 1'});
});


app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });



  const port = process.env.port || 3333;
  const server = app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}/v1/api`);
  });
  server.on('error', console.error);
