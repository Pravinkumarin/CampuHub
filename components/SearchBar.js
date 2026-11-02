export default function SearchBar({ value, onChange, placeholder = "Search..." }) {
  return (
    <input
      type="search"
      className="input search"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label="Search"
    />
  );
}
