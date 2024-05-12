import { HttpAdapter } from '../../../config/adapters'
import { EventsResponse } from '../../../infraestructure';
import { EventMapper } from '../../../infraestructure/mappers/event.mapper';
import type { Event } from '../../entities/event.entity';




export const eventByCityUseCase = async (fetcher: HttpAdapter, cityId: number): Promise<Event[]> => {

  try {
    const urlAdd = `/events/${cityId.toString()}`;
    console.log('urlAdd-params=>',urlAdd);
    const events = await fetcher.get<EventsResponse[]>(urlAdd);

    return events.map(EventMapper.fromEventDBResultToEntity)
  } catch (error) {
    console.log('error ->', error)
    throw new Error('Error fetching events')
  }

}