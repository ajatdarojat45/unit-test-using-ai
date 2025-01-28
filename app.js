const express = require("express");
const app = express();
const userRouter = require("./routers/userRouter");

app.use(express.json());
app;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/users", userRouter);

module.exports = app;
