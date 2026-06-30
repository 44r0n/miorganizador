# Copilot Instructions for Mi Organizador

## Project Overview

**Mi Organizador** is a personal life organization application designed to centralize multiple aspects of daily life management in one place.

### Vision

The application aims to integrate:
- **Time & Weather Management** — Dynamic display of current time and weather forecasts for planning
- **Financial Management** — Kakebo-style budgeting and expense tracking
- **Communication Hub** — Centralized management of multiple communication channels (email, Telegram, Twitter, etc.)
- **Calendar & Tasks** — Unified calendar and task management system
- **Sharing & Collaboration** — Ability to share specific information with other users (Kakebo data, calendar events, etc.)

### Current Status

The project is in early stages. Currently, only documentation and GitHub templates exist. No source code has been implemented yet. See the README.md for the complete project vision.

---

## Development Process & Contributing

### Before Starting

1. **Check existing issues** — Search for open issues before proposing new work
2. **Use labels** — Issues are organized by predefined GitHub labels. Look for issues labeled `help wanted`
3. **Open discussions early** — If unsure about an approach, open a draft PR and ask for guidance

### Workflow

1. **Create a feature branch** in the main repository:
   ```bash
   git checkout -b <descriptive-branch-name>
   ```

2. **Keep your branch updated** with main:
   ```bash
   git pull origin main
   ```

3. **Add tests and documentation** when making changes

4. **Push and create a pull request** with a clear title and description

### Code Review

- Draft PRs are encouraged for getting early feedback
- The maintainer will review contributions with respect for your time and effort

---

## Versioning & Release Process

The project uses **semantic versioning** (semver). Releases are tagged on the `main` branch when features are ready and the code is stable. Release artifacts (installers, binaries, etc.) are published to the GitHub Releases section.

See [semver.org](http://semver.org/) for versioning details.

---

## Repository Structure

Currently minimal, but designed for future growth:

- `.github/` — GitHub-specific files (issue templates, PR templates, workflows)
- `README.md` / `README-en.md` — Project documentation (Spanish/English)
- `CONTRIBUTING.md` / `CONTRIBUTING-en.md` — Contribution guidelines (Spanish/English)
- `LICENSE` — GNU v3 license

---

## Key Conventions

### Documentation

- Documentation is provided in both **Spanish** and **English**
  - Use `-en` suffix for English versions (e.g., `README-en.md`)
  - Keep Spanish and English versions in sync
- Bilingual support is core to the project

### Licensing

- Project is licensed under **GNU v3**
- All contributions must be compatible with this license

### Language

- Primary language for discussions: Spanish (maintainer is Spanish-speaking)
- English translations provided for broader audience
- When contributing, provide work in Spanish with English translation if significant

---

## Future Considerations

When implementing features, keep the following in mind:

1. **Modular Design** — Each feature (finances, calendar, communications) should be independently functional
2. **User Privacy** — Sharing features should have granular permission controls
3. **Multi-Channel Integration** — Build abstractly for easy addition of new communication channels
4. **Cross-Platform** — Design with potential desktop, web, and mobile deployments in mind

---

## Getting Help

- **Questions?** Open an issue with the `question` label
- **Found a bug?** Open an issue with the `bug` label with reproduction steps
- **Have a feature idea?** Open an issue with the `feature_request` label

---

## Links

- [GitHub Repository](https://github.com/44r0n/miorganizador)
- [Issue Tracker](https://github.com/44r0n/miorganizador/issues)
- [Project Releases](https://github.com/44r0n/miorganizador/releases)
- [Kakebo Budget Method](https://www.google.com/search?hl=es&q=kakebo)
