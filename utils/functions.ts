import { v4 as uuidv4 } from 'uuid';

// Get a random ID
const getRanddomID = () => {
  return uuidv4();
};

// Validate contact no
const isValidContactNumber = (contact: string): boolean => {
  const contactNumberRegex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/;
  const contactDigits = contact.replace(/\D/g, '');

  return contactNumberRegex.test(contactDigits);
};

export { getRanddomID, isValidContactNumber };
