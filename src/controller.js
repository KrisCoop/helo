
module.exports = {
    register: (req, res, next) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        const userImage = `https://robohash.org/${username}`;
        db.users_helo1.insert({
            username,
            password,
            userImage
        })
        .then((user) => {
            res.status(200).send(user)
        })
    },
    login: (req, res, next) => {
        const db = req.app.get('db');
        const {username, password} = req.body;
        let currentUser;
        db.users_helo1.findOne({username})
            .then((user) => {
                if(user){
                    currentUser = user;
                    if(currentUser.password === password){
                        console.log("Cool")
                        res.status(200).send(currentUser)
                    }else{
                        console.log("That password don't match bro")
                    }
                }
            })
            .catch((err)=>{
                res.send({success:false, err})
            })
    }
}