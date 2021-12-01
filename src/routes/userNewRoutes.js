import {addUser,getUser, deleteUser, getUserById, updateUser} from "../controllers/userNewControllers.js"

const routes = (app)=>{
    app.route("/users")
        .get((req, res, next)=>{
            next()
        }, getUser)
        .post(addUser)
    app.route("/users/:userId")
        .get(getUserById)
        .put(updateUser)
        .delete(deleteUser)
}

export default routes;