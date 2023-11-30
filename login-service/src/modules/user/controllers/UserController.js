import UserServices from "../services/UserServices.js";

class UserController {
    async findByEmail(req, res){
        let user = await UserServices.findByEmail(req);
        return res.status(user.status).json(user);
    }

    async getAccessToken(req, res){
        let accessToken = await UserServices.getAccessToken(req);
        return res.status(accessToken.status).json(accessToken);
    }

    async createUser(req, res){
        console.log("AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII")
        let data = await UserServices.createUser(req);
        return res.status(accessToken.status).json(data)
    }
}

export default new UserController();