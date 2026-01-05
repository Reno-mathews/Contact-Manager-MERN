import { useEffect, useState} from "react"
import { getContacts, addContact, deleteContact } from "./services/api";

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContacts().then(setContacts);
    }, []);
    
    const handleAdd = async (contact) => {
        const saved = await addContact(contact);
        setContacts([...contacts, saved]);
    };

    const handleDelete = async (id) => {
        await deleteContact(id);
        setContacts(contacts.filter(c => c._id !== id));
    };

    return (
        <>
            <Contact Form onAdd={handleAdd} />
            <ContactList contacts={contacts} onDelete={handleDelete} />
        </>
    );
}

export default App;