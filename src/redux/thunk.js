import { createAsyncThunk } from '@reduxjs/toolkit';
import * as contactsAPI from '../utils/contactsAPI';

export const getContactsThunk = createAsyncThunk('conotacts/get', () =>
  contactsAPI.getContacts()
);
export const addContactsThunk = createAsyncThunk('conotacts/add', (data) =>
  contactsAPI.addContact(data)
);
export const deleteContactsThunk = createAsyncThunk('conotacts/delete', (id) =>
  contactsAPI.deleteContact(id)
);
