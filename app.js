import express from "express";
import employees from "#employees";

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

app.get("/employees", (req,res) => {
    res.send(employees);
});

app.get("/employees/:id", (req,res) => {
    const id = Number(req.params.id); //conver string to a number because why not?
    const employee = employees.find((employee) => {
  return employee.id === id;
});
    res.send(employee);
});

export default app;