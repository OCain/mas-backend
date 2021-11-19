import {Column, CreateDateColumn, UpdateDateColumn, Entity, JoinTable, ManyToOne, PrimaryColumn} from "typeorm";
import {v4 as uuid} from 'uuid';
import { CourseUnit } from './CourseUnit';

@Entity("activies")
class Activy {

    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @ManyToOne(() => CourseUnit, course_unit => course_unit.activies)
    @JoinTable()
    course_unit: CourseUnit

    @Column()
    name: string;

    @Column()
    activy_date: Date;

    @Column()
    course_unit_id: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @Column()
    grade: number;
}

export {Activy}