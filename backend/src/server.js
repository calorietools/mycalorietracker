import express from 'express'
import { Client } from 'pg'

const app = express();
const port = 8100;
app.use(express.json());

const computeCalorieStats = async (id, date) => {
  const client = new Client({  
  user: 'postgres',
  password: 'mysecretpassword',
  host: 'calorie_db',
  port: 5432,
  database: 'caloriedb',});

  await client.connect();

  const foodTotal = await client.query(`SELECT SUM(CalorieCount) AS totalfoodcalorie FROM food WHERE UserID = ${id} AND CAST(DiaryDate AS DATE) = '${date}'`);
  const exerciseTotal = await client.query(`SELECT SUM(CalorieCount) AS totalexercisecalorie FROM exercise WHERE UserID = ${id} AND CAST(DiaryDate AS DATE) = '${date}'`);
  const calorieGoal = await client.query(`SELECT CalorieGoal FROM users WHERE ID = ${id}`)
  await client.end();
  
  return foodTotal.rows.concat(exerciseTotal.rows, calorieGoal.rows);
}

const generalQuery = async (query) => {
    const client = new Client({  
    user: 'postgres',
    password: 'mysecretpassword',
    host: 'calorie_db',
    port: 5432,
    database: 'caloriedb',});

    await client.connect();

    const data = await client.query(query);

    await client.end();
    return data.rows;
}

app.get('/api/v1/caloriestats/:id/:date', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.type('application/json');

  const id = req.params.id;
  const date = req.params.date;
  
  computeCalorieStats(id, date).then(data => {
      res.send(data);
  })
});

app.get('/api/v1/food/:id/:date', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.type('application/json');

  const id = req.params.id;
  const date = req.params.date;
  let foodquery = `SELECT * FROM food WHERE UserID = ${id} AND CAST(DiaryDate AS DATE) = '${date}'`;

  generalQuery(foodquery).then(data => {
      res.send(data);
  })
});