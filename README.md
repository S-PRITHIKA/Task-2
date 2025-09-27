
What is esbuild?

esbuild is a fast JavaScript bundler and minifier written in Go. It is widely used for modern web development because of its:

- 🚀 High speed – Builds are extremely fast compared to traditional bundlers.  
- 📦 Bundling – Combines multiple JavaScript/TypeScript files into a single output.  
- ✂️ Minification – Reduces file size by removing unnecessary code.  
- 🛠️ Transpilation – Supports modern JavaScript/TypeScript syntax while targeting older environments.  



This package contains the native binary for Windows x64 systems.

Usage

CLI


npx esbuild app.js --bundle --minify --outfile=out.js

API (Node.js)

js
const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["app.js"],
  bundle: true,
  minify: true,
  outfile: "out.js",
}).catch(() => process.exit(1));


Documentation

For full documentation and advanced usage, see the [official esbuild repo](https://github.com/evanw/esbuild).



⚡ Fast, simple, and efficient – that’s esbuild.
