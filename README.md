# React + TypeScript + Vite Starter Project

## Introduction
This starter project aims to provide a solid foundation for React developers by integrating TypeScript for static typing and Vite for fast development. It also includes popular libraries for routing, UI components, form management with validation, and code formatting.

### Prerequisites
- Node.js version 20.12.0 or later

## Features

### Routing
For routing, this project utilizes Tenstack Router, a flexible and efficient routing solution for React applications.

- [Tenstack Router Documentation](https://tanstack.com/router/latest/docs/framework/react/overview)

### UI Components & Styles
For UI components and styles, this starter project incorporates:

- Tailwind CSS: A utility-first CSS framework for building custom designs quickly.
  - [Tailwind CSS Website](https://tailwindcss.com/)

- Shadcn: A collection of modern UI components for React applications.
  - [Shadcn Documentation](https://ui.shadcn.com/docs)

### Forms and Form Validation
Managing forms and form validation is essential for most web applications. This project includes:

- React Hook Form: A performant and flexible library for managing forms with React.
  - [React Hook Form Website](https://react-hook-form.com/)
  - [React Hook Form GitHub Repository](https://github.com/react-hook-form/react-hook-form)

- Zod: A TypeScript-first schema declaration and validation library.
  - [Zod Website](https://zod.dev/)
  - [Zod GitHub Repository](https://github.com/colinhacks/zod)

### Code Formatting
To ensure consistent code style and quality, this project integrates the following tools:
- Prettier: An opinionated code formatter.
- ESLint: A pluggable linting utility for JavaScript and TypeScript.
- Husky: A tool that enables running scripts on Git hooks.

### File structure
  - src: Main source directory.
    - app.tsx: Entry point of the application.
    - assets: Directory for storing static assets like images, fonts, etc.
    - components: Reusable components directory.
      - ui: UI components directory.
    - constants: Constants and data files directory.
      - data.ts: File containing constant data.
    - index.css: Global CSS file.
    - layouts: Layout components directory.
    - lib: Utility functions directory.
      - utils.ts: Utility functions file.
    - pages: Page components directory.
      - Home.tsx: Home page component.
      - NotFound.tsx: Component for handling 404 errors.
    - routes: Routing configuration directory.
      - index.tsx: Main router configuration file.
      - __root.tsx: Root router component.
    - schemas: Directory for schema definitions.
    - services: Services directory for API or data fetching functions.
    - types: TypeScript type definitions directory.
    - vite-env.d.ts: TypeScript declaration file for Vite environment variables. 

## Usage
To use this starter project, follow these steps:
1. Clone the repository.
2. Install dependencies with `npm install`.
3. Start the development server with `npm run dev`.

## Summary
This React + TypeScript + Vite starter project provides an excellent starting point for building React applications with TypeScript support, efficient routing, customizable UI components, robust form management with validation, and automated code formatting to ensure code consistency and quality.
