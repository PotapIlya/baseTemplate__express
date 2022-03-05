require('dotenv').config();

import * as express from 'express';
import { allRoutes } from './router';

// const cors = require('cors');
// const cookieParser = require('cookie-parser');
// const router = require('./routes/index')
// const errorMiddleware = require('./middleware/errorMiddleware')
//
const app = express();

app.use(allRoutes)

// OPTIONS
// app.options('*', cors());
// app.use(cors({
//     origin: true, credentials: true
// }));

// app.use(express.json());

// app.use(cookieParser());


// const bodyParser = require('body-parser');
// app.use(bodyParser.json());

// app.use('/api', router);
// app.use('/api', router);


// app.use(errorMiddleware);
export {
    app
}
