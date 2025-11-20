import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export default function RecentlyListened() {
  const { data, error } = useSWR("/api/stats/recently-played", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data || data.length === 0) return <div>Loading...</div>;

  const recentlyPlayed = data[0];

  return (
    <div className="flex">
      {recentlyPlayed.coverImage && recentlyPlayed.coverImage.url && (
        <Image
          src={recentlyPlayed.coverImage.url}
          alt={`Album cover for ${recentlyPlayed.artist} - ${recentlyPlayed.title}`}
          width={80}
          height={80}
        />
      )}
      <div className="pl-2 flex flex-col justify-between">
        <div>
          <div className="font-black">{recentlyPlayed.title}</div>
          <div className="font-base">{recentlyPlayed.artist}</div>
        </div>
        <h4 className="text-xs font-extralight italic">
          My most recently played track
        </h4>
      </div>
    </div>
  );
}
