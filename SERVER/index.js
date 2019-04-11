import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.NODE_ENV || 5000;

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send({ message: 'Welcome to Banka' }).status(200));
app.listen(port);

export default app;