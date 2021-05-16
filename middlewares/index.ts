import nc from 'next-connect';
import { connectToDatabase } from './database';

const all = nc();

all.use(connectToDatabase);

export default all;
