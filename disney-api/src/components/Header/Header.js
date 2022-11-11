import { Search } from "../Search/Search";
import "./Header.css";

export function Header({ setSearch }) {
  return (
    <header>
      <h1>DisneyWorld</h1>
      <Search handleSearch={setSearch} />
    </header>
  );
}
