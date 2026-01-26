import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Testimonial {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    profession: string;

    @Column('text')
    content: string;

    @Column()
    image_url: string;

    @Column({ nullable: true })
    video_url: string;

    @Column({ default: 'text' })
    type: string; // 'text' or 'video'
}
