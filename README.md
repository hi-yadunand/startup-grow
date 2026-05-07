# StartupGrow

StartupGrow is a web-based digital solutions platform for Indian startups. It helps early-stage teams request services such as website development, SEO, PPC advertising, social media marketing, content marketing, and email campaigns from one place.

## Team Members

- Yadunand Pavithran
- Nashid Nihal C
- Gokul Krishna

## Features

- Responsive Next.js frontend
- Service listing and portfolio display
- Service request form for startup inquiries
- Express.js backend API
- MongoDB storage for service requests
- Basic admin dashboard for request tracking
- Project report, presentation, and system diagrams

## Tech Stack

- Frontend: Next.js, React, Tailwind CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB with Mongoose
- Documentation: Markdown, Mermaid, PPTX

## Project Structure

```text
startup-grow/
+-- app/                    # Next.js app pages and global styles
+-- components/             # Frontend UI components
+-- lib/                    # API helper functions
+-- server/                 # Express.js backend
|   +-- models/             # Mongoose models
+-- docs/                   # Report, diagrams, and generated presentation
+-- scripts/                # Utility scripts
+-- public/                 # Static assets
```

## Setup

Install dependencies:

```bash
npm install
```

Create an environment file:

```bash
cp .env.example .env
```

Update `.env` if your MongoDB URI or ports are different:

```env
PORT=4000
MONGODB_URI=mongodb://127.0.0.1:27017/startupgrow
CLIENT_ORIGIN=http://localhost:3000
NEXT_PUBLIC_API_URL=http://localhost:4000
```

Run the backend API:

```bash
npm run dev:api
```

Run the frontend in another terminal:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## API Endpoints

| Method | Endpoint | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Check API and database mode |
| GET | `/api/services` | List available services |
| POST | `/api/requests` | Create a service request |
| GET | `/api/requests` | Get recent service requests |
| PATCH | `/api/requests/:id/status` | Update request status |

If `MONGODB_URI` is not configured or MongoDB is unavailable, the API runs with temporary in-memory storage for demo use.

## Documentation

- Project report: [`docs/StartupGrow_Project_Report.md`](docs/StartupGrow_Project_Report.md)
- Diagrams: [`docs/DIAGRAMS.md`](docs/DIAGRAMS.md)
- Presentation: generated at `docs/StartupGrow_Presentation.pptx`

Generate the PowerPoint file:

```bash
npm run docs:ppt
```

The generated file is already included at `docs/StartupGrow_Presentation.pptx`. A Node-based generator is also available with `npm run docs:ppt:node` after dependencies are installed.

## Testing

Build the frontend:

```bash
npm run build
```

Check the API:

```bash
curl http://localhost:4000/api/health
```
