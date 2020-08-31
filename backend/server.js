import express from 'express';
import logger from 'morgan';

const app = express();
app.use(logger('dev'));
app.use(express.json());

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

export default app;