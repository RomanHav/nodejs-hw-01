import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
  try {
    const contactInfo = await fs.writeFile(
      PATH_DB,
      JSON.stringify([], null, 2),
      'utf-8',
    );
    console.log(
      `The file was cleaned successfully. Our file contain: ${contactInfo}`,
    );
  } catch (err) {
    console.log('Error reading file:', err);
  }
};

removeAllContacts();
