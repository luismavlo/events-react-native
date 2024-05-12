import { useEffect, useState } from 'react'
import { EventRequest } from '../../infraestructure/interfaces/event-db.request'
import { EventSaveResponse } from '../../infraestructure/interfaces/eventSave-db.response'
import * as UseCases from '../../core/use-cases'
import { cityDBFetcher } from '../../config/adapters/cityDB.adapter';


export const useEventoSave = async(data: EventRequest) => {

  const [eventSave, setEventSave] = useState<EventSaveResponse[]>([]);

  useEffect(() => {
    initialLoad();
  }, [])

  const initialLoad = async() => {
    console.log('Entro useEventoSave-Hook');
    const eventSave: EventSaveResponse= await UseCases.eventSaveUseCase(cityDBFetcher,data);
    console.log('Entro useEventoSave-Hook-response',eventSave);
  }

  return {
    eventSave
  }
}