import {getRepository} from 'typeorm'
import {Activy} from '../models/Activy'

interface ActivyData {
    name: string;
    activy_date: string;
    course_unit_id: string;
}

class CreateActivyService {
    
    public async execute({name, activy_date, course_unit_id}: ActivyData) {
        
        const activiesRepository = getRepository(Activy);

        const checkActivyExists = await activiesRepository.findOne({name, course_unit_id});

        if (checkActivyExists) {
            throw new Error('Activy to Course Unit already exists.');
        }

        const activy = activiesRepository.create({
            name,
            activy_date,
            course_unit_id
        });
        
        await activiesRepository.save(activy);
        
        return activy;
    }
}

export {CreateActivyService};