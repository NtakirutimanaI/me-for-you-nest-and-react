
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AuthService } from './auth/auth.service';
import { UserType } from './entities/core/user.entity';

async function verifyCredentials() {
    const app = await NestFactory.createApplicationContext(AppModule);
    const authService = app.get(AuthService);

    const usersToTest = [
        { username: 'admin', expectedType: UserType.ADMIN },
        { username: 'manager_events', expectedType: UserType.MANAGER },
        { username: 'manager_cars', expectedType: UserType.MANAGER },
        { username: 'manager_properties', expectedType: UserType.MANAGER },
        { username: 'agent_events', expectedType: UserType.AGENT },
        { username: 'agent_cars', expectedType: UserType.AGENT },
        { username: 'agent_properties', expectedType: UserType.AGENT },
        { username: 'client', expectedType: UserType.CLIENT },
    ];

    const password = 'Password123!';
    console.log('Verifying credentials...');

    for (const u of usersToTest) {
        try {
            console.log(`Testing login for ${u.username}...`);
            // We need email to login as per AuthService.login implementation?
            // Let's check AuthService.login. It takes { email, password }.
            // But checking seed.ts, we know the emails.
            // admin -> admin@meforyou.com
            // manager_events -> manager.events@meforyou.com
            // client -> client@meforyou.com
            // The mapping logic is predictable:
            // admin -> admin@meforyou.com
            // client -> client@meforyou.com
            // others: name.replace('_', '.') + '@meforyou.com'

            let email = '';
            if (u.username === 'admin') email = 'admin@meforyou.com';
            else if (u.username === 'client') email = 'client@meforyou.com';
            else email = u.username.replace('_', '.') + '@meforyou.com';

            const result = await authService.login({ email, password });

            if (result && result.access_token) {
                console.log(`[SUCCESS] ${u.username} logged in. Token issued.`);
                // Verify payload
                if (result.user.user_type === u.expectedType) {
                    console.log(`   Role verified: ${result.user.user_type}`);
                } else {
                    console.error(`   [ERROR] Role mismatch! Expected ${u.expectedType}, got ${result.user.user_type}`);
                }
            } else {
                console.error(`[FAILURE] ${u.username} login returned no token.`);
            }

        } catch (error) {
            console.error(`[FAILURE] ${u.username} login failed: ${error.message}`);
        }
    }

    await app.close();
}

verifyCredentials();
