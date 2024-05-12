import { City } from '../../core/entities/city.entity'
export interface EventSaveResponse {
    name: string;
    description: string;
    image: string;
    cityId:number;
    city: City;
    id: number;
  }