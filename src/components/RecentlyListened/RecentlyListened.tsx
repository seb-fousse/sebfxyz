import useSWR from "swr";
import Image from "next/image";

const fetcher = (...args: [RequestInfo, RequestInit?]) =>
  fetch(...args).then((res) => res.json());

export default function RecentlyListened() {
  const { data, error } = useSWR("/api/stats/recently-played", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex">
      <Image
        src={data[0].coverImage.url}
        alt={`Album cover for ${data[0].artist} - ${data[0].title}`}
        width={80}
        height={80}
      />
      <div className="pl-2 flex flex-col justify-between">
        <div>
          <div className="font-black">{data[0].title}</div>
          <div className="font-base">{data[0].artist}</div>
        </div>
        <h4 className="text-xs font-extralight italic">
          My most recently played track
        </h4>
      </div>
    </div>
  );
}
