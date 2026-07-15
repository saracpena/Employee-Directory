import express from "express";

const app = express();


/* Boiler Plate
 app.get(
    route,
    (req, res) => {
        res.send(...)
    }
);*/
app.get("/", (req,res) => {
    res.send("Hello, Employees!");
});

export default app;