const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let hello = "Hello World!";

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <link rel="stylesheet" href="styles.css">
      </head>
      <body>
        <section>
          <h3>${hello}</h3>
        </section>        
      </body>
    </html>
  `);
});

app.listen(80);

console.log('hello world');