import express from "express";
import employees from "#db/employees";

const app = express();


/* Boiler Plate
 app.get(
    route,
    (req, res) => {
        res.send(...)
    }
);*/
app.get("/", (req,res) => {
    res.send("Hello employees!");
});

app.get("/employees", (req,res) => {
    res.send(employees);
});

/* Boiler Plate
 !Read everything
app.get("/route", (req, res) => {
  res.send(data);
});

 !Read one thing
app.get("/route/:id", (req, res) => {
  const id = Number(req.params.id);

  !find the data
  res.send(result);
});
*/

app.get("/employees/:id", (req,res) => {
    const id = Number(req.params.id); //conver string to a number because why not?
    const employee = employees.find((employee) => {
  return employee.id === id;
});



if (!employee) {
    return res.status(404).send("Employee not found.")
}
    res.send(employee);
});

export default app;