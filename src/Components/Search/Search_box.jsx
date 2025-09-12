import Magnifying_logo from "../../Images/search.svg";
import "./Search_box.css";

export default function SearchBox({ value, onChange, isSearching, isLoading }) {
  return (
    <div className={`search-container ${isSearching ? "active" : ""}`}>
      {/* Loading symbol */}
      <div className="magnify-icon">
        {isLoading ? (
          <div className="spinner"></div>
        ) : (
          <img className="magnifying-logo" src={Magnifying_logo} alt={"magnifying logo"} />
        )}
      </div>

      {/* Input box */}
      <input
        type="text"
        placeholder="Search contacts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-box"
      />

      {value ? (
        <div onClick={() => onChange("")} className="clear-btn">
          Clear
        </div>
      ) : (
        !isSearching && (
          <div onClick={() => onChange("")} className="inactive-btn">
          Quick Access
          </div>
        )
      )}
    </div>
  );
}
