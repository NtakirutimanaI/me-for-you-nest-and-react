
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DataSource } from 'typeorm';
import { User, UserType, AccountStatus } from './entities/core/user.entity';
import { UserRole, Department } from './entities/core/user-role.entity';
import * as bcrypt from 'bcrypt';

async function bootstrap() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const dataSource = app.get(DataSource);
    const userRepository = dataSource.getRepository(User);
    const userRoleRepository = dataSource.getRepository(UserRole);

    const password = 'Password123!';
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const usersToSeed = [
        {
            username: 'admin',
            email: 'admin@meforyou.com',
            firstName: 'Super',
            lastName: 'Admin',
            userType: UserType.ADMIN,
            department: Department.ALL,
        },
        {
            username: 'manager_events',
            email: 'manager.events@meforyou.com',
            firstName: 'Manager',
            lastName: 'Events',
            userType: UserType.MANAGER,
            department: Department.EVENTS,
        },
        {
            username: 'manager_cars',
            email: 'manager.cars@meforyou.com',
            firstName: 'Manager',
            lastName: 'Cars',
            userType: UserType.MANAGER,
            department: Department.CAR_RENTAL,
        },
        {
            username: 'manager_properties',
            email: 'manager.properties@meforyou.com',
            firstName: 'Manager',
            lastName: 'Properties',
            userType: UserType.MANAGER,
            department: Department.PROPERTY_RENTAL,
        },
        {
            username: 'agent_events',
            email: 'agent.events@meforyou.com',
            firstName: 'Agent',
            lastName: 'Events',
            userType: UserType.AGENT,
            department: Department.EVENTS,
        },
        {
            username: 'agent_cars',
            email: 'agent.cars@meforyou.com',
            firstName: 'Agent',
            lastName: 'Cars',
            userType: UserType.AGENT,
            department: Department.CAR_RENTAL,
        },
        {
            username: 'agent_properties',
            email: 'agent.properties@meforyou.com',
            firstName: 'Agent',
            lastName: 'Properties',
            userType: UserType.AGENT,
            department: Department.PROPERTY_RENTAL,
        },
        {
            username: 'client',
            email: 'client@meforyou.com',
            firstName: 'John',
            lastName: 'Client',
            userType: UserType.CLIENT,
            department: Department.ALL, // Clients might not need specific departments, using ALL or just skipping roles
        },
    ];

    console.log('Seeding users...');


    console.log('Cleaning up existing seed users using raw SQL...');

    for (const userData of usersToSeed) {
        try {
            // Delete roles first (referencing user)
            // Using subquery to find user_id by username or email
            await dataSource.query(
                `DELETE FROM user_roles WHERE user_id IN (SELECT user_id FROM users WHERE username = $1 OR email = $2)`,
                [userData.username, userData.email]
            );

            // Delete user
            await dataSource.query(
                `DELETE FROM users WHERE username = $1 OR email = $2`,
                [userData.username, userData.email]
            );
            console.log(`Cleaned up ${userData.username}`);
        } catch (e) {
            console.warn(`Warning during cleanup for ${userData.username}: ${e.message}`);
        }
    }

    console.log('Seeding users...');

    for (const userData of usersToSeed) {
        console.log(`Creating user ${userData.username}...`);
        const user = userRepository.create({
            username: userData.username,
            email: userData.email,
            password_hash: hashedPassword,
            first_name: userData.firstName,
            last_name: userData.lastName,
            user_type: userData.userType,
            account_status: AccountStatus.ACTIVE,
            email_verified: true,
            created_at: new Date(),
            updated_at: new Date(),
        });

        // Save user
        await userRepository.save(user);

        // Assign Role
        console.log(`Assigning role ${userData.userType} in ${userData.department} to ${userData.username}`);
        const userRole = userRoleRepository.create({
            user_id: user.user_id,
            role_type: userData.userType,
            department: userData.department,
            assigned_by: user.user_id,
            is_active: true
        });
        await userRoleRepository.save(userRole);
    }

    console.log('Seeding complete!');
    await app.close();
}

bootstrap();
