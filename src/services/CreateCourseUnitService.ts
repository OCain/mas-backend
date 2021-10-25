import {getRepository} from 'typeorm'
import {CourseUnit} from '../models/CourseUnit'

interface CourseUnitData {
    name: string;
    description: string;
}

class CreateCourseUnitService {
    
    public async execute({name, description}: CourseUnitData) {
        
        const courseUnitsRepository = getRepository(CourseUnit);

        const checkCourseUnitExists = await courseUnitsRepository.findOne({name});

        if (checkCourseUnitExists) {
            throw new Error('Course Unit already exists.');
        }

        const courseUnit = courseUnitsRepository.create({
            name,
            description
        });
        
        await courseUnitsRepository.save(courseUnit);
        
        return courseUnit;
    }
}

export {CreateCourseUnitService};