import { useState } from "react";

function ContactForm({ onAdd }) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!name) return;

        onAdd({ name, email, phone})
        setName("");
        setEmail("");
        setPhone("");
    };

    return (
        <form onSubmit={submit}>
            <input 
                placeholder="Name"
                value={name} 
                onChange={e => setName(e.target.value)}
            />
            <input 
                placeholder="Email" 
                value={email} 
                onChange={e => setEmail(e.target.value)} 
            />
            <input 
                placeholder="Phone" 
                value={phone} 
                onChange={e => setPhone(e.target.value)} 
            />
            <button>Add</button>
        </form>
    );
}

export default ContactForm;