# sageTask_playwright

## Description

This project uses [Playwright](https://playwright.dev/) for end-to-end testing of the OrangeHRM demo application. It follows the Page Object Model for maintainable and scalable test automation. Test data is managed separately for easy updates and reusability.

## Project Structure

```
sageTask_playwright/
├── tests/           # Test specifications
├── pageobjects/     # Page Object classes
├── utils/           # Utility functions (e.g., login)
├── data/            # Test data files (e.g., testData.json)
├── allure-results/  # Allure report output
└── README.md        # Project documentation
```

## Prerequisites

- [Node.js](https://nodejs.org/) (v16+ recommended)
- [npm](https://www.npmjs.com/)
- [Playwright](https://playwright.dev/)
- [Allure CLI](https://docs.qameta.io/allure/#_installing_a_commandline)

## Setup

1. **Install dependencies:**
   ```sh
   npm install
   ```

2. **Install Playwright browsers:**
   ```sh
   npx playwright install
   ```

3. **(Optional) Install Allure CLI for reporting:**
   ```sh
   brew install allure
   ```

## How to Run Tests

- **Run all tests:**
  ```sh
  npx playwright test
  ```

- **Run a specific test file:**
  ```sh
  npx playwright test tests/login.spec.js
  ```

- **Generate Allure report:**
  1. Run tests with Allure reporter:
     ```sh
     npx playwright test --reporter=allure-playwright
     ```
  2. Generate and open the report:
     ```sh
     allure generate ./allure-results --clean
     allure open
     ```

## Customization

- **Test data:**  
  Edit files in the `data/` directory (e.g., `testData.json`) to update credentials, roles, and other test parameters.

- **Page Objects:**  
  Add or modify classes in the `pageobjects/` directory to support new pages or actions.

## Support

For issues or questions, please open an issue in this repository.
