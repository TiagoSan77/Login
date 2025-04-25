import express from 'express';
<<<<<<< HEAD
import index from './routes/index';
=======
import StationRoutes  from './routes/StationRoutes'
import AuthRoutes  from './routes/AuthRoutes'
import UserRoutes  from './routes/AuthRoutes'
>>>>>>> cb90f8fa1ffa51fa3a3c36872a0f067670f6d9ce
import { connect } from './database/mongoose';
import { PORT } from './config';
import cors from 'cors';
const app = express();
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'], 
}));
app.use(express.json());

connect();

<<<<<<< HEAD
app.use('/',index)
=======
app.use('/', AuthRoutes);
app.use('/', UserRoutes);
app.use('/', StationRoutes);
>>>>>>> cb90f8fa1ffa51fa3a3c36872a0f067670f6d9ce

app.listen(PORT, () => {
    console.log(`Servidor rodando na pota http://localhost:${PORT}`);
});
