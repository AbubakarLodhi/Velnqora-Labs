// Local-only render rig: serves render.html + three.js, and saves POSTed frames to ./frames.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
const framesDir = path.join(root, "frames");
fs.mkdirSync(framesDir, { recursive: true });
const types = { ".html": "text/html", ".js": "text/javascript", ".mjs": "text/javascript" };

http
  .createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    if (req.method === "POST" && url.pathname.startsWith("/frame/")) {
      const name = url.pathname.split("/")[2].replace(/\D/g, "").padStart(4, "0");
      const chunks = [];
      req.on("data", (c) => chunks.push(c));
      req.on("end", () => {
        fs.writeFileSync(path.join(framesDir, `${name}.jpg`), Buffer.concat(chunks));
        res.end("ok");
      });
      return;
    }
    let p = path.normalize(path.join(root, decodeURIComponent(url.pathname)));
    if (url.pathname === "/") p = path.join(root, "render.html");
    if (!p.startsWith(root) || !fs.existsSync(p) || fs.statSync(p).isDirectory()) {
      res.statusCode = 404;
      return res.end("not found");
    }
    res.setHeader("content-type", types[path.extname(p)] || "application/octet-stream");
    fs.createReadStream(p).pipe(res);
  })
  .listen(4567, "127.0.0.1", () => console.log("rig ready on 4567"));
