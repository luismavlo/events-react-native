import { Event } from '../../core/entities/event.entity';
import type { EventsResponse } from '../interfaces/event-db.responses';


export class EventMapper {

  static fromEventDBResultToEntity (result: EventsResponse): Event {
    return {
        id: result.id,
        name: result.name,
        description: result.description,
        image: result.image,
        cityId: result.cityId
    }
  }

}