# 🚚 LogiX — Full-Stack Fleet Management System (MERN)

**LogiX** is a complete **MERN full-stack fleet management platform** designed to digitalize and optimize the management of trucks, trailers, drivers, trips, fuel consumption, tire tracking, and maintenance operations.
The goal is to replace manual processes (Excel, calls, paper forms) with a centralized, fast, and reliable web application.

---

## ✨ Key Features

### 🔧 **Admin Panel**

* Manage trucks, trailers, tires, and drivers
* Create and assign trips (mission orders)
* Monitor mileage, fuel consumption, and tire wear
* Configure maintenance rules (oil change, tire change, technical inspection)
* Access detailed reports (kilometers, consumption, costs, maintenance history)

### 🚛 **Driver Dashboard**

* View all assigned trips
* Download the mission order in **PDF format**
* Update trip status: *To Do → In Progress → Completed*
* Submit start/end mileage, fuel quantity, and vehicle condition notes

---

## 🗄️ Back-End (Node.js, Express, MongoDB)

* Built with **Express.js** and **Mongoose ODM**
* Secure authentication using **JWT**
* Role-based authorization (Admin / Driver)
* REST API architecture with modular controllers
* Global error-handling middleware
* Input validation
* PDF generation for mission orders
* Unit tests for every controller (**Jest + Supertest**)
* Clean, maintainable folder structure:

```
/backend
  /config
  /controllers
  /models
  /routes
  /middlewares
  /utils
  /tests
```

---

## 🎨 Front-End (React.js)

* Built with **React Hooks** (useState, useEffect, useContext)
* Global state managed with **Context API or Redux**
* **Protected routes** based on user roles
* Nested routing for Admin/Driver sections
* Responsive UI with clean dashboard layouts
* PDF download integration
* Folder structure:

```
/frontend
  /src
    /components
    /pages
    /contexts
    /services
    /utils
    /layouts
    /routes
```

---

## 🐳 Deployment (Docker)

* Dockerfile for **backend** and **frontend**
* Docker Compose to link services and MongoDB
* Environment variables for configuration
* Production-ready build

---

## 🎯 Project Objective

LogiX demonstrates the creation of a complete **MERN full-stack professional application** integrating secure authentication, role authorization, PDF generation, dashboards, and real-time fleet management features.

