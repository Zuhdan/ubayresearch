# Ubay Research Hub

This is a Next.js application for Ubay Research Hub, a website to showcase research publications, researcher profiles, and provide AI-powered summaries of papers.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm (or yarn/pnpm) installed on your machine.

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### Installation

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd <project-directory>
    ```

2.  Install the dependencies:
    ```bash
    npm install
    ```

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`

Runs the app in development mode using Next.js Turbopack.
Open [http://localhost:9002](http://localhost:9002) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the application for production to the `.next` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm run start`

Starts the production server for the built application. You should run `npm run build` before this.

### `npm run lint`

Runs the Next.js linter (`next lint`) to check for code quality and style issues.

### `npm run typecheck`

Runs the TypeScript compiler to check for type errors in the codebase without generating any JavaScript files.

## AI Development with Genkit

This project uses Genkit to power its AI features.

### `npm run genkit:dev`

Starts the Genkit development server. This allows you to test and interact with your AI flows locally.

### `npm run genkit:watch`

Starts the Genkit development server in watch mode. It will automatically restart the server when you make changes to your flow files in the `src/ai/` directory.
