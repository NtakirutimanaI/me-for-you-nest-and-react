import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Facility {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column('text')
    description: string;

    @Column()
    icon_class: string;

    @Column()
    bg_class: string;

    @Column()
    text_class: string;
}
