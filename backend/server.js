import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import path from 'path';
import { router } from '../backend/routes';

const app = express();
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'client')));

const port = process.env.PORT || 2600;
app.use(router);
app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the tasks project'
    });
})

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

export default app;