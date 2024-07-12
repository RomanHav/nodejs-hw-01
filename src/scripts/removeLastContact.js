import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const contactInfo = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactInfo);

    if (contacts.length > 1) {
      contacts.pop();
    } else {
      console.log('Array not have the last contact');
    }

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');
    console.log('The lust contact removed success');
  } catch (err) {
    console.log('Error reading file:', err);
  }
};

removeLastContact();
