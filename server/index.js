const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
var ReactDOMServer = require("react-dom/server");
const React = require("react");
import Hello from "../src/hello";

app.use("/static", express.static(path.join(__dirname, "..", "public")));
app.get("/", (req, res) => {
  const component = ReactDOMServer.renderToString(<Hello />);
  const html = `
        <!doctype html>
        <html lang="en">
            <head>
                <meta charset="utf-8">
                <title>React Express server side rendering example</title>
                <meta name="description" content="React Express server side rendering example">
                <meta name="author" content="">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                <div id="root">${component}</div>
                <script src="bundle.js"></script>
            </body>
        </html>
    `;
  res.send(html);
});

app.listen(port, () => {
  console.log(`Server now listening at http://localhost:${port}`);
});
