# websitev2

Personal website built and designed using Astro.

## Description

This website was completed over Spring '23 as a chance to replace my rather juvenile website from Summer '22. Rather than acting as a fancy resume, this new site was created with a more minimalistic vision, and matter of fact vision. I am not a web developer and certainly not a UI/UX designer, and I would say this website conveys that pretty well.

## Project Structure

Inside this project, you'll see the following folders and files:

```yaml
├── public/
├── src/
│   ├── components/
│   ├── content/
│   ├── layouts/
│   └── pages/
├── astro.config.mjs
├── README.md
├── package.json
└── tsconfig.json
```

The `src/content/` directory contains "collections" of related Markdown and MDX documents. Use `getCollection()` to retrieve posts from `src/content/blog/`. Any static assets, like images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | Installs dependencies                            |
| `npm run dev`          | Starts local dev server at `localhost:3000`      |
| `npm run build`        | Build your production site to `./dist/`          |
| `npm run preview`      | Preview your build locally, before deploying     |
| `npm run astro ...`    | Run CLI commands like `astro add`, `astro check` |
| `npm run astro --help` | Get help using the Astro CLI                     |

## License

[MIT](https://choosealicense.com/licenses/mit/)
