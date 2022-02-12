// Call Express Api.
var express=require('express'),

// Call express Session Api.
session = require('express-session'),

app=express();

// Session Setup
app.use (
    session ({

        // It holds the secret key for session
        secret: "I am girl",

        // Forces the session to be saved
        // back to the session store
        resave: true,


        // Forces a session that is "uninitialized"
        // to be saved to the store
        saveUninitialized: false,
        cookie : {}
    })
);

// Get function in which send session as routes.
app.get('/',function(req, res, next) {

    if (req.session.views) {

      // Increment the number of views.
      req.session.views++

      // Print the views.
      res.write('<p> No. of views: ' 
          + req.session.views + '</p>') 
      res.end()
    } else {
      req.session.views = 1
      res.end(' New session is started')
    }
  })

// The server object listens on port 3000.
app.listen(4000,function(){
    console.log("Express Started on Port 4000");
});