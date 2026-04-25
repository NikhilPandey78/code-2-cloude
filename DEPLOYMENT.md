# Next.js Deployment Guide

This document gives you both the command section and a step-by-step deployment flow for the `nextjs-demo` project.

## Command Section

Run these commands from the project root:

```bash
npm install
npm run dev
npm run lint
npm run build
npm run start
```

## Step-by-Step Deployment Document

### 1. Open the project folder

```bash
cd nextjs-demo
```

### 2. Install dependencies

```bash
npm install
```

### 3. Test locally in development mode

```bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 4. Check code quality

```bash
npm run lint
```

### 5. Build the production version

```bash
npm run build
```

### 6. Test the production server locally

```bash
npm run start
```

### 7. Deploy to Vercel

Install the Vercel CLI if needed:

```bash
npm install -g vercel
```

Deploy:

```bash
vercel
```

For a production deployment:

```bash
vercel --prod
```

### 8. Deploy to a generic Node.js server

Build the app:

```bash
npm run build
```

Start the app on the server:

```bash
npm run start
```

If you want to run it on a custom port:

```bash
set PORT=4000 && npm run start
```

### 9. Optional environment variables

Create a `.env.local` file for local secrets:

```bash
MY_SECRET_KEY=your_value_here
```

Use the same variables in your hosting provider dashboard when deploying.

## Recommended Deployment Checklist

- Confirm `npm run lint` passes.
- Confirm `npm run build` passes.
- Add environment variables before production deployment.
- Use `vercel --prod` for a live Vercel release.
- Use a process manager like PM2 on a custom Node.js server if you need background execution.
