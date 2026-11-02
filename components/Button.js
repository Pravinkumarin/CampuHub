import Link from "next/link";

// variant: "primary" | "secondary" | "outline"
// If href is given, it works like a link. Otherwise it is a normal button.
export default function Button({ children, href, variant = "primary", type = "button", onClick, disabled }) {
  const className = `btn btn-${variant}`;

  if (href) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
