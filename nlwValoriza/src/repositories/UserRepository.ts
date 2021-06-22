import { EntityRepository, Repository } from 'typeorm';
import { Users } from '../entities/Users';

@EntityRepository(Users)
class UserRepository extends Repository<Users>{

}

export { UserRepository }