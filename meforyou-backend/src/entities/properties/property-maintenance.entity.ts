import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('property_maintenance')
export class PropertyMaintenance {
    @PrimaryGeneratedColumn()
    maintenance_id: number;

    @Column({ nullable: true })
    details: string;

    @CreateDateColumn()
    created_at: Date;
}
