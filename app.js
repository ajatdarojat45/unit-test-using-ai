const express = require("express");
const app = express();
const port = 3000;
const userRouter = require("./routers/userRouter");

app.use(express.json());
app;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.use("/users", userRouter);

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`);
});
