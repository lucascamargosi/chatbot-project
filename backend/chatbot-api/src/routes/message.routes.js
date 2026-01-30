import { Router } from 'express';
import { sendMessage } from '../controllers/messageController.js';

const router = Router();

router.post('/', sendMessage); // rota aceita requisições do tipo POST (ex: mensagem do usuário)

export default router;
