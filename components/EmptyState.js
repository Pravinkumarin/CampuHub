// Shown when there is nothing to display (for example, no search result)
export default function EmptyState({ title = "Nothing found", message = "Try a different search." }) {
  return (
    <div className="empty">
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
}
