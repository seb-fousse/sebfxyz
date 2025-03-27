import { NextApiRequest, NextApiResponse } from 'next';

interface WeatherData {
  coord: { lon: number; lat: number };
  temp: number;
  feels_like: number;
  type: string;
  description: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const apiKey: string | undefined = process.env.OPENWEATHER_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "API key is missing" });
    }

    const url = new URL("https://api.openweathermap.org/data/2.5/weather");
    url.searchParams.append("q", "Brooklyn");
    url.searchParams.append("appid", apiKey);
    url.searchParams.append("units", "metric");

    try {
      const response = await fetch(url);

      if (!response.ok) {
        return res
          .status(response.status)
          .json({ error: `Error: ${response.status} ${response.statusText}` });
      }

      const weatherData = await response.json();
      const dataTrimmed: WeatherData = {
        coord: weatherData.coord,
        temp: weatherData.main.temp,
        feels_like: weatherData.main.feels_like,
        type: weatherData.weather[0].main,
        description: weatherData.weather[0].description,
      };

      console.log("Success fetching weather");
      return res.status(200).json(dataTrimmed);
    } catch (error) {
      console.error("Error fetching weather:", (error as Error).message);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}