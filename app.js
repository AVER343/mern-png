const express =require('express')
const app =express()
const path =require('path')
require('./db/mongoose')
const bodyParser=require('body-parser')
const port = process.env.PORT || 7000;
const image=require('./routes/image/imageAPI')
const taskRouter = require('./routes/tasks/tasks.routes')
const userRouter= require('./routes/user/user.routes')
const cors=require('cors')
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(userRouter)
app.use(taskRouter)
app.use(image)
if(process.env.NODE_ENV==='production')
{
    app.use(express.static('client/build'));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}
app.listen(port, () => console.log(`Listening on port ${port}`));