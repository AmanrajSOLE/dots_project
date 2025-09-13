import { useState } from "react";
import "./Contacts.css";
import Link from "../../Images/Link.svg";
import new_tab from "../../Images/newtab.svg";

export default function Contacts({ contact }) {
  const [copied, setCopied] = useState(false);

  const handleCopyClick = () => {
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 1500);
  };

  return (
    <div className="contact-card">
      <div className="contact-card-left">
        <div className="contact-image-wrapper">
          <img src={contact.image} alt={contact.name} className="contact-image" />
          <span className={`status-dot ${contact.status}`}></span>
        </div>

        <div className="contact-info">
          <span className="contact-name">{contact.name}</span>
          <span className="contact-status">{contact.status}</span>
        </div>
      </div>

      <div className="contact-card-right">
        <div className="link-wrapper" onClick={handleCopyClick}>
          {copied && <span className="tooltip">Link copied</span>}
          <img className="contact-card-right-link" src={Link} alt="Link_icon"/>
        </div>

        <div className="contact-card-right-new_tab">
          <img src={new_tab} alt="logo"/>
          new tab
        </div>
      </div>
    </div>
  );
}
