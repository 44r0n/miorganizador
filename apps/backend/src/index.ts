import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './routes';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', routes);

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok back hot reload' });
});

const port = Number(process.env.BACKEND_PORT ?? 4000);
app.listen(port, () => {
  console.log(`Backend listening on http://0.0.0.0:${port}`);
});