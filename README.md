# LifeLog Tracker

LifeLog is a full-stack personal growth and productivity application designed to help individuals track their daily activities, ideas, tasks, notes, and overall progress — all in one place.

The core idea behind LifeLog is simple:
**log what you do, measure your progress, and improve consistently over time.**

LifeLog focuses on both **professional and personal development**, providing a structured way to reflect on actions, ideas, and achievements.

---

## 🚀 Project Vision

Many productivity tools focus on just one aspect — tasks, notes, or calendars. LifeLog aims to bring these together into a single, simple system that allows users to:

* Track what they are working on
* Capture ideas instantly
* Monitor progress over time
* Reflect on personal growth
* Stay organized professionally and personally

LifeLog is built as a **personal project** but is designed in a way that it can scale into a complete productivity platform.

---

## ✨ Planned Features

### 📝 Core Features (MVP)

* Task management (create, update, complete tasks)
* Notes and idea logging
* Daily / weekly progress tracking
* Simple dashboard overview
* Authentication (JWT-based)

### 📅 Upcoming Features

* Calendar events and meeting reminders
* Goal tracking and milestones
* Progress analytics and visual insights
* Search and filtering
* Responsive UI for all devices

---

## 🛠️ Tech Stack

### Frontend

* Next.js (React)
* Modern component-based UI
* API integration with backend

### Backend

* Node.js
* Express.js
* RESTful API architecture

### Database

* MongoDB (NoSQL)
* Mongoose ODM

### Other Tools

* Git & GitHub for version control
* JWT for authentication
* Environment-based configuration

---

## 📁 Project Structure

```
lifelog-tracker/
├── client/        # Next.js frontend
│   ├── pages/
│   ├── app/
│   ├── components/
│   └── package.json
│
├── server/        # Node.js + Express backend
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── middleware/
│   └── package.json
│
├── .gitignore
└── README.md
```

---

## ⚙️ Installation & Setup

### Prerequisites

* Node.js (v18 or above recommended)
* MongoDB (local or cloud)
* Git

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/bachansingh1407/LifeLog-tracker.git
cd LifeLog-tracker
```

---

### 2️⃣ Frontend Setup (Client)

```bash
cd client
npm install
npm run dev
```

Frontend will run on:

```
http://localhost:3000
```

---

### 3️⃣ Backend Setup (Server)

```bash
cd server
npm install
npm run dev
```

Backend will run on:

```
http://localhost:5000
```

---

## 🔐 Environment Variables

Create a `.env` file inside the `server` folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

*(Do not commit `.env` files to GitHub)*

---

## 🔄 API Overview (Initial Plan)

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |
| GET    | /api/tasks         | Get all tasks |
| POST   | /api/tasks         | Create a task |
| PUT    | /api/tasks/:id     | Update a task |
| DELETE | /api/tasks/:id     | Delete a task |

*(More APIs will be added as development continues)*

---

## 📊 Future Enhancements

* Charts and analytics for progress tracking
* Habit tracking system
* Notifications and reminders
* Cloud sync and backups
* Dark mode

---

## 🤝 Contribution

This is currently a personal project, but suggestions and ideas are welcome.

Steps to contribute:

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Submit a pull request

---

## 📌 Project Status

🚧 **In Active Development**

LifeLog is currently under development. Features and structure may change as the project evolves.

---

## 👨‍💻 Author

**Bachan Singh**
Full-Stack Developer

GitHub: [https://github.com/bachansingh1407](https://github.com/bachansingh1407)

---

## 📜 License

This project is licensed under the MIT License.

---

> *Log your life. Track your growth.*
