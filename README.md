# Aha Digital website
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) 2024. This is the first re-design since the beginning of Aha Digital (launched 2021) and the old website (built with Sanity headless cms and Gatsby) was starting to get outdated. 

Since time is money I knew that when I start with this project that it needed to be released in a very short period.

With that in mind I got rid of the cms and created custom json objects for each page. I decided to test parts of https://bulma.io/ and use scss for the rest.

This was also my first next 14 project with the new app folder. Pretty cool stuff except their link scroll to issue that I needed to hack around.

Another cool thing that I found out when releasing the site was that the Lighthouse scores ended up at 100% without any refactoring.

Anyway, welcome visitor. Poke around but bare in mind. This is truly MVP and there are stuff in the code that could need some extra love.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
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
