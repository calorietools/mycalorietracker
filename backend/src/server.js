import express from 'express'
import { Client } from 'pg'

const app = express();
const port = 8100;

const client = new Client({  
  user: 'postgres',
  password: 'mysecretpassword',
  host: 'calorie_db',
  port: 5432,
  database: 'caloriedb',})

await client.connect()

const res = await client.query('SELECT * FROM users')
console.log(res.rows)
await client.end()

app.get('/', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.send("RESPONSE");
});

// Start the server
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
}); 