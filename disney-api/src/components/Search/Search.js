import { MdSearch } from "react-icons/md";
import "./Search.css";

export function Search({ handleSearch }) {
  return (
    <div className="search">
      <MdSearch className="search-icon" size="1.3em" />
      <input
        type="text"
        placeholder="Qual personagem deseja encontrar?"
        onChange={(event) => handleSearch(event.target.value)}
      />
    </div>
  );
}
