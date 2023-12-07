import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import globalErrorHandler from './app/config/middlewares/globalErrorhandler';
import notFound from './app/config/middlewares/notFound';
import router from './app/routes';

const app: Application = express();

// Parsers
app.use(express.json());
app.use(cors());

// Applications routes
app.use('/api/v1', router); // Add leading slash (/)


const test = (req: Request, res: Response) => {
    const a = 10;
    res.send(a); // Ensure to send a string response
};
app.get('/', test);

app.use(globalErrorHandler);
//not found route
app.use(notFound);

export default app;
