const { default: userEvent } = require("@testing-library/user-event");

async function requestHandler(req,res){

    try {
        const user = await userEvent.findById(req.userId);
        const tasks = await TextTrackList.findById(user.tasksId);
        tasks.completed = true;
        await tasks.save();
        res.send('task completed');
    } catch (e) {
        res.send(e);
    }

}