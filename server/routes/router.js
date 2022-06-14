const express= require("express");
const route=express();
const services= require("../services/render")
const controller= require("../controller/controller");
route.get("/", services.homeRoutes);

route.get("/index",services.indexRoutes);
route.get("/update-user",services.update_user);
route.get("/add-user",services.add_user);

//API
route.post("/api/users", controller.create);
route.get("/api/users", controller.find);
route.put("/api/users/:id", controller.update);
route.delete("/api/users/:id", controller.delete);



module.exports=route;