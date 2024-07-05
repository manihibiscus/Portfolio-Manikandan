import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';
import 'dotenv/config';
const app = express();
const port = process.env.PORT;

app.use(cors()); 
app.use(express.json());

const mongoUri = process.env.MONGODB_URI;

const client = new MongoClient(mongoUri);

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
  } catch (error) {
    console.error('Error connecting to MongoDB Atlas:', error);
  }
}

connectToDatabase();

app.get('/api/getContactDetails', async (req, res) => {
    try {
      const database = client.db('Protfolio');
      const collection = database.collection('ContactDetails');
      const items = await collection.find({}).toArray();
      res.json(items);
    } catch (error) {
      res.status(500).send('Error fetching data from the database');
    }
  });

  app.post('/api/postContactDetails', async (req, res) => {
    try {
      const newItem = req.body;
      console.log(newItem);
      const database = client.db('Protfolio');
      const collection = database.collection('ContactDetails');
      const result = await collection.insertOne(newItem);
      // console.log(res.status(201).json(result));
      res.send("Submitted Successfully!")
    } catch (error) {
      res.status(500).send('Error inserting data into the database');
    }
  });

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });