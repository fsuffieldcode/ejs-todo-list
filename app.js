const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let items = ["Buy Food", "Cook Food", "Eat Food"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    let today = new Date();
    let day = today.getDay();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    day = today.toLocaleDateString("en-GB", options);

    res.render("list", {kindOfDay: day, newListItems: items});
    
});

app.post('/', (req, res) => {
    let item = req.body.newItem;

    items.push(item);

    res.redirect("/");
  });


app.listen(3000, () =>{
    console.log("Server started on port 3000");
});
