import { v4 as uuidv4 } from 'uuid';

// Get a random ID
const getRanddomID = () => {
  return uuidv4();
};

export { getRanddomID };
