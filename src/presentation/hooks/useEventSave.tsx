import { useEffect, useState } from 'react'
import { EventRequest } from '../../infraestructure/interfaces/event-db.request'
import { EventSaveResponse } from '../../infraestructure/interfaces/eventSave-db.response'
import * as UseCases from '../../core/use-cases'
import { cityDBFetcher } from '../../config/adapters/cityDB.adapter';


export const useEventoSave = () => {

  const eventCreate = async(data: EventRequest) => {
    return UseCases.eventSaveUseCase(cityDBFetcher,data);
  }

  return {
    eventCreate
  }
}