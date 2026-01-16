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
