var UserDB= require("../model/model");

//Create and Save new User
exports.create=(req, res)=>{
    if(!req.body){
        res.status(400).send("Content can not be empty!");
        return;
    }

    //Create a User
    const user = new UserDB({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status,
    });
    //Save user in the Database
    user
    .save(user)
    .then((data)=>{
        res.redirect("/add-user");
    })
    .catch(err=>{
        res.status(500).send({
            message: err.message ||"Some Error occured while Creating the Create Operation"
        });
    });


}

//Retrive and return all Users or Retrive and Return one User
exports.find=(req, res)=>{
    if(req.query.id){
        const id= req.query.id;
        UserDB.findById(id)
        .then(data=>{
            if(!data){
                res.status(404).send({
                    message: `User not find by ${id}`
                })
            }
            else
            res.status(200).send(data);
        })
        .catch(err=>{
            res.status(500).send({
                message: `Error retriving user with ${is}`
            })
        })

    }
    else
    {
        UserDB.find()
        .then(user=>{
            res.status(200).send(user);
        })
        .catch(err=>{
            res.status(500).send(
                {
                    message: "Error Occured while retriving all users"
                }
            );
        });
    }

} 


//  Update a New identified User by User id
exports.update= (req,res)=>{
if(!req.body){
    res.status(400).send({
        message:"Data to Update can not be empty"
    })
}
const id= req.params.id;
UserDB.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
.then(data=>{
    if(!data){
        res.status(400).send({
            message: `Can not update User with ${id}. May be user can not find`,
        })
    }
    else 
        res.send(data);

})
.catch(err=>{
    res.status(500).send({
        message: "Error Update User Infomation"
    });
})

}

//Delete the User by id
exports.delete=(req,res)=>{
    const id=req.params.id;
    UserDB.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(400).send({
                message: `Can't delete the user with ${id}. May be id is wrong`
            })
        }
    else{
        res.status(200).send({
            message: "User was deleted Successfully!"
        });
    }
})
.catch(err=>{
    res.status(500).send({
        messaege: `User can not be deleted with ${id}`
    })
})
}