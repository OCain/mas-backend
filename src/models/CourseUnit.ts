import {Column, Entity, OneToMany, PrimaryColumn} from 'typeorm';
import {v4 as uuid} from 'uuid';
import { Activy } from './Activy';


@Entity("course_unit")
class CourseUnit {
    
    constructor() {
        if(!this.id) {
            this.id = uuid();
        }
    }

    @PrimaryColumn()
    readonly id: string;

    @OneToMany(() => Activy, activy => activy.course_unit)
    activies: Activy[];

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    create_at: Date;

}

export {CourseUnit}