const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const routes = require("./routes/ToDoRoute");

require("dotenv").config();

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());
app.use(cors());

mongoose
  .connect(
    `mongodb+srv://Sergiy:Sergiy1989@cluster0.eoa98be.mongodb.net/mern-todo?retryWrites=true&w=majority`
  )
  .then(() => console.log(`Connected to MongoDB!!!`))
  .catch((error) => console.log(error));

app.use(routes);

app.listen(PORT, () => console.log(`Server is listening to: ${PORT}`));
