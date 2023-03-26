# Ambienxo

![Ambienxo](https://raw.githubusercontent.com/blurfx/ambienxo/static/thumbnail.png)

Ambienxo is a modern personal blog theme for minimalists built on top of [Next.js](https://nextjs.org/).

## Features

- Minimalist design
- Responsive layout
- SEO-friendly
- Dark mode
- Syntax highlighting
- Markdown and MDX support
- [utterances](https://utteranc.es/) or [giscus](https://giscus.app/) integration
- [Google Analytics](https://analytics.google.com) integration
- RSS feed

## Getting Started

First, set your name and the desired blog title, description, and url (without the trailing slash) in `blog.config.ts`. The name will appear in the RSS feed and footer.

And in `next-sitemap.config.js`, write your blog url (it should be the same as the `url` in `blog.config.ts`).

Finally, modify `pages/index.tsx` to your own liking.


## Local Development

Ambienxo uses pnpm.

Install dependencies:
```bash
pnpm install
```

Run the development server:
```bash
pnpm dev
```