import { useState } from "react";
import Contacts from "../Contacts/Contacts";
import Setting from "../../Images/Setting.svg";
import people_icon from "../../Images/People.svg";
import file_icon from "../../Images/chat.svg";
import chat_icon from "../../Images/chat.svg";
import List_icon from "../../Images/list.svg";
import Home_icon from "../../Images/Home.svg";
import "./ContactList.css";

export default function ContactList({
  contacts,
  isActive,
  showMenu,
  setShowMenu,
}) {
  // Default navbar items
  const iconMap = {
    All: Home_icon,
    Files: file_icon,
    People: people_icon,
    Chats: chat_icon,
    Groups: List_icon,
  };
  const allItems = ["All", "Files", "People", "Chats", "Groups"];
  const [visibleItems, setVisibleItems] = useState(allItems);

  const handleToggle = (item) => {
    setVisibleItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  return (
    <div
      className={`contact-list-container ${
        contacts.length > 0 && isActive ? "active" : "closing"
      }`}
    >
      {isActive ? (
        <>
          <div className="contact-list-navbar">
            <div className="contact-list-navbar-left">
              {allItems.map((item) =>
                visibleItems.includes(item) ? (
                  <div key={item}>
                    {item}
                    <span className="count">{contacts.length}</span>
                  </div>
                ) : null
              )}
            </div>

            <div className="contact-list-navbar-right relative">
              <img
                src={Setting}
                alt="setting_symbol"
                className={`cursor-pointer setting-icon ${
                  showMenu ? "rotated" : ""
                }`}
                onClick={() => setShowMenu((prev) => !prev)}
              />

              {showMenu && (
                <div className="popup-menu">
                  {allItems.map((item) => (
                    <div
                      key={item}
                      className={`popup-item ${
                        !visibleItems.includes(item) ? "disabled" : ""
                      }`}
                    >
                      <span className="popup-icon">
                        <img src={iconMap[item]} alt={`${item} icon`} />
                      </span>
                      <span className="popup-label">{item}</span>
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={visibleItems.includes(item)}
                          onChange={() => handleToggle(item)}
                        />
                        <span className="slider"></span>
                      </label>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={`contact-list ${isActive ? "active" : "closing"}`}>
            {contacts.map((c) => (
              <Contacts key={c.id} contact={c} />
            ))}
          </div>
        </>
      ) : (
        <div className="no-results"></div>
      )}
    </div>
  );
}
