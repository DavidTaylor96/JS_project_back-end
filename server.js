const express = require('express');
const app = express();

const bodyParser = require('body-parser');

const cors = require('cors');
app.use(cors()); 



app.use(bodyParser.json());
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('tryAtomic');
    const emissionFactorsCollection = db.collection('userData');
    const emissionRouter = createRouter(emissionFactorsCollection);
    app.use('/api/userData', emissionRouter);
  })
  .catch(console.error);


MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('tryAtomic');
    const emissionFactorsCollection = db.collection('emissionFactors');
    const emissionRouter = createRouter(emissionFactorsCollection);
    app.use('/api/emission', emissionRouter);
  })
  .catch(console.error);

app.listen(3000, function() {
  console.log(`Hotel server running on port ${this.address().port}`);
});('cors');
