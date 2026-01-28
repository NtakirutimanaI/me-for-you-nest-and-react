
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from './roles.decorator';
import { UserType } from '../entities/core/user.entity';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<UserType[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!requiredRoles) {
            return true;
        }
        const { user } = context.switchToHttp().getRequest();

        // If no user is attached to request (e.g. public route accidentally guarded), block it or handle it.
        // Assuming AuthGuard('jwt') runs before this and attaches user.
        if (!user || !user.userType) {
            return false;
        }

        return requiredRoles.some((role) => user.userType === role);
    }
}
