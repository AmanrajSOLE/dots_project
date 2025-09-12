import "./Contacts.css"; 

export default function Contacts({ contact }) {
  return (
    <div className="contact-card">
      <img src={contact.image} alt={contact.name} />
      <div className="contact-info">
        <span className="contact-name">{contact.name}</span>
        <span className={`contact-status ${contact.status}`}>
          {contact.status}
        </span>
      </div>
    </div>
  );
}
