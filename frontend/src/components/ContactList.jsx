function ContactList({ contacts, onDelete }) {
    return (
        <ul>
            {contacts.map(c => (
                <li key={c._id}>
                    {c.name} - {c.phone}
                    <button onClick={() => onDelete(c._id)}>❌</button>
                </li>
            ))}
        </ul>
    )
}