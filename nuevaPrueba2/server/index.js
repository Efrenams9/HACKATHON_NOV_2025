// index.js

/*
const server = require("./src/server");
const { conn } = require('./src/db.js');
const syncCountriesInDataBase = require('./src/syncBDD.js');
const PORT = 3001;

conn.sync({ force: true })
  .then(() => syncCountriesInDataBase())
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch(error => console.error(error));
  */

import express from "express";
import fs from "fs"; //para trabajar con file system

const readData = () =>{
  try {
      const data = fs.readFileSync("./api/db.json");
      return(JSON.parse(data));
  } catch (error) {
      console.log(error);  
  }
}

const writeData = (data)=>{
  try {
    fs.readFileSync("./api/db.json",JSON.stringify(data));
      return(JSON.parse(data));
  } catch (error) {
      console.log(error);  
  }

}


const app = express();
app.get("/",(req,res)=>{ //req y res es para preguntar y responder
  res.send("bienvenido a la API con Node.js para el Hackathon")
})

//*CREACION DE LO S ENDPOINTS

app.get("/tiendas", (req, res)=>{
  const data = readData();c
  res.json(data);
});
app.listen(3000,()=>{ //nos encargamos de .listen para escuchar todo lo que se
  //transmita a la app
  console.log("server listening on port 3000");
});

  //?como leer y escribir en el archivo db.json? 
  
