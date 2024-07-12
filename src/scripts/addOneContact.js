import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  try {
    const contactInfo = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactInfo);

    const newContact = createFakeContact();

    contacts.push(newContact);

    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), 'utf-8');

    console.log('New contact added and saved successfully!');
  } catch (error) {
    console.log('Error reading or writing file:', error);
  }
};

addOneContact();
