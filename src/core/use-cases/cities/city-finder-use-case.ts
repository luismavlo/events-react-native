import { HttpAdapter } from '../../../config/adapters'
import { CitiesResponse } from '../../../infraestructure';
import { CityMapper } from '../../../infraestructure/mappers/city.mapper';
import type { City } from '../../entities/city.entity';




export const cityFinderUseCase = async (fetcher: HttpAdapter): Promise<City[]> => {

  try {
    const cities = await fetcher.get<CitiesResponse[]>('/cities');

    return cities.map(CityMapper.fromCityDBResultToEntity)
  } catch (error) {
    console.log('error ->', error)
    throw new Error('Error fetching cities')
  }

}