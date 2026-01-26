import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @Column()
    image_url: string;

    @Column({ default: 'Available' })
    status: string;

    @Column({ default: 'Now' })
    availability: string;

    @Column({ default: 'Negociable' })
    price_label: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
    price: number;

    @Column({ default: 'General' })
    category: string;
}
