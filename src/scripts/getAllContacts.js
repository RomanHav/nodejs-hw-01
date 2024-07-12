import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
  try {
    const contactInfo = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactInfo);
    return contacts;
  } catch (error) {
    console.error('Error reading file:', error);
    return [];
  }
};

console.log(await getAllContacts());
