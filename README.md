# CampusHub

One place for college announcements, events and lost & found.
Built with Next.js, React and plain CSS. Milestone-1 MVP (dummy data, no backend).

## Docs
- [PRODUCT-ASSUMPTIONS.md](./PRODUCT-ASSUMPTIONS.md)
- [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md)
- Wireframe: add Figma / Excalidraw link here

## Pages
| Route | Purpose |
|---|---|
| `/` | Home with summary |
| `/announcements` | Notices, search, category filter |
| `/events` | Workshops, hackathons, events |
| `/events/[id]` | Event details and register |
| `/lost-found` | Lost and found items |
| `/lost-found/report` | Report a lost/found item |

## Architecture
Next.js -> Pages -> Components -> React Context -> Dummy Data

## Folder Structure
```
campushub/
├── app/           (pages + layout + global css)
├── components/    (reusable UI)
├── context/       (CampusContext)
├── data/          (dummy data)
├── utils/         (helper functions)
├── public/
├── README.md
├── PRODUCT-ASSUMPTIONS.md
├── DESIGN-SYSTEM.md
└── package.json
```

## Run locally
```bash
git clone <repo-link>
cd campushub
npm install
npm run dev
```
Open http://localhost:3000

## Team
| Student | Work |
|---|---|
| Pravinkumar | Next.js setup, Navbar, Home, React Context, Announcements, docs |
| Sushant | Reusable components, Events, Lost & Found, Report form, dummy data, responsive UI |

## Inspiration
Own idea from our college problem. Reference product: Uniloop (Product Hunt).
