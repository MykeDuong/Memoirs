import express from 'express';

import { regAuth, loginAuth, googleAuth } from '../controllers/auth.js';

const router = express.Router();

router.post('/register', regAuth);
router.post('/login', loginAuth);
router.post('/google', googleAuth);

export default router;