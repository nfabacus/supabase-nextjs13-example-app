# Supabase and Nextjs 13 Example App

## 1. Set up Supabase
- First, need to sign up and set up a supabase project. Visit at [supabase.com](https://supabase.com/)
- I added posts table for now.

## 2. Scaffold the frontend app with nextjs 13 (App Router)
- This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
- You need to set up .env.local

#### Attention!
- If you created the app with src folder, middleware.ts must be under the src folder (not under the root folder).  Otherwise, the middleware does not trigger at all. If you created the app without src folder, then place middleware.ts in the root folder.  I spent too much time wondering why it was not working.
- Protected routes can be implemented through the middleware.ts file which runs before the each page route is rendered on the server side.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
