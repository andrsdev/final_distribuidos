import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as data from './data.json';

const app = express();
app.use(cors({ origin: true }));

app.get('/', (request, response) => {
    response.send(data);
});

app.get('/dpi', (request, response) => {
    response.send('dpi endopoint');
});

export const api = functions.https.onRequest(app);
