import express from 'express';
import mongoose from 'mongoose';
import accountRoutes from './routes/accountRoutes';
import { connectToPostgres } from './config/dbConfig';

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/banking', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'));

connectToPostgres();

app.use('/api/accounts', accountRoutes);

export default app;
