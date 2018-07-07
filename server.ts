import * as express from 'express';
import { join } from 'path';

const serverApp = express();

serverApp.get('/', (req, res) => {
    res.send("Hello!");
});

export default serverApp