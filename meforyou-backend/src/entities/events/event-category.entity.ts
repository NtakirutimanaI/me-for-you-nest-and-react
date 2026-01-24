import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToOne, JoinColumn, Tree, TreeParent, TreeChildren, Index } from 'typeorm';
import { Event } from './event.entity';

@Entity('event_categories')
@Tree('closure-table')
export class EventCategory {
    @PrimaryGeneratedColumn()
    category_id: number;

    @Column({ type: 'varchar', length: 100 })
    category_name: string;

    @Column({ type: 'text', nullable: true })
    description: string;

    @TreeParent({ onDelete: 'SET NULL' })
    @JoinColumn({ name: 'parent_category_id' })
    parent_category: EventCategory;

    @Column({ nullable: true })
    parent_category_id: number;

    @TreeChildren()
    sub_categories: EventCategory[];

    @Column({ default: true })
    is_active: boolean;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Event, event => event.category)
    events: Event[];

    @Index()
    get activeIndex() {
        return this.is_active;
    }
}
