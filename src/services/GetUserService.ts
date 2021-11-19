import { getRepository } from "typeorm"
import { User } from "../models/User"

interface UserId {
    id: string;
}

class GetUserService {

    public async execute({id}:UserId) {

        const userRepository = getRepository(User);

        const user = userRepository.find();
        
        if (!user) {
            return {
                message:'user not found'
            }
        }

        return user;
    }
}

export {GetUserService}