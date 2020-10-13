const express = require("express");

const app = express();

app.use("/", express.static(__dirname + "/public"))

// app.get("/", (req, res) => {
//   res.sendFile(__dirname + "/public/index.html");
// })

// app.get("/biblioteca", (req, res)=>{
//   res.sendFile(__dirname + "/public/imagens/trabalho.webp")
// })

app.listen(80, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log("O servidor está funcionando !!!");
});
