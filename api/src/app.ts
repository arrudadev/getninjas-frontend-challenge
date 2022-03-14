import cors from 'cors';
import express from 'express';

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3333, () => console.log('Server is running on PORT 3333'));
