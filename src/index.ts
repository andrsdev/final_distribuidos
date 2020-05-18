import * as functions from 'firebase-functions';
import * as express from 'express';
import * as cors from 'cors';
import * as data from './data.json';

//Data initialization
const documents: any = data.documents; 

//Api endpoint
const app = express();
app.use(cors({ origin: true }));

app.get('/', (request, response) => {
    response.send(data);
});

//Returns dpi data from its number
app.get('/dpi', (request, response) => {
    if(!request.query?.number){
        response.status(400).send("[number] query parameter required.");
    }

    const number: any = request.query.number;
    const document: any = documents[number];
    if(document){
        response.send(documents[number]);
    } else {
        response.status(400).send("Invalid dpi number asdfs.");
    }
});



export const api = functions.https.onRequest(app);
