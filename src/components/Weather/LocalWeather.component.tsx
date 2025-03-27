import useSWR from 'swr'

interface WeatherData {
  type: string;
  temp: string;
  feels_like: string;
  description: string;
}

// Typed fetcher function
const fetcher = (...args: [RequestInfo, RequestInit?]): Promise<WeatherData> =>
  fetch(...args).then((res) => res.json());

export default function LocalWeather() {
  const { data, error } = useSWR<WeatherData>('/api/stats/current-weather', fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
 
  return (
    <div className="max-w-[480px]">
      {`The temperature in Brooklyn ${Math.round(parseFloat(data.temp))}ºC, feels like ${Math.round(parseFloat(data.feels_like))}ºC, and the weather could be described as "${data.description}"`}
    </div>
  )
}