// import { Outlet, Link } from "react-router-dom";
// import localStorage from 'localforage';
import { getContact, getContacts } from "../contacts";

export async function getContactsLoader ()
{
    // localStorage.clear();  
  const contacts = await getContacts();
  return { contacts };
};

export async function getContactLoader({ params }) {
  const contact = await getContact(params.contactId);
  return { contact };
}
