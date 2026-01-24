import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('car_maintenance')
export class CarMaintenance {
    @PrimaryGeneratedColumn()
    maintenance_id: number;

    @Column({ nullable: true })
    details: string;

    @CreateDateColumn()
    created_at: Date;
}
