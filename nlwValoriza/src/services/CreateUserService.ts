import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UserRepository";
import { hash } from 'bcryptjs';

interface IUserRequest{
    name: string;
    password: string;
    email: string;
    admin?: boolean;
}

class CreateUserService{
    async execute({ name, password, email, admin  = false}: IUserRequest){
        const usersRepository = getCustomRepository(UserRepository);
        
        if(!email){
            throw new Error("E-mail incorrect!");
        }

        const userAlreadyExists = await usersRepository.findOne({
            email
        });

        if(userAlreadyExists){
            throw new Error("User already exists!");
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            password: passwordHash,
            email,
            admin
        });

        await usersRepository.save(user);

        return user;

    }
}

export { CreateUserService }