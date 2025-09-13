import { useState, useEffect } from "react";
import SearchBox from "./Components/Search/Search_box";
import ContactList from "./Components/ContactList/ContactList";
import Contacts from "./data/contacts.json";
import "./App.css";

function App() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (search.length > 0) {
      setLoading(true);

      const timer = setTimeout(() => {
        setFiltered(
          Contacts.filter((c) =>
            c.name.toLowerCase().includes(search.toLowerCase())
          )
        );
        setLoading(false);
      }); 

      return () => clearTimeout(timer); 
    } else {
      setFiltered([]); 
      setLoading(false);
    }
  }, [search]);

  return (
    <div className="app">
      <div className={`app-wrapper ${showMenu ? "scaled" : ""}`}>
        <div
          className={`content-container`}
        >
          <SearchBox
            value={search}
            onChange={setSearch}
            isSearching={search.length > 0}
            isLoading={loading}
          />
          <ContactList
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            contacts={filtered}
            isActive={search.length > 0}
          />

          {showMenu && (
            <div className="overlay" onClick={() => setShowMenu(false)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
