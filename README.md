⚡ esbuild

**esbuild** is a **high-performance JavaScript and TypeScript bundler, transpiler, and minifier** written in **Go**. It is designed to be **extremely fast**, simple to use, and reliable for modern web development workflows.

---

## 🚀 Why esbuild?

Traditional bundlers (like Webpack or Rollup) are powerful but can be slow for large projects. **esbuild** solves this problem by:

* Using a **native Go binary** instead of JavaScript for processing.
* Running operations in **parallel** across multiple CPU cores.
* Optimizing for **speed without sacrificing functionality**.

This makes builds **10–100x faster** than traditional bundlers in many cases.

---

## ✨ Key Features

* **Blazing Speed** – Near-instant builds thanks to Go’s performance and parallelism.
* **Bundling** – Combine multiple files and dependencies into a single output.
* **Minification** – Optimize output by removing unused code, whitespace, and comments.
* **Transpilation** – Convert modern JavaScript/TypeScript (ES6+, JSX, TS) into code that works in older environments.
* **Tree Shaking** – Remove unused imports automatically to reduce bundle size.
* **Source Maps** – Generate maps for easier debugging.
* **Cross-Platform** – Precompiled binaries available for Windows, macOS, and Linux (including x64, ARM).
* **Zero Config** – Sensible defaults for most projects, while allowing custom configuration.

---

## 📦 Installation

Using **npm**:

```bash
npm install esbuild --save-dev
```

Using **yarn**:

```bash
yarn add esbuild --dev
```

Using **pnpm**:

```bash
pnpm add esbuild --save-dev
```

---

## 🛠️ Usage

### CLI

Bundle and minify an app:

```bash
npx esbuild app.js --bundle --minify --outfile=out.js
```

Run a development server with watch mode:

```bash
npx esbuild app.js --bundle --outfile=out.js --watch
```

### Node.js API

```js
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["app.js"],
  bundle: true,
  minify: true,
  sourcemap: true,
  outfile: "out.js",
  target: ["es2017"],   // Specify output target
  platform: "browser",  // Can also be 'node'
}).catch(() => process.exit(1));
```

### TypeScript Support

No extra setup is needed — esbuild compiles TypeScript out of the box:

```bash
npx esbuild src/index.ts --bundle --outfile=out.js
```

---

## ⚙️ Advanced Options

* **Code Splitting** – Split output into multiple bundles.
* **External Packages** – Exclude dependencies from bundling (e.g., for Node.js apps).
* **Plugins** – Extend esbuild’s functionality (e.g., custom loaders).
* **Loaders** – Import non-JS files like JSON, CSS, or images.

 ✅ Summary

* **esbuild** is one of the fastest bundlers available today.
* It supports **JavaScript, TypeScript, JSX, TSX**, and many loaders.
* It’s suitable for **production builds**, **development servers**, and as a **library inside other tools** (e.g., Vite, Snowpack, Next.js internally use esbuild).
* Its simplicity and speed make it an excellent choice for modern projects.

