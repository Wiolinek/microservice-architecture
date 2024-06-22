import { healthCheck } from '@controllers/health';
import express from 'express';

const router = express.Router();

export const healthRoute = () => {
    router.get('/gateway-health', healthCheck);
    return router;
}