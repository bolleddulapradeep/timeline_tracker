import express from 'express';
import cors from 'cors';
import { switchDB } from './db';

export const server = express();
// connect DB
switchDB()
// middlewares
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// routers

server.get('/', (req, res, next) => {
    res.send('<h1>Hello World</h1>')
});

// Error Handlers