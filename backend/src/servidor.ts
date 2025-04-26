import express from 'express';
import index from './routes/index';
import { connect } from './database/mongoose';
import { PORT } from './config';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

connect();

app.use('/',index)

app.listen(PORT, () => {
    console.log(`Servidor rodando na pota http://localhost:${PORT}`);
});
