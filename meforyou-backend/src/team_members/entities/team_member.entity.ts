import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class TeamMember {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    role: string;

    @Column()
    image_url: string;
}
