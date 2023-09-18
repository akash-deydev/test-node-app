import express from "express";

const app = express();

const port = process.env.PORT || 6590

app.use("/", (req, res) => {
    res.json({message: "Hello from Express App."})
})


app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})