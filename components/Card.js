// Reusable card. Used for announcements, events and lost/found items.
export default function Card({ title, description, badge, meta, children, onClick }) {
  return (
    <div className={onClick ? "card card-click" : "card"} onClick={onClick}>
      {badge && <div className="card-top">{badge}</div>}
      <h3 className="card-title">{title}</h3>
      {description && <p className="card-desc">{description}</p>}
      {meta && <p className="card-meta">{meta}</p>}
      {children}
    </div>
  );
}
