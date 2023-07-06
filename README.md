# Simple Monorepo with Solid.js + Vite + Binserve (Rust)

Install client:

```bash
cd client
pnpm i
```

Install Binserve by grabbing an executable or build your own: https://github.com/mufeedvh/binserve

Develop the Single Page App in `client` by running

```bash
pnpm dev
```

Build your app:

```bash
pnpm build
```

This will create a `dist` directory under client.

Serve your app with Binserve, from the root directory

```bash
binserve
```

There you go
