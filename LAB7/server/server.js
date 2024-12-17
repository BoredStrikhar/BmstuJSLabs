const path = require("path");

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { ALL_CITIES, WEATHER_DATA } = require("./data");

const HOSTNAME = "127.0.0.1";
const PORT = 3000;
const STATIC_DIR = path.resolve(__dirname, "..", "client");

const app = express();
app.use(cors());
app.use(morgan("tiny"));
app.use(express.static(STATIC_DIR));

app.get("/api/hello", (req, resp) => {
    resp.end("Hello world");
});
app.get("/api/weather", (req, resp) => {
    const city = req.query.city;
    if (typeof city !== "string") {
        resp.status(400).end();
        return;
    }

    const data = WEATHER_DATA.find(
        (data) => data.city.toLowerCase() === city.toLowerCase()
    );
    if (!data) {
        resp.status(404).end();
        return;
    }

    resp.json(data).status(200).end();
});
app.get("/api/cities", (req, resp) => {
    resp.json(ALL_CITIES).end();
});

app.listen(PORT, HOSTNAME, () =>
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`)
);
