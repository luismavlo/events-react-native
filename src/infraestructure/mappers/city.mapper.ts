import { City } from '../../core/entities/city.entity';
import type { CitiesResponse } from '../interfaces/city-db.responses';


export class CityMapper {

  static fromCityDBResultToEntity (result: CitiesResponse): City {
    return {
      id: result.id,
      name: result.name,
      image: result.image
    }
  }

}

