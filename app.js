
const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const Customer  = require("./models/customerscuma")
const Mydata = require("./models/myscuma");
const livereload = require('livereload');
const path = require('path');
const methodOverride = require('method-override');
const connectLivereload = require('connect-livereload');
const moment = require('moment');

const liveReloadServer = livereload.createServer();
liveReloadServer.watch(path.join(__dirname, 'public'));

// Set up the view engine and static files
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Use method-override middleware
app.use(methodOverride('_method')); // Corrected the spelling to '_method'

// Add connect-livereload middleware
app.use(connectLivereload());
// LiveReload connection setup
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh('/');
  }, 100);
});




//*********************************** */


 
 // ******************method Post
 app.post("/user/add.html", (req, res) => {
     const customer = new Customer(req.body)
     customer.save().then(() => {
      res.redirect("/")
     }).catch(() => {
      
     })   
  });
  
 // *******************method Get


  app.get("/edit/:id", (req, res) => {
    Customer.findById(req.params.id).then((resulet) => {
      res.render("user/edit" , {arr:resulet});
    })
    .catch((err) => {
      console.log(err)    
    }) 
      }
      );
  


 //affiche tous les datas 
app.get("/", (req, res) => {
  Customer.find().then((resulet) => {
    
    res.render("index",{ arr :resulet , moment : moment});
  }).catch((err) => {
    console.log(err)
  })


}
);



 // *******************method Delete
 app.delete("/del/:id", (req, res) => {
    console.log("c marche");
  Customer.deleteOne({_id:req.params.id}).then(() => {
    res.redirect("/");
  })
   .catch((err) => {
    console.log(err)
   })
});


app.get("/user/add.html", (req, res) => {
  res.render("user/add");
  }
  );

//affiche par customer par id 
app.get("/view/:id", (req, res) => {
  Customer.findById(req.params.id).then((resulet) => {
    res.render("user/view", {arr:resulet , moment : moment});
  })
  
  .catch((err) => {
    console.log(err)
  })
  
  }
  ); 












mongoose
.connect("mongodb+srv://alansir101:zH7HEQuohYAAASDa@cluster0.shce2.mongodb.net/all-data?retryWrites=true&w=majority&appName=Cluster0")
.then(() => {

  app.listen(port, () => {
    console.log(`http://localhost:${port}/`);
    console.log(`branche ALA`);
  });

})
.catch((err) => {console.log(err)});

























