import { Injectable, UnauthorizedException, ConflictException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { User, UserType } from '../entities/core/user.entity';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
        private jwtService: JwtService,
    ) { }

    async register(userData: any) {
        const { email, password, username, first_name, last_name } = userData;

        // Check if user already exists
        const existingUser = await this.usersRepository.findOne({ where: [{ email }, { username }] });
        if (existingUser) {
            throw new ConflictException('User already exists');
        }

        // Hash password
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = this.usersRepository.create({
            username,
            email,
            password_hash: hashedPassword,
            first_name,
            last_name,
            user_type: UserType.CLIENT,
        });

        await this.usersRepository.save(user);

        // Return token
        return this.login({ email, password });
    }

    async login(credentials: any) {
        const { email, password } = credentials;
        const user = await this.usersRepository.findOne({ where: { email } });

        if (user && (await bcrypt.compare(password, user.password_hash))) {
            const payload = { email: user.email, sub: user.user_id, type: user.user_type };
            return {
                access_token: this.jwtService.sign(payload),
                user: {
                    id: user.user_id,
                    username: user.username,
                    email: user.email,
                    user_type: user.user_type,
                },
            };
        }

        throw new UnauthorizedException('Invalid credentials');
    }

    async validateUser(payload: any): Promise<any> {
        return await this.usersRepository.findOne({ where: { user_id: payload.sub } });
    }
}
