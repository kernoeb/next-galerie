# next-gallery (Next.js)

This is a really simple [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
I just wanted to show my pictures somewhere after deleteing my Instagram account. I tried Pixelfed, but but I wanted something open-source and really light. 

Modules :
- react-photo-gallery (I was using a material-ui grid before, until I found this module)
- @material-ui/icons


## Before anything

It's a really simple project, don't blame me !

You can make a PR or create an issue to add ideas, etc

There's no API, server, etc, so I decided to code a Node.js script to automate the creation of a JSON file with data (picture resolution, name, date, etc...)


## Usage

Add your pictures in `/public/assets/` with this template `mm/yyyy_number.jpg` *(ex: 01-2019_1.jpg)*

Run `node util/genPic.js public/assets/`

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/import?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
