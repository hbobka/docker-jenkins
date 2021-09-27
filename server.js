const express = require("express");

const app = express();
let hello = "Hello World!";

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
