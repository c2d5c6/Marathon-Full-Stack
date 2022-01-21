const express = require("express");
const fs = require("fs");
const request = require("request");
const sharp = require("sharp");

const app = express();
const port = 3000;
const host = "127.0.0.1";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/public", express.static(__dirname + "/")); // !CSS

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get("/upload", async (req, responce) => {
  const path = "./image.png";
  let url = req.query.url;
  request.head(url, async (err, res, body) => {
    request(url)
      .pipe(fs.createWriteStream(path))
      .on("close", await imageCheck);
  });

  function imageCheck() {
    let arr = [
      [
        [1, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
      ],
      [
        [0, 0, 0],
        [1, 0, 0],
        [0, 0, 0],
      ],
      [
        [0, 0, 0],
        [0, 0, 0],
        [1, 0, 0],
      ],
    ];
    for (let i = 1; i <= 4; i++) {
      let img = sharp("image.png");
      if (i > 1) {
        img = img.recomb(arr[i - 2]);
      }
      img.resize(250, 250).toFile(`image${i}.png`, (err, info) => {
        if (i === 4) {
          responce.json({
            img: [`image1.png`, `image2.png`, `image3.png`, `image4.png`],
          });
        }
      });
    }
  }
});

app.listen(port, host, () => {
  console.log(
    `App Started on PORT ${3000} \n http://${host}:${port} \n Click Ctrl + C for stop server`
  );
});