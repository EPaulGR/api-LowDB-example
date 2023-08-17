import { Router } from 'express';
import { 
  getUser,  
  updateUser,  
} from '../controllers/users.controller.js'
const router = Router();

router.get('/users/:id', getUser);
router.put('/users/:id', updateUser);

export default router;