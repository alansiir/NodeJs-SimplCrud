
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
app.use(express.urlencoded({ extended :true }));

const Costomer  = require("./models/customerscuma")
const Mydata =require("./models/myscuma")
app.set('view engine','ejs')
app.use(express.static('public'))


//*******************live reload *******
const livereload = require('livereload');
const path = require('path');
// Créer un serveur LiveReload
const liveReloadServer = livereload.createServer();
// Spécifie le répertoire à surveiller (par exemple, "public")
liveReloadServer.watch(path.join(__dirname, 'public'));
const connectLivereload = require('connect-livereload');
const { render } = require("ejs");
const { redirect } = require("express/lib/response");
// Ajouter le middleware connect-livereload
app.use(connectLivereload());
liveReloadServer.server.once("connection",() => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  },100)
})
//*********************************** */
 // method Post
 app.post("/user/add.html", (req, res) => {
     const costomer = new Costomer(req.body)
     costomer.save().then(() => {
      res.redirect("/")
     }).catch(() => {
      
     })
    
   
    
  });
  
  





 // method Get
app.get("/", (req, res) => {
  Costomer.find().then((resulet) => {
    
    res.render("index",{ arr :resulet});
  }).catch((err) => {
    console.log(err)
  })


}
);

app.get("/user/add.html", (req, res) => {
  res.render("user/add");
  }
  );

app.get("/user/view.html", (req, res) => {
    res.render("user/view");
    }
    );

app.get("/user/view.html", (req, res) => {
    res.render("user/view");
     }
     );

app.get("/user/edit.html", (req, res) => {
  res.render("user/edit");
    }
    );







mongoose
.connect("mongodb+srv://alansir101:zH7HEQuohYAAASDa@cluster0.shce2.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {

  app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
  });

})
.catch((err) => {console.log(err)});

























