import express from 'express'
import { Client } from 'pg'

const app = express();
const port = 8100;
app.use(express.json());