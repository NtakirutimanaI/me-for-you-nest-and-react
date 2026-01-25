import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, Index, Unique, Check } from 'typeorm';
import { UserType } from './user.entity';

@Entity('role_permissions')
@Unique(['role_type', 'module_name', 'permission_name'])
@Check(`"role_type" IN ('admin', 'manager', 'agent', 'client')`)
export class RolePermission {
    @PrimaryGeneratedColumn()
    permission_id: number;

    @Column({ type: 'varchar', length: 20 })
    @Index()
    role_type: UserType;

    @Column({ type: 'varchar', length: 100 })
    module_name: string;

    @Column({ type: 'varchar', length: 100 })
    permission_name: string;

    @Column({ default: false })
    can_view: boolean;

    @Column({ default: false })
    can_create: boolean;

    @Column({ default: false })
    can_edit: boolean;

    @Column({ default: false })
    can_delete: boolean;

    @Column({ default: false })
    can_approve: boolean;

    @Column({ default: false })
    can_export: boolean;

    @CreateDateColumn()
    created_at: Date;


}
