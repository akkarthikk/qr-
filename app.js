
import express from "express";
import qr from "qr-image";
import bodyParser from "body-parser";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const port = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});
app.get("/generateQRCode", (req, res) => {
  const url = req.query.url;
  console.log(url);
  const qr_svg = qr.image(url, { type: 'png' });
  res.type('png');
  qr_svg.pipe(res);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
