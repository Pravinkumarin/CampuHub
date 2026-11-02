// Reusable text input. Set multiline to get a textarea.
export default function Input({ label, id, type = "text", value, onChange, placeholder, error, multiline = false }) {
  const className = error ? "input input-error" : "input";

  return (
    <div className="field">
      {label && <label htmlFor={id}>{label}</label>}
      {multiline ? (
        <textarea id={id} rows={4} value={value} onChange={onChange} placeholder={placeholder} className={className} />
      ) : (
        <input id={id} type={type} value={value} onChange={onChange} placeholder={placeholder} className={className} />
      )}
      {error && <p className="error-text">{error}</p>}
    </div>
  );
}
