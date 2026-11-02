# DESIGN SYSTEM - CampusHub

## 1. Colors

| Use | Name | Hex |
|---|---|---|
| Primary | Blue | #2563EB |
| Secondary | Violet | #7C3AED |
| Accent | Amber | #F59E0B |
| Background | Light Gray | #F8FAFC |
| Card background | White | #FFFFFF |
| Text | Dark | #111827 |
| Secondary text | Gray | #6B7280 |
| Border | Light border | #E5E7EB |
| Success | Green | #16A34A |
| Error | Red | #DC2626 |

**Badge colors**
- Exam: Red
- Placement: Green
- Events / Hackathon: Violet
- General / Workshop: Blue
- Cultural / Lost: Amber
- Found / Technical: Green
- Claimed: Gray

## 2. Typography

**Font:** Inter (fallback: system-ui, sans-serif)

| Style | Size / Weight |
|---|---|
| H1 | 32px / Bold |
| H2 | 24px / Semi Bold |
| H3 | 20px / Semi Bold |
| Body | 16px / Regular |
| Button text | 16px / Medium |
| Small / secondary | 14px / Regular |

## 3. Spacing and Shape
- Spacing: 4, 8, 16, 24, 32 px
- Card radius: 12px
- Button and input radius: 8px
- Card shadow: light

## 4. UI Components (reusable)

| Component | Used in |
|---|---|
| Navbar | All pages |
| Footer | All pages |
| Button | Forms, cards, actions |
| Card | Announcements, events, lost/found, home |
| Badge | Category, type and status |
| Input | Report form |
| Select (dropdown) | Filters, form |
| SearchBar | Announcements, events, lost & found |
| Modal | Lost/found item details |
| EmptyState | When search has no result |

## 5. UI Decisions
- Clean and simple so students can read fast.
- Mobile first. On mobile the Navbar becomes a menu button.
- Same Card and Badge on every page for a consistent look.
- Badges always have a text label, not only color.
