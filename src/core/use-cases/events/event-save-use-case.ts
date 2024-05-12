import { HttpAdapter } from '../../../config/adapters'
import { EventRequest } from '../../../infraestructure/interfaces/event-db.request';
import { EventSaveResponse } from '../../../infraestructure/interfaces/eventSave-db.response'

export const eventSaveUseCase = async (fetcher: HttpAdapter, event: EventRequest): Promise<any> => {

  try {
    console.log('Entro EventSaveResponse ...');
    const urlAdd = `/events`;
    const eventSave = await fetcher.post<EventSaveResponse>(urlAdd,event);
    console.log('eventSave-UseCase ->', eventSave);
    return eventSave;
  } catch (error) {
    console.log('error ->', error)
    throw new Error('Error fetching events')
  }

}