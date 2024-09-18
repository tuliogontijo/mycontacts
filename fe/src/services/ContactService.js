import delay from '../utils/delay';

class ContactService {
  async listContacts(orderBy = 'ASC') {
    const response = await fetch(`http://localhost:3001/contacts?orderBy=${orderBy}`);

    await delay(300);

    return response.json();
  }
}

export default new ContactService();
