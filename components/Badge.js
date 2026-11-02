// Default colors for each label (matches DESIGN-SYSTEM.md)
const TONES = {
  Exam: "red",
  Placement: "green",
  Events: "violet",
  General: "blue",
  Workshop: "blue",
  Hackathon: "violet",
  Cultural: "amber",
  Technical: "green",
  Lost: "amber",
  Found: "green",
  Claimed: "gray",
  Open: "blue",
};

export default function Badge({ label, tone }) {
  const color = tone || TONES[label] || "blue";
  return <span className={`badge badge-${color}`}>{label}</span>;
}
