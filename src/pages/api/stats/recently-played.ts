import { NextApiRequest, NextApiResponse } from 'next';

// Define interfaces for Spotify API response
interface SpotifyImage {
  url: string;
  height: number;
  width: number;
}

interface SpotifyArtist {
  name: string;
}

interface SpotifyTrack {
  name: string;
  artists: SpotifyArtist[];
  external_urls: { spotify: string };
  album: { images: SpotifyImage[] };
}

interface SpotifyRecentlyPlayedItem {
  track: SpotifyTrack;
}

interface SpotifyRecentlyPlayedResponse {
  items: SpotifyRecentlyPlayedItem[];
}

// Define expected response for frontend
interface Track {
  title: string;
  artist: string;
  href: string;
  coverImage: SpotifyImage;
}

// Function to get Spotify access token
async function getAccessToken(): Promise<{ access_token: string }> {
  const refresh_token: string | undefined = process.env.SPOTIFY_REFRESH_TOKEN;

  if (!refresh_token) {
    throw new Error("Missing Spotify refresh token");
  }

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(
        `${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`
      ).toString("base64")}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: refresh_token,
    }).toString(),
  });

  return response.json();
}

// Function to fetch recently played tracks
async function recentlyPlayed(limit: number = 1): Promise<Response> {
  const { access_token } = await getAccessToken();
  const url = new URL("https://api.spotify.com/v1/me/player/recently-played");
  url.searchParams.append("limit", limit.toString());

  return fetch(url, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
}

// Next.js API Route Handler
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const response = await recentlyPlayed(); // Fetch recently played track(s)

      if (!response.ok) {
        return res
          .status(response.status)
          .json({ error: `Error: ${response.status} ${response.statusText}` });
      }

      const { items }: SpotifyRecentlyPlayedResponse = await response.json(); // Type response correctly

      if (!items || items.length === 0) {
        return res
          .status(500)
          .json({ error: "Failed to retrieve recently played items" });
      }

      const tracks: Track[] = items.map(({ track }) => ({
        title: track.name,
        artist: track.artists.map((artist) => artist.name).join(", "),
        href: track.external_urls.spotify,
        coverImage: track.album.images[1], // Using the second image in array
      }));

      console.log("Success fetching recently played tracks");
      return res.status(200).json(tracks);
    } catch (error) {
      console.error(
        "Error fetching recently played tracks:",
        (error as Error).message
      );
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
