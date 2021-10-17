import {getRepository} from 'typeorm'
import {Activy} from '../models/Activy'

interface ActivyData {
    name: string;
    activy_date: string;
    course_unit_id: string;
}

class CreateActivyService {
    
    public async execute({name, activy_date, course_unit_id}: ActivyData) {
        
        const activitiesRepository = getRepository(Activy);

        const activy = activitiesRepository.create({
            name,
            activy_date,
            course_unit_id
        });
        
        await activitiesRepository.save(activy);
        
        return activy;
    }
}

export {CreateActivyService};