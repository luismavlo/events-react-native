import { useEffect, useState } from 'react'
import { City } from '../../core/entities/city.entity'

import * as UseCases from '../../core/use-cases'
import { cityDBFetcher } from '../../config/adapters/cityDB.adapter';


export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    initialLoad();
  }, [])

  const initialLoad = async () => {

    const cities = await UseCases.cityFinderUseCase(cityDBFetcher);

    setCities(cities)
    setIsLoading(false)

  }


  return {
    isLoading,
    cities
  }
}