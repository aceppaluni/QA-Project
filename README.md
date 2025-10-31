# QA Automation Portfolio

![Playwright Tests](https://github.com/<your-username>/qa-automation-project/actions/workflows/playwright.yml/badge.svg?branch=main)

This repository showcases automated **UI and API** testing using **Playwright**, following QA best practices.

## ✅ Features
- End-to-end UI tests with **Page Object Model**
- Negative login scenarios + validation
- Mock API testing with json-server
- Cross-browser execution (Chromium, Firefox, WebKit)
- CI/CD pipeline with GitHub Actions

---

## 📂 Project Structure
tests/ # Test files
pages/ # Page Object Models
mock-api/ # Local mock API database
playwright.config.ts # Playwright configuration
package.json # Dependencies & scripts

---

## 🛠 Tech Stack
- Playwright (UI + API)
- TypeScript / Node.js
- json-server (mock API)
- GitHub Actions (CI)

---

## ⚡ Getting Started

### 1 Install dependencies
```bash
npm install
npx playwright install

```
### 2 Start mock API
```bash
npm run start:api

```
### 3 Run all tests
```bash
npx playwright test
```

### 4 View test report
```bash 
npx playwright show-report
```

### 🏷️ Tagged Test Execution
Tag	What it runs
@login - Login UI tests
@negative - Negative scenarios
@api - API tests
@smoke - Checkout happy path

```bash
npx playwright test -g @login
```
## Snapshots
*This photo encompasses a few tests within this repository*

<img width="961" height="556" alt="2025-10-31" src="https://github.com/user-attachments/assets/a72008e3-a3d1-4763-9615-8fb85fd76177" />
