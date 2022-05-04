const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.listen(PORT, () => {
  console.log("サーバーが起動しました");
});

app.get("/", (req, res) => {
  res.send("hello world");
});

const customers = [
  { title: "田中さん", id: 1 },
  { title: "斎藤さん", id: 2 },
  { title: "橋本さん", id: 3 },
  { title: "鈴木さん", id: 4 },
  { title: "安藤さん", id: 5 },
];

app.get("/api/customers", (req, res) => {
  res.send(customers);
});

app.post("/api/customers", (req, res) => {
  const customer = {
    title: req.body.title,
    id: customers.length + 1,
  };
  customers.push(customer);
  res.send(customer);
});

app.put("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  customer.title = req.body.title;
  res.send(customer);
});

app.delete("/api/customers/:id", (req, res) => {
  const customer = customers.find((c) => c.id === parseInt(req.params.id));
  const index = customers.indexOf(customer); /* 配列の番号が分かる */
  customers.splice(index, 1);
  res.send(customer);
});
