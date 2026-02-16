import express from "express";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;
const API_KEY = process.env.API_KEY;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.get("/", async (req, res) => {
  res.render("index.ejs", {
    weather: null,
    error: null,
  });
});

app.post("/weather", async (req, res) => {
  try {
    const city = req.body.city;
    const country = req.body.country;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`
    );

    // console.log(response);
    res.render("index.ejs", {
      weather: response.data,
      error: null,
    });
    // console.log(response.data);
  } catch (error) {
    res.render("index.ejs", {
      weather: null,
      error: "City not found 😢",
    });
  }
});

app.listen(port, () => {
  console.log(`server listening to port ${port}`);
});
