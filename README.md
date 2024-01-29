# fightingtheboss.com

This is a Remix app. Most of the content is written in MDX.

## TODO
- Figure out how to add images to posts (and style them!)
- Figure out how to add other embeds to posts (like a code sandbox or other imports)
- Actually write the content for each page
  - Likely build a basic image gallery component for projects
- Add custom default styles for @tailwindcss/typography for MDX files
- Dark mode toggle (or just switch it back to the default detection mode)
- Once satisfied, point the domain at it
- Could also investigate caching the posts in sqlite/litefs, using prisma as ORM

## Running locally

1. Ensure you have Node 18+ installed
2. Clone the repo
3. Run `npm run dev`
4. Open up http://localhost:3000

## Development containers (https://containers.dev/)

This repo has a devcontainer configuration. This means you should be able to run this app
consistently in VS Code with Docker installed and the VS Code devcontainers extension installed

1. Open VS Code
2. Install the [Dev Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) if not already installed
3. Run the `Dev Containers: Open Folder in container...` command (from the command palette: `Cmd+Shift+P`)
4. Visit `http://localhost:3000`
