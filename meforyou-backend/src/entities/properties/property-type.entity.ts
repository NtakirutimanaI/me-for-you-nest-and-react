import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { Property } from './property.entity';

@Entity('property_types')
export class PropertyType {
    @PrimaryGeneratedColumn()
    type_id: number;

    @Column({ type: 'varchar', length: 100 })
    type_name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @Column({ default: true })
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Property, property => property.property_type)
    properties: Property[];
}
