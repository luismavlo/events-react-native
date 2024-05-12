import { useEffect, useState } from 'react'
import { Event } from '../../core/entities/event.entity'

import * as UseCases from '../../core/use-cases'
import { cityDBFetcher } from '../../config/adapters/cityDB.adapter';


export const useEventos = (id: number) => {

  const [isLoading, setIsLoading] = useState(true);
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    initialLoad();
  }, [])

  const initialLoad = async () => {

    const events = await UseCases.eventByCityUseCase(cityDBFetcher,id);

    setEvents(events)
    setIsLoading(false)

  }


  return {
    isLoading,
    events
  }
}