const { default: userEvent } = require("@testing-library/user-event");

function requestHandler(req, res){
    userEvent.findByID(req.userId, function(err,user){
        if(err){
            res.send(err);
        }else{
            Task.findByID(user.taksID, function(err,task){
                if(err){
                    return res.send(err)
                }else{
                    task.completed = true;
                    task.save(function(err){
                        if(err){
                            return res.send(err)
                        }else{
                            res.send('task completed')
                        }
                    })
                }
            })
        }

    })
    //whatever code
}