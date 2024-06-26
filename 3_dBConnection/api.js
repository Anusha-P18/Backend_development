const express = require("express");

 

// create a server

const app=express();

 

/** pre-defined/ thirsd party middleware */

app.use(express.json());

 

app.use((req, res, next) => {

    console.log("First use method in middleware", req.body);

    // res.json({

    //     message: "Thanks for the use method"

    // })

    next();

})

 

// app.use(express.json()); -> if its defined here then first use() req.body will be undefined

 

app.post("/", function(req, res, next){

    console.log("I am a post route", req.body);

    res.json({

        message: "Thanks for the post route"

    })

    next();

})

 

app.use((req, res, next) => {

    console.log("I will run on all methods", req.body);

    // res.json({

    //     message: "Thanks for the use method"

    // })

    next();

})

 

app.get("/", function(req, res){

    console.log("I am a get route") // prints on server

    res.json({

        message: "Thanks for the get route" // sent to client

    })

})

 

// listen to the server

const PORT = process.env.PORT || 3000

app.listen(PORT, function(){

    console.log("server is running at port", PORT);

});

 

/**

* NOTE -

* here order matters alot

* cannot send 2 resp for one single request hence even if we have added next(),

* if the resp is encounter then next with be ignored (execution will be stopped)

*/