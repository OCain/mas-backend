import {getRepository} from 'typeorm'
import {hash} from 'bcryptjs'
import {Activity} from '../models/Activity'

interface ActivityData {
    name: string;
    activity_date: string;
    course_unit_id: string;
}

class CreateActivityService {
    
    public async execute({name, activity_date, course_unit_id}: ActivityData) {
        
        const activitiesRepository = getRepository(Activity);

        const activity = activitiesRepository.create({
            name,
            activity_date,
            course_unit_id
        });
        
        await activitiesRepository.save(activity);
        
        return activity;
    }
}

export {CreateActivityService};