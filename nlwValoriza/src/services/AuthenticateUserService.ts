import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { UserRepository } from "../repositories/UserRepository";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest{
    email: string;
    password: string;
}
class AuthenticateUserService{
    async execute({email, password} : IAuthenticateRequest){
        const usersRepository = getCustomRepository(UserRepository);

        const user = await usersRepository.findOne({
            email
        });
        
        if(!user){
            throw new Error('Email/Password incorrect');
        };
        const match = await compare(password, user.password);
        if(!match){
            throw new Error('Email/Password incorrect')
        }

        const token = sign({
            email: user.email
        }, '3a6ed4e2844bf796f2a83e14c805296e',{
            subject: user.id,
            expiresIn: "1d",
        });

        return token;
    }
};

export { AuthenticateUserService };