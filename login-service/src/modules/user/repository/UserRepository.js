import {User} from "../model/User.js"

class UserRepository {
    async findById(id){
        try{
            return await User.findOne({where: id})
        }catch (err){
            console.error(err.message);
            return;
        }
    }

    async findByEmail(email){
        try{
            return await User.findOne({where: {email: email}})
        }catch (err){
            console.error(err.message);
            return;
        }
    }

    async createUser(data){
        try{
            const user = User.build(data);
            await user.save();
            console.log(`The user data ${user} was saved to the database!`);
        }catch (err){
            console.error(err.message);
            return;
        }
    }
}

export default new UserRepository();