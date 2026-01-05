import { useEffect, useState} from "react"
import { getContacts, addContact, deleteContact } from "./services/api";

function App() {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        getContacts().then(setContacts);
    }, []);
    
    const handleAdd = async (contact) => {
        const saved =
    }
}