import http from "node:http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("About page data");
  } else if (req.method === "POST" && req.url === "/") {
    const user = { name: "John" };
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify(user));
  } else if (req.method === "POST" && req.url === "/test-body") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      console.log(body);
      res.end("Data received");
    });
  } else {
    res.statusCode = 404;
    res.end("Not found");
  }
});

server.listen(8000, () => {
  console.log("Server is running!");
});
