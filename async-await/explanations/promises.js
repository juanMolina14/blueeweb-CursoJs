
function requestHandler(req,res){
    User.findById(req.userID)
    .then((user)=>{
        Tasks.findByID(user.taksID)
    })
    .then((task)=>{
        tasks.completed = true;
        return task.save();
    })
    .then(()=>{
        res.send('task completed')
    })

    .catch((errors)=>{        
        res.send(errors)
    })
}