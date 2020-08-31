import express from 'express';
import logger from 'morgan';
import { router } from '../backend/routes';

const app = express();
app.use(logger('dev'));
app.use(express.json());

const port = process.env.PORT || 8000;
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