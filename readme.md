# 🛠️ techNotes (MERN Stack)

A full-stack ticketing and repair notes management application built for tech businesses and IT support teams. Built following Dave Gray's MERN stack architecture, featuring secure role-based access control (RBAC), note assignment, employee management, and real-time state synchronization via Redux Toolkit Query.

🔗 **Live Demo:** [https://technotes-nwwc.onrender.com/](https://technotes-nwwc.onrender.com/)

---

## ✨ Features

- **🔐 Authentication & Role-Based Access Control (RBAC)**
  - JWT authentication using secure `HttpOnly` cookies (`access_token` and `refresh_token`).
  - Strict role authorization: **Employee**, **Manager**, and **Admin**.
  - Persistent login session management with auto-refresh mechanism.

- **📝 Note & Ticket Management**
  - Create, assign, update, complete, and delete tech support tickets.
  - Automatic ticket numbering with sequential counters (`mongoose-sequence`).
  - Track assigned technicians, timestamps, and resolution status (*Open* / *Completed*).

- **👥 User & Employee Management**
  - Manage employee profiles, roles, and active statuses (restricted to Managers & Admins).
  - Secure password hashing using `bcrypt`.

- **⚡ Fast, Optimistic UI & State Caching**
  - Built with **Redux Toolkit Query (RTK Query)** for streamlined data fetching, normalization, and automatic cache invalidation.
  - Normalized state with `createEntityAdapter` for snappy UI updates.

- **🛡️ Robust Security & Middleware**
  - Protected API routes with CORS configuration, rate limiting (`express-rate-limit`), and custom request/error logging (`logger.js`, `errorHandler.js`).

---

## 🛠️ Tech Stack

- **Frontend:** React, Redux Toolkit & RTK Query,CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas with Mongoose ODM 
- **Authentication:** JSON Web Tokens (JWT)

---


