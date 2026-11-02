// Reusable dropdown. options is an array of strings.
export default function Select({ label, id, value, onChange, options }) {
  return (
    <div className="field">
      {label && <label htmlFor={id}>{label}</label>}
      <select id={id} value={value} onChange={onChange} className="input">
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
