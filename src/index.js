import app from './app.js';
import { createConection } from './database.js';

createConection();
app.listen(3200);
console.log('Estoy corriendo en el puerto 3200');