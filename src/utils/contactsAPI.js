import axios from 'axios';

axios.defaults.baseURL = 'https://64b44b900efb99d86268f063.mockapi.io';

export const getContacts = async () => {
    const data = await axios.get('/contacts');
    return data.data;
}

export const addContact = async (contact) => {
    const res = await axios.post('/contacts', contact);
     console.log(res);
     console.log(res.data);
    return res.data
}

export const deleteContact = async (id) => {
    const res = await axios.delete(`/contacts/${id}`)
   
    return res.data
}