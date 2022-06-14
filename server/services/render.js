const axios=require("axios");

exports.homeRoutes=(req,res)=>{
    res.status(200).render("home");
};

exports.add_user=(req,res)=>{
    res.status(200).render("add_user");
};

exports.update_user=(req,res)=>{
    axios.get('http://localhost:3000/api/users',{params:{id:req.query.id}})
    .then(userdata=>{
        console.log(userdata.data);
        res.status(200).render("update_user", {user:userdata.data});
    })
    .catch(err=>{
        res.send(err);
    })
    
};


exports.indexRoutes=(req,res)=>{
    //Make a get request on api users
    axios.get('http://localhost:3000/api/users')
    .then(function(response){
        console.log(response.data);
        res.status(200).render("index", {users: response.data});
    })
    .catch(err=>{
        res.status(404).send(err);
    })
}

