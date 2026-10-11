# SmartExpense — Smart Expense Tracking Application

SmartExpense is a personal finance application designed to help users record, organize, and monitor their income and expenses. The project is being developed collaboratively as part of a software engineering assignment.

The application combines a React frontend with a Flask REST API and a SQLAlchemy database layer. The project follows a feature-branch Git workflow to support collaboration, code review, and maintainable development history.

## Table of Contents

- [Project Objectives](#project-objectives)
- [Technology Stack](#technology-stack)
- [System Architecture](#system-architecture)
- [Planned Application Features](#planned-application-features)
- [Current Implementation Status](#current-implementation-status)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation and Setup](#installation-and-setup)
- [Running the Frontend](#running-the-frontend)
- [Running the Flask Backend](#running-the-flask-backend)
- [Database and Migrations](#database-and-migrations)
- [Testing](#testing)
- [Git Collaboration Workflow](#git-collaboration-workflow)
- [Security Considerations](#security-considerations)
- [Future Development](#future-development)
- [Team Contributions](#team-contributions)
- [Repository](#repository)

## Project Objectives

The objectives of SmartExpense are to:

- Provide an organized interface for managing personal financial records.
- Support the development of a maintainable frontend and backend architecture.
- Model users, expense categories, and expenses using a relational database layer.
- Apply software engineering practices, including version control, testing, migrations, and collaborative code review.
- Establish a foundation for secure authentication, financial reporting, and transaction management.

## Technology Stack

### Frontend

- React
- Vite
- JavaScript
- HTML and CSS
- npm

### Backend

- Python
- Flask
- Flask-SQLAlchemy
- Flask-Migrate
- python-dotenv

### Database

- SQLite for local development by default.
- PostgreSQL can be configured through the `DATABASE_URL` environment variable, subject to database setup and verification.

### Development and collaboration

- Git and GitHub
- Feature branches and pull requests
- pytest for backend testing
- Alembic migrations through Flask-Migrate

## System Architecture

The intended application architecture is:

```text
User
  |
  v
React + Vite Frontend
  |
  | HTTP requests to the REST API
  v
Flask Backend
  |
  v
SQLAlchemy ORM
  |
  v
Configured Database
```

The Flask application uses an application factory to initialize the application and its extensions. SQLAlchemy defines the data models, while Flask-Migrate and Alembic manage database schema changes.

The frontend-to-backend integration and complete business API are ongoing development tasks.

## Planned Application Features

The application is intended to support the following capabilities as development progresses:

- User registration and login.
- Recording and managing income and expenses.
- Organizing expenses by category.
- Viewing financial summaries and balances.
- Searching and filtering financial records.
- Editing and deleting transactions.
- Viewing reports to understand spending patterns.
- Restricting users to their own financial records.

These are project goals; they should not be interpreted as evidence that every feature or API endpoint is already implemented.

## Current Implementation Status

The following summarizes the implementation currently present in the repository.

### Frontend

- React and Vite application structure.
- SmartExpense interface and styling.
- Frontend build configuration.

### Flask backend

- Flask application factory.
- Configuration loaded from environment variables.
- Health-check endpoint: `GET /api/health`.
- SQLAlchemy integration.
- User, category, and expense data models.
- Flask-Migrate/Alembic migration infrastructure.
- Backend tests for the health endpoint and database models.

### Remaining integration work

- Implementing and testing authentication endpoints.
- Implementing expense and category CRUD endpoints.
- Connecting frontend forms and views to the Flask API.
- Verifying database operations against a configured PostgreSQL instance.
- Expanding automated tests as features are implemented.

## Project Structure

```text
Smart-Expense-Tracking-Application/
├── client/
│   ├── public/
│   ├── src/
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
├── server/
│   └── flask_api/
│       ├── app/
│       │   ├── __init__.py
│       │   ├── extensions.py
│       │   └── models/
│       │       ├── __init__.py
│       │       ├── user.py
│       │       ├── category.py
│       │       └── expense.py
│       ├── migrations/
│       │   ├── alembic.ini
│       │   └── versions/
│       ├── tests/
│       │   ├── test_health.py
│       │   └── test_models.py
│       ├── .env.example
│       ├── config.py
│       ├── requirements.txt
│       └── run.py
└── README.md
```

The structure above highlights the main frontend and Flask backend files. Additional files may be present in the repository.

## Prerequisites

Install the following tools:

- Git
- Node.js and npm
- Python 3
- Python virtual environment support
- VS Code or another code editor

A database server is not required for the default SQLite development configuration. PostgreSQL requires a separate installation and configuration.

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/SDF-PT14-Group-6/Smart-Expense-Tracking-Application.git
cd Smart-Expense-Tracking-Application
```

### 2. Install frontend dependencies

```bash
cd client
npm install
```

### 3. Create a Python virtual environment

Open a separate terminal from the project root:

```bash
cd server/flask_api
python3 -m venv .venv
source .venv/bin/activate
```

Install the backend dependencies:

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

### 4. Configure environment variables

Create a local environment file from the example:

```bash
cp .env.example .env
```

Review `.env` and set an appropriate secret key. Do not commit `.env` or real credentials to Git.

The application defaults to a local SQLite database when `DATABASE_URL` is not set. For PostgreSQL, configure a valid SQLAlchemy database URL and ensure the database server and credentials are available.

## Running the Frontend

From the project root:

```bash
cd client
npm run dev
```

Vite normally serves the application at:

```text
http://localhost:5173
```

Use the URL printed by Vite if it selects a different port.

To create a production build:

```bash
npm run build
```

## Running the Flask Backend

Open a separate terminal:

```bash
cd server/flask_api
source .venv/bin/activate
python run.py
```

The Flask development server normally starts at:

```text
http://127.0.0.1:5000
```

The configured port may differ if the application configuration is changed.

### Health-check endpoint

Check that the API is responding:

```bash
curl http://127.0.0.1:5000/api/health
```

Expected response:

```json
{
  "message": "SmartExpense Flask API is running",
  "status": "ok"
}
```

## Database and Migrations

The backend uses SQLAlchemy models for users, categories, and expenses. Flask-Migrate provides migration commands backed by Alembic.

Activate the virtual environment and move into `server/flask_api` before running these commands.

To inspect migration status:

```bash
flask --app run db current
```

To view migration history:

```bash
flask --app run db history
```

To apply existing migrations:

```bash
flask --app run db upgrade
```

Run migrations only after checking the configured database URL and ensuring that the intended database is available. Back up important data before applying schema changes to a database containing valuable records.

## Testing

Run the backend tests from `server/flask_api` with the virtual environment activated:

```bash
python -m pytest -v
```

Run the frontend production build from `client`:

```bash
npm run build
```

The backend tests cover the implemented health endpoint and data models. Continue adding tests for authentication, validation, expense operations, database behavior, and frontend integration as those features are implemented.

## Git Collaboration Workflow

The project uses Git and GitHub to coordinate contributions.

The intended workflow is:

1. Update the local development branch from the team repository.
2. Create a feature branch for a focused task.
3. Make small, meaningful changes.
4. Run relevant tests and build checks.
5. Commit the work with a descriptive message.
6. Push the feature branch and open a pull request.
7. Review and merge the pull request into the agreed target branch.

Example branch names:

```text
feature/flask-backend-foundation
feature/flask-database-models
feature/authentication
feature/transactions
feature/dashboard
```

Examples of descriptive commit messages:

```text
Set up Flask API foundation
Add SQLAlchemy models and database migration
Add authentication endpoint tests
Implement expense creation endpoint
Connect frontend to Flask API
```

Only merge changes after the required review and checks have been completed.

## Security Considerations

- Keep secret keys, database credentials, and other private configuration in environment variables.
- Never commit `.env` files containing real secrets.
- Replace development-only secret-key defaults before production deployment.
- Validate and authorize requests before exposing or modifying users' financial records.
- Use secure password hashing when implementing authentication.
- Configure CORS for the intended frontend origins before deployment.
- Use HTTPS and appropriate production server settings when deploying.
- Do not describe planned security controls as implemented until they have been added and tested.

## Future Development

Planned areas of development include:

- User registration, login, and authorization.
- Expense and category REST API endpoints.
- Frontend-to-backend integration.
- Financial dashboard calculations and reporting.
- Validation and error handling.
- Expanded automated testing.
- PostgreSQL integration testing.
- Deployment and production security configuration.

## Team Contributions

The project is developed collaboratively. Current team responsibilities include:

- **Maureen Gichuhi:** React/Vite frontend work and Flask backend foundation/database-model work.
- **Joshua Magolo:** Application pages.
- **Bernard Marangu:** Dashboard.
- **Fatuhdin Ibrahim Ali:** Transactions.

Contributions and implementation status should be verified against the repository history and merged pull requests.

## Repository

Team repository:

https://github.com/SDF-PT14-Group-6/Smart-Expense-Tracking-Application

## License

Refer to the repository's license file, if provided, for the applicable terms of use and distribution.
