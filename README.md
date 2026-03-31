# React Router v6 - Simple Beginner Project

Yeh ek simple React application hai jisme **React Router v6** ka use karke multi-page feel banaya gaya hai bina page reload kiye.

Perfect for beginners jo React Router samajhna chahte hain.

### 🎥 YouTube Video
Is project ko step-by-step samjha gaya hai is video mein:

→ **[Mera YouTube Video Link Yahan Paste Karein](https://youtu.be/U2waLER4ycM)**

Video mein maine poora setup, navigation aur dynamic routing explain kiya hai.

---

## 📁 Project Structure
src/
├── App.jsx                 → Main App with Navigation
├── main.jsx                → Entry point (BrowserRouter wrap kiya)
├── Routes/
│   └── MainRoutes.jsx      → Saare Routes define kiye gaye hain
├── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Users.jsx           → Dynamic route example
│   └── Notpage.jsx         → 404 Page
└── ...


---

## 📋 Kaise Kaam Karta Hai?

### 1. `main.jsx` (Sabse Important)
- Pura application ko `<BrowserRouter>` ke andar wrap kiya gaya hai.
- Iske bina React Router kaam nahi karega.

### 2. `App.jsx`
- Top pe Navigation bar banaya hai using `<Link>`
- `<Link>` use karne se page reload nahi hota (SPA feel)
- Neeche `<MainRoutes />` render ho raha hai

### 3. `MainRoutes.jsx`
- `<Routes>` aur `<Route>` se saare paths define kiye gaye hain
- Dynamic Route: `/users/:id` (example: /users/5, /users/101)
- 404 Page: `path="*"` (agar galat URL ho to yeh page dikhega)

---

## 🚀 Available Routes (Pages)

| URL                | Page          | Description                          |
|--------------------|---------------|--------------------------------------|
| `/`                | Home          | Homepage                             |
| `/about`           | About         | About page                           |
| `/contact`         | Contact       | Contact page                         |
| `/users`           | Users         | Users list (static)                  |
| `/users/:id`       | Users         | Dynamic user page (id ke hisaab se)  |
| Any wrong URL      | Not Found     | 404 Error Page                       |

---

## 🛠️ Installation & Run Karne Ka Tarika

```bash
# Project folder mein ja kar ye commands run karein

npm install

# Development server start karne ke liye
npm run dev
