import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { RegisterDto } from './dto/register.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private readonly usersService: UsersService,
        private  readonly jwtService: JwtService
    ) {}

     async register(registerDto: RegisterDto) {
        return await this.usersService.createUser(registerDto)
        
    }

    login() {
        return 'login'; 
    }

    
}
