
# Maaz Ahmed | Developer Portfolio

> A personal portfolio to showcase projects, technical skills, learning milestones, and continuous development as a software engineer.

This repository contains the source code for my developer portfolio, built with modern web technologies. The project is designed to present my work professionally while providing a structured way to document completed projects, track learning progress, and share selected updates.

I am continuously improving this portfolio as I learn, build, test, and deploy new projects.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Environment Configuration](#environment-configuration)
- [Database Setup](#database-setup)
- [Running the Application](#running-the-application)
- [Deployment](#deployment)
- [Security](#security)
- [Development Roadmap](#development-roadmap)
- [Contributing](#contributing)
- [Author](#author)
- [License](#license)

---

## Overview

This project is more than a traditional portfolio website. Its goal is to create a central place to present my development journey, technical capabilities, projects, and professional growth.

The portfolio is designed around two experiences:

**Public Portfolio**
- Professional introduction and developer profile.
- Project showcase and technology details.
- Technical skills and learning milestones.
- Selected progress updates and development history.
- Responsive interface for desktop, tablet, and mobile devices.

**Private Administration Dashboard**
- Manage portfolio content and project information.
- Organize tasks and monthly progress notes.
- Track skills, learning milestones, and development goals.
- Control which progress updates are intended for public display.
- Maintain a more organized workflow for updating the portfolio.

Some features may require additional configuration before they can be used. Refer to the setup instructions and verify each feature in your local environment.

---

## Key Features

### 1. Project Showcase
Present projects with descriptions, technologies, objectives, and relevant links. The goal is to demonstrate practical implementation rather than simply list technologies.

### 2. Development Progress
Organize development activity into monthly records, completed tasks, ongoing work, and future goals.

### 3. Skills and Learning
Document technical skills and learning milestones as they develop through practical projects and coursework.

### 4. Administration Dashboard
A dedicated administration interface is included in the project source. Its authentication, content-management functionality, and persistence should be configured and tested before public deployment.

### 5. Public Progress Updates
The intended design allows selected progress updates to appear on the public portfolio while keeping private administrative information separate.

### 6. Responsive Design
The interface is intended to support different screen sizes, including desktop, tablet, and mobile.

### 7. Deployment and Automation
The repository can be maintained with Git and GitHub. Docker, CI workflows, and hosting configuration should be verified against the actual project files before relying on them.

---

## Technology Stack

| Technology | Purpose |
|---|---|
| Next.js | Application framework |
| React | User interface |
| TypeScript | Type-safe application development |
| Tailwind CSS | Styling and responsive layouts |
| Supabase | Intended database and persistence integration, where configured |
| Git and GitHub | Version control and source management |
| Vercel | Potential deployment platform |
| Docker | Optional containerized development and deployment |

The technologies listed above describe the intended stack. Confirm the installed dependencies and configured integrations in `package.json` and the project source before treating every integration as active.

---

## Project Structure

The main application is organized into separate areas for pages, components, API routes, shared utilities, and database configuration.

```text
maaz-portfolio/
├── app/
│   ├── admin/
│   │   └── page.tsx
│   ├── api/
│   │   └── admin/
│   │       └── login/
│   │           └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── AdminDashboard.tsx
│   └── PublicPortfolioUpdates.tsx
├── lib/
│   ├── admin-auth.ts
│   └── store.ts
├── supabase/
│   └── schema.sql
├── public/
├── .github/
├── .gitignore
├── package.json
├── README.md
└── ...
```

This is a representative structure. Some directories and files may differ depending on the current version of the repository.

---

## Getting Started

### Prerequisites

Install the following tools before starting:

- Node.js (use a version supported by the project's Next.js dependencies).
- npm, which is included with Node.js.
- Git.
- Visual Studio Code or another code editor.

### Step 1: Clone the Repository

Replace the repository URL below with your actual GitHub repository URL.

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd YOUR_REPOSITORY
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure Environment Variables

Review the environment variables required by the source code and create a local `.env.local` file.

Do not copy real credentials into this README or commit them to GitHub.

### Step 4: Start the Development Server

```bash
npm run dev
```

Open the local address shown in your terminal, normally:

http://localhost:3000

### Step 5: Check the Production Build

Before deployment, run:

```bash
npm run build
```

If the build fails, resolve the reported dependency, configuration, or TypeScript errors before publishing a production deployment.

---

## Environment Configuration

The application may require environment variables for administration authentication and external services.

For example, the administration login implementation uses the following server-side configuration names:

```env
ADMIN_PASSWORD=replace_with_a_strong_password
ADMIN_SESSION_SECRET=replace_with_a_long_random_secret
```

These are examples of the configuration format, not real credentials.

If Supabase is configured, identify the exact environment variable names expected by the current database implementation and add the corresponding values locally.

Important:
- Never commit `.env.local`.
- Never expose a database service-role key in client-side code.
- Use strong, unique secrets.
- Configure production environment variables through your hosting provider.
- Do not assume that setting environment variables alone completes database or authentication setup.

---

## Database Setup

A database schema is included under:

```text
supabase/schema.sql
```

If the application uses Supabase for persistent storage:

1. Create or select a Supabase project.
2. Review the provided SQL schema.
3. Apply the schema using the appropriate Supabase database interface.
4. Configure the required environment variables.
5. Verify that application reads and writes use the intended database.
6. Test access controls and confirm that private information cannot be read or changed by unauthorized users.

A schema file alone does not prove that persistent storage is fully connected. Verify the implementation before relying on it.

---

## Running the Application

Use the following commands during development.

| Command | Purpose |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Start the production server after a successful build |
| `npm run lint` | Run lint checks if the script is configured |

The available commands depend on the scripts defined in `package.json`.

---

## Deployment

The portfolio can be prepared for deployment on a platform that supports Next.js, such as Vercel.

### Recommended deployment checklist

- [ ] Install dependencies successfully.
- [ ] Verify that the production build passes.
- [ ] Configure environment variables securely.
- [ ] Configure and test database connectivity if required.
- [ ] Test administration authentication.
- [ ] Confirm that private dashboard data is not publicly accessible.
- [ ] Test the website on mobile and desktop.
- [ ] Verify all navigation links and project URLs.
- [ ] Deploy and test the production website.

A successful deployment should be reported only after the deployed application has been checked.

---

## Security

Security is especially important when a portfolio includes a private administration dashboard.

Recommended practices:

- Keep credentials and secrets out of source control.
- Enforce authentication on protected server-side routes.
- Protect administrative operations, not just the dashboard interface.
- Validate and sanitize submitted data.
- Restrict database permissions according to the application's needs.
- Avoid exposing private notes, credentials, or unpublished content through public APIs.
- Use HTTPS in production.
- Test session handling, unauthorized access, and error responses before deployment.

These are security requirements and recommendations; they should not be interpreted as proof that every item has already been implemented.

---

## Development Roadmap

The portfolio will continue to evolve as new projects and improvements are completed.

- [ ] Verify and refine the complete portfolio experience.
- [ ] Add screenshots and a live demonstration link.
- [ ] Verify administration login and session security.
- [ ] Complete and test persistent content storage.
- [ ] Improve project filtering and technology categorization.
- [ ] Add completed projects with meaningful documentation.
- [ ] Maintain a monthly development and learning history.
- [ ] Publish selected progress updates.
- [ ] Verify mobile responsiveness and accessibility.
- [ ] Validate automated checks and deployment workflows.

Update this checklist as work is completed. Do not mark features complete until they have been implemented and tested.

---

## Contributing

This repository primarily documents my personal development work.

If you find an issue or have a useful suggestion, feel free to open an issue or submit a pull request.

Please avoid including credentials, personal information, or other sensitive data in issues and contributions.

---

## Author

**Maaz Ahmed**

Computer Science and Engineering student interested in software development, Artificial Intelligence, Machine Learning, Data Analytics, and cybersecurity.

- GitHub: [@ahmedmaazmohammed21](https://github.com/ahmedmaazmohammed21)
- LinkedIn: [Maaz Ahmed](https://www.linkedin.com/in/maaz-ahmed-680122364/)

I believe in learning by building, improving through feedback, and documenting progress through practical work.

---

## License

No license has been specified yet.

If you want others to reuse, modify, or distribute this project's source code, choose an appropriate open-source license and add a `LICENSE` file to the repository.

Until then, do not assume that the repository is released under an open-source license.
