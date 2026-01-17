# Course Finder – UI Development Test

This project is a frontend implementation of the **coursefinder.ai** dashboard UI, built as part of a technical assessment.

## Tech Stack

- React 19 + TypeScript
- Vite
- React Router
- Tailwind CSS

---

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

App runs at `http://localhost:5173`

---

## Viewing & Interacting with the App

1. **Open the app** – Navigate to `http://localhost:5173` (dev) or `http://localhost:8080` (Docker)
2. **Dashboard** – The main page displays applications, upcoming events, news bulletins, and quick links
3. **Sidebar Navigation** – Use the left sidebar to switch between Dashboard, Courses, Applications, Documents, and Messages
4. **Filter & Sort** – Use the filter bar above the applications table to filter by category, intake, status, and sort options
5. **Table Pagination** – Navigate through application records using the pagination controls at the bottom of the table

> **Note:** Some pages (Courses, Documents, Messages) display a "Coming Soon" placeholder as they are under development.

---

## Docker Deployment

```bash
# Build
docker build -t course-finder .

# Run
docker run -p 8080:80 course-finder
```

App runs at `http://localhost:8080`

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Development server |
| `npm run build` | Production build |
| `npm run preview` | Preview build |
| `npm run lint` | Lint code |
