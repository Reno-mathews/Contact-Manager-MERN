const API_URL = "http://localhost:5000/contacts";

export const getContacts = async () => {
    const res = await fetch(API_URL);
    return res.json();
};

export const addContact = async (contact) => {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(contact)
    });
    return res.json();
};

export const deleteContact = async (id) => {
    await fetch
}