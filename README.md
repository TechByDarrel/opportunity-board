# Opportunity Board

Opportunity Board is a full-stack web application built to help students, recent graduates, and young professionals discover career-building opportunities like internships, scholarships, jobs, bootcamps, and competitions in one place.

## Problem It Solves

Many opportunities are scattered across different platforms, making them hard to track. This project centralizes them into a searchable and filterable hub.

## Users

- Visitors — browse opportunities
- Registered Users — save/bookmark opportunities and manage their dashboard
- Admins — create, edit, delete, and feature opportunities

## Tech Stack

### Frontend
- Next.js
- React
- Tailwind CSS
- TanStack Query
- Axios

### Backend
- Node.js
- Express.js

### Database
- PostgreSQL

### Authentication
- JWT
- bcrypt

## Project Status

### Phase 1 Complete
- Next.js frontend setup
- Express backend setup
- Frontend connected to backend API
- Project folder structure organized
- Environment variables configured

## Current Features
- Frontend running successfully
- Backend API running successfully
- Health check endpoint working
- Frontend-backend connection confirmed

## Planned Features
- User authentication
- Opportunity listings
- Search and filters
- Save/bookmark opportunities
- User dashboard
- Admin dashboard
- CRUD for opportunities
- Featured opportunities

## Project Structure

```bash
opportunity-board/
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middleware/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── app.js
│   │   └── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── app/
│   │   ├── lib/
│   │   ├── providers/
│   │   └── ...

Author

Built by Darrel as part of a beginner full-stack developer portfolio project.
│   └── package.json
│
└── README.md
