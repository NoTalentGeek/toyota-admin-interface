var Number_Port         = 3000;
var Object_BodyParser   = require("body-parser");
var Object_CookieParser = require("cookie-parser");
var Object_Express      = require("express");
var Object_Mongoose     = require("mongoose");
var Object_Morgan       = require("morgan");
var Object_Path         = require("path");
var Object_ServeFavicon = require("serve-favicon");
//These variables below is mostly for API routings.
var index_              = require("./server/routes/index");
var Route_Admin_        = require("./server/routes/Route_Admin");
var users_              = require("./server/routes/users");
//Kick start ExpressJS application.
var Object_App          = Object_Express();
//View engine setup.
Object_App.set("views", Object_Path.join(__dirname, "server/views"));
Object_App.set("view engine", "ejs");
/*Setting up modules that have been imported.
Uncomment after placing your favicon in /public.*/
//Object_App.use(favicon(Object_Path.join(__dirname, "public", "favicon.ico")));
Object_App.use(Object_BodyParser.json());
Object_App.use(Object_BodyParser.urlencoded({ extended: false }));
Object_App.use(Object_CookieParser());
Object_App.use(Object_Express.static(Object_Path.join(__dirname, "public")));
Object_App.use(Object_Morgan("dev"));
//Set up API routings.
Object_App.use("/", index_);
Object_App.use("/api/admins", Route_Admin_);
Object_App.use("/users", users_);
/*Initialize configuration JavaScript file.
This is mostly for MongoDB connection.*/
var Config_ = require("./server/configs/Config.js");
//Connect to database.
Object_Mongoose.connect(Config_.url);
/*Check if the database connection is okay.
Otherwise "throw" a console message.*/
Object_Mongoose.connection.on("error", function(){
    console.error("MongoDB Connection Error. Make sure MongoDB is running.");
});
//Catch missing/unknown routing to 404 error handler.
Object_App.use(
    function(
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
      var Error_ = new Error("Not found.");
      Error_.status = 404;
      _Object_Next(Error_);
    }
);
/*Simple error handlers.
Development error handler.*/
if(Object_App.get("env") === "development"){
    Object_App.use(
        function(
            _Object_Error,
            _Object_Request,
            _Object_Respond,
            _Object_Next
        ){
            _Object_Respond.render("error", {
                error: _Object_Error,
                message: _Object_Error.message
            });
            _Object_Respond.status(_Object_Error.status || 500);
        }
    );
}
//Production error.
Object_App.use(
    function(
        _Object_Error,
        _Object_Request,
        _Object_Respond,
        _Object_Next
    ){
        _Object_Respond.render("error", {
            error: _Object_Error,
            message: {}
        });
        _Object_Respond.status(_Object_Error.status || 500);
    }
);
//Export this ExpressJS main application object as module.
module.exports = Object_App;
//Setting up port connection to NodeJS server.
Object_App.set("port", process.env.PORT || Number_Port);
var Object_Server = Object_App.listen(Object_App.get("port"), function(){
    console.log(
        "Express server listening on port " +
        Object_Server.address().port
    );
});