import express from "express";
import { PORT } from "./config/config.js";
import cors from "cors";
import path from "path";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());

// app.use("/public", express.static(path.join(__dirname, "./public")));

app.get("/", (req, res) => {
    return res.json({ message: "Welcome to Mini Peer Fives" });
});

import Routes from "./routes/index.js";
app.use(Routes);

app.listen(PORT, () => console.log(`Mini Peer Fives is running on PORT ${PORT}`));