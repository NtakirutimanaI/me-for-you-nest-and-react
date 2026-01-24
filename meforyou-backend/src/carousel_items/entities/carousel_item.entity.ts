import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CarouselItem {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    image_url: string;

    @Column({ nullable: true })
    primary_button_text: string;

    @Column({ nullable: true })
    primary_button_link: string;

    @Column({ nullable: true })
    secondary_button_text: string;

    @Column({ nullable: true })
    secondary_button_link: string;
}
