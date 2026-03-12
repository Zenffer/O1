# O1 — Node.js & Express Teaching Guide

This folder contains step-by-step teaching material for Node.js and Express. Each subfolder focuses on a different topic. The code includes comments that explain what each part does.

---

## Folder overview

| Folder | Topic | Main purpose |
|--------|--------|----------------|
| **01** | Core Node.js (http + fs + os) | Basic HTTP server and file system operations |
| **02** | HTTP server with routing | Multiple routes and reading from package.json |
| **03** | Express routing | Routes, HTTP methods, params, and query strings |
| **04** | Express middleware | JSON/form parsing, static files, and a login form |

---

## 01 — Core Node.js

**Goal:** Use Node’s built-in `http`, `fs`, and `os` modules (no npm packages).

### Root (`01/`)

| File | Purpose |
|------|--------|
| `server.js` | Creates a simple HTTP server on port 3000 and responds with plain text. Demonstrates `http.createServer()`, `res.statusCode`, `res.setHeader()`, and `res.end()`. |
| `fileManagement.js` | Shows commented examples of `fs.readFile`/`writeFile`, `fs.mkdir`, and `fs.unlink`. **Active code** uses the `os` module to print platform, CPU, memory, uptime, hostname, and network interfaces. |
| `log.txt` | Sample text file used by some of the scripts in `0-7/` (read, append, update). |

### Subfolder `01/0-7/`

Small, single-purpose scripts for learning the file system:

| File | Purpose |
|------|--------|
| `server.js` | Minimal HTTP server that sends HTML (same idea as root `server.js` but with `Content-Type: text/html`). |
| `consoleread.js` | Reads `log.txt` and prints its contents to the console. Demonstrates `fs.readFile` with `utf8` encoding. |
| `filemanagement.js` | Creates or overwrites `sample.txt` with a string. Demonstrates `fs.writeFile`. |
| `fileappend.js` | Appends a new line to `log.txt` without overwriting. Demonstrates `fs.appendFile`. |
| `fileupdated.js` | Reads `log.txt`, replaces a string in memory, and writes the result back. Demonstrates read → modify → write. |
| `deletefile.js` | Deletes `sample.txt` from disk. Demonstrates `fs.unlink`. |

**How to run:** From `01/` or `01/0-7/`, run `node <filename>.js`. For the servers, open http://localhost:3000 in a browser.

---

## 02 — HTTP server with routing

**Goal:** Build an HTTP server that serves different content per URL and uses data from `package.json`.

### Files

| File | Purpose |
|------|--------|
| `main.js` | Creates an HTTP server (no Express) that routes by `req.url`: `/` (home), `/about` (OS info via `os` module), `/author` (author from `package.json`), and a 404 fallback. Includes a `logRequest()` helper that logs timestamp, client IP, method, and URL. Also has a note on how to create `package.json` (e.g. `npm init` or manual). |
| `package.json` | Project metadata; `main.js` reads it with `require()` to display the author on `/author`. Must exist at the path used in `main.js` (repo root in this setup). |

**How to run:** From the folder that contains `main.js`, run `node main.js`. Visit http://localhost:3000, http://localhost:3000/about, and http://localhost:3000/author.

---

## 03 — Express routing

**Goal:** Use Express to define routes, handle different HTTP methods, and use route and query parameters.

### Location: `03/express-activity/`

| File | Purpose |
|------|--------|
| `server.js` | Express app that demonstrates: (1) GET/POST on `/`, (2) fixed route `/about`, (3) parameterized routes like `user/:userID/name/:userName` and `students/:id`, (4) REST-style GET/POST/PUT/DELETE on `/student`, (5) multiple params `/students/:studentId/courses/:courseId`, (6) query params on `/search?name=...&course=...`, and (7) a `/calculator` route that reads `num1` and `num2` from the query string and returns add/subtract/multiply/divide. |
| `package.json` | Declares the Express dependency. Run `npm install` in `express-activity` before running the server. |

**How to run:** `cd 03/express-activity`, then `npm install` and `node server.js`. Test with a browser or tools like Postman/curl (especially for POST/PUT/DELETE and query params).

---

## 04 — Express middleware

**Goal:** Use Express middleware for JSON bodies, URL-encoded forms, static files, and a simple login flow.

### Files

| File | Purpose |
|------|--------|
| `server.js` | Sets up: (1) `express.json()` to parse JSON request bodies into `req.body`, (2) POST `/data` to receive JSON, (3) `express.urlencoded({ extended: true })` for form data, (4) `express.static('public')` to serve files from `public/`, (5) GET `/` to send `login.html`, and (6) POST `/login` to receive form data from the login page. Includes commented examples of custom middleware using `next()`. |
| `public/login.html` | Login page with a form that submits to `/login` (method POST). Uses `style.css` for styling. |
| `public/style.css` | Styles for the login page. Served by Express as a static file at `/style.css`. |

**How to run:** From `04/`, run `node server.js` (ensure Express is installed, e.g. `npm install express`). Open http://localhost:3000 to see the login form; submit it to hit POST `/login`. Send JSON to POST http://localhost:3000/data to test the `/data` route.

---

## Quick reference: run commands

- **01:** `node server.js` or `node fileManagement.js` from `01/`; from `01/0-7/`: `node consoleread.js`, `node filemanagement.js`, etc.
- **02:** `node main.js` from the directory that contains `main.js` (and where `package.json` is reachable as in the code).
- **03:** `cd 03/express-activity`, `npm install`, `node server.js`.
- **04:** From `04/`, `npm install express` (if needed), then `node server.js`.

All servers in this guide use port **3000** unless stated otherwise.
