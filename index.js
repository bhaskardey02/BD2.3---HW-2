//BD2.3 - HW-2

let express = require("express");
let app = express();
let port = 3000;

//E1

let products = [
  { name: "Product A", inStock: true },
  { name: "Product B", inStock: false },
  { name: "Product C", inStock: true },
  { name: "Product D", inStock: false },
];

function filterInStockProducts(p) {
  return p.inStock;
}

app.get("/in-stock-products", (req, res) => {
  let result = products.filter(p=> filterInStockProducts(p));
  res.json(result);
});

//E2

let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 17 },
  { name: "Dave", age: 16 },
];

function filterAdults(users) {
  return users.age >= 18;
}

app.get("/adult-users", (req, res) => {
  let result = users.filter((user) => filterAdults(user));
  res.json(result);
});

//E3

let productPrices = [
  { name: 'Product A', price: 50 },
  { name: 'Product B', price: 150 },
  { name: 'Product C', price: 200 },
  { name: 'Product D', price: 90 }
];

function filterExpensiveProducts(product, price) {
  return product.price > price;
}

app.get('/expensive-products', (req, res) => {
  let price = parseFloat(req.query.price);
  let result = productPrices.filter(product => filterExpensiveProducts(product, price));
  res.json({ products: result });
});

//E4

let articles = [
  { title: "Article A", wordCount: 400 },
  { title: "Article B", wordCount: 600 },
  { title: "Article C", wordCount: 700 },
  { title: "Article D", wordCount: 300 },
];

function filterExpensiveProducts(article, minWords) {
  return article.wordCount > minWords;
}

app.get("/long-articles", (req, res) => {
  let minWords = parseFloat(req.query.minWords);
  let result = articles.filter((article) =>
    filterExpensiveProducts(article, minWords),
  );
  res.json(result);
});

//E5

let movies = [
  { title: "Movie A", rating: 8.5 },
  { title: "Movie B", rating: 7.0 },
  { title: "Movie C", rating: 9.0 },
  { title: "Movie D", rating: 6.5 },
];

function filterHighRatedMovies(movie, rating) {
  return movie.rating > rating;
}

app.get("/high-rated-movies", (req, res) => {
  let rating = parseFloat(req.query.rating);
  let result = movies.filter((movie) => filterHighRatedMovies(movie, rating));
  res.json(result);
});

//E6

let employees = [
  { name: "Employee A", experience: 3 },
  { name: "Employee B", experience: 6 },
  { name: "Employee C", experience: 10 },
  { name: "Employee D", experience: 2 },
];

function filterExperiencedEmployees(employee, years) {
  return employee.experience > years;
}

app.get("/experienced-employees", (req, res) => {
  let years = parseFloat(req.query.years);
  let result = employees.filter((employee) =>
    filterExperiencedEmployees(employee, years),
  );
  res.json(result);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
