# 🤝 Contributing Guide

Thank you for contributing to this project.
Please follow the guidelines below to ensure clean, consistent, and safe collaboration.

---

# 📌 Branching Rules

We follow a structured branching strategy:

```
main        → Production (Protected)
dev         → Integration branch
feature/*   → New features
hotfix/*    → Critical production fixes
```

## Rules

- ❌ Do NOT push directly to `main`
- ❌ Do NOT push directly to `dev`
- ✅ Always create a feature branch
- ✅ All changes must go through Pull Requests
- ✅ Keep feature branches short-lived (a few days max)

### Branch Naming Convention

```
feature/<short-description>-<yourname>
feature/<ticket-id>-<short-description>
```

Examples:

```
feature/login-abdullah
feature/234-dashboard-widgets
feature/navbar-alex
```

---

# 🛠 Development Setup

## 1️⃣ Clone the repository

```bash
git clone <repo-url>
cd <project-folder>
```

## 2️⃣ Install dependencies

```bash
npm install
```

## 3️⃣ Setup environment variables

Copy the example file:

```bash
cp .env.example .env
```

Update values as needed.

## 4️⃣ Run development server

```bash
npm run dev
```

---

# 🔁 Development Workflow

## Start from dev branch

```bash
git checkout dev
git pull origin dev
```

## Create your feature branch

```bash
git checkout -b feature/<name>-<yourname>
```

## After finishing your work

```bash
git add .
git commit -m "feat(scope): short description"
git push origin feature/<name>-<yourname>
```

Open a Pull Request to:

```
feature/* → dev
```

---

# 📝 Commit Message Convention

We follow **Conventional Commits**:

- `feat:` → New feature
- `fix:` → Bug fix
- `chore:` → Maintenance
- `docs:` → Documentation
- `test:` → Testing

### Example

```
feat(auth): add login validation and error handling
```

---

# 🔍 Pull Request Guidelines

## PR Title Format

```
type(scope): short description
```

Example:

```
feat(auth): login form UI
```

## PR Description Must Include

- What changed
- Why
- How to test
- Related issue (if any)

Example:

```
Closes #12
```

---

## ✅ PR Checklist

Before submitting your PR, ensure:

- [ ] Code compiles locally
- [ ] ESLint passed
- [ ] No new console warnings or errors
- [ ] Tests added or updated (if applicable)
- [ ] `.env.example` updated (if needed)
- [ ] No sensitive data committed

---

# 🧹 Code Quality Standards

This project uses:

- ESLint
- Prettier
- Husky (pre-commit hooks)
- lint-staged

All commits are automatically checked before being pushed.

Make sure your code passes:

```bash
npm run lint
npm run test
```

---

# ⚠ Merge Rules

- At least **1 approval** is required before merging
- CI checks must pass
- Prefer **Squash & Merge**
- Do not merge your own PR without review (unless urgent hotfix)

---

# 🚑 Hotfix Process

For critical production fixes:

1. Create branch from `main`

```bash
git checkout -b hotfix/<short-description>
```

2. Fix issue and push
3. Open PR to `main`
4. After merge, merge `main` back into `dev`

---

# 🔐 Security Rules

- Never commit `.env`
- Never commit API keys or secrets
- Always update `.env.example` when adding new environment variables
- Use GitHub Secrets for sensitive values

---

# 📋 Issues & Task Management

- Use GitHub Issues for tasks
- Assign yourself before starting work
- Move tasks through Project board:
  - Backlog
  - In Progress
  - Review
  - Done

---

# 👥 Team Collaboration Best Practices

- Communicate before working on shared components
- Keep PRs small and focused
- Avoid long-running branches
- Sync with `dev` frequently
- Resolve conflicts early

---

Following these guidelines ensures:

- Clean Git history
- Stable production builds
- Clear collaboration
- Reduced merge conflicts
