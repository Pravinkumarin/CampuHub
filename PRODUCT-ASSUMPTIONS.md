# PRODUCT ASSUMPTIONS

**Product:** CampusHub
**Team:** Pravinkumar, Sushant
**College:** Sahyadri College of Engineering & Management (ISE)

---

## 1. What product are we planning to build?
CampusHub is a simple web app for college students. It keeps 3 things in one place:
- Announcements (important notices)
- Campus Events (workshops, hackathons, college events)
- Lost & Found (report and find lost items)

## 2. What problem does it solve?
In college, information is all over the place:
- Notices come on WhatsApp groups, notice boards and email. Students miss them.
- Events are shared in many places. Students find out late.
- If someone loses an ID card or a bottle, there is no proper way to report it or find it.

CampusHub gives students one place to check everything.

## 3. Who are the target users?
- Main users: college students.
- Later users: faculty and club members who post notices and events.

## 4. What is the main use case?
A student opens CampusHub on their phone. They check the latest announcements, find an upcoming event, and report or search a lost item. All in about a minute.

## 5. What are the core features?
1. **Announcements:** list with date and category, search, category filter.
2. **Campus Events:** event cards, event details page, register / cancel button.
3. **Lost & Found:** report a lost or found item (form), search, Lost/Found tabs, details popup, mark as claimed.
4. **Home page:** short summary of all three.

## 6. What assumptions are we making about the users?
- Students use their phone many times a day, so the app must work well on mobile.
- Students want to find a notice fast, so search and categories matter.
- Students do not read long text, so cards are short.
- Students mostly read first and post later, so browsing is open and posting is one simple form.
- In future, only faculty and clubs will post announcements. For now we use dummy data.
- Students will report lost and found items honestly.

## 7. What will be included in the MVP?
- Pages: Home, Announcements, Events, Event Details, Lost & Found, Report Item
- Reusable components (Navbar, Footer, Card, Button, Badge, Input, Select, SearchBar, Modal, EmptyState)
- React Context for shared state
- Dummy data for announcements, events and lost/found items
- Search and filters
- Add new item and mark as claimed (saved in Context, no backend)
- Responsive design (mobile and desktop)

## 8. What will NOT be included in the MVP?
- Real login and register
- Backend, database or API
- Image upload
- Push notifications or email alerts
- Admin approval
- Chat between users
- Calendar sync

These are planned for the next milestone.

## Inspiration
The idea came from our own college problem: notices, events and lost items are scattered and students miss them.
While planning, we checked similar products. **Uniloop** (Product Hunt) is an all-in-one campus platform with events and lost & found, so we use it as our reference product.
We took only the inspiration. Our features, design and code are our own and made for our college.
