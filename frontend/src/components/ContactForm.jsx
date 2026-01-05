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

    return 
}