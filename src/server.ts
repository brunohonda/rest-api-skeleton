import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (request: Request, response: Response) => {
	return response.json({ message: 'Hello World!!!' });
});

app.listen(3333);