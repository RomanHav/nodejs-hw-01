import fs from 'fs/promises';
import { PATH_DB } from '../constants/contacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const contactInfo = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(contactInfo);

    const arrContact = [];
    for (let i = 0; i < number; i++) {
      const fakeContact = createFakeContact();
      arrContact.push(fakeContact);
    }

    const updatedContacts = [...contacts, ...arrContact];

    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2));

    console.log(
      `Contacts generated and saved successfully! Total contacts: ${updatedContacts.length}`,
    );
  } catch (error) {
    console.error('Error reading or writing file:', error);
  }
};

generateContacts(5);
