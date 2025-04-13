import Link from "next/link";

interface Props {
  href: string;
  className: string;
}

export default function BackButton({ href, className }: Props) {
  return (
    <Link
      className={`${className} text-xl sm:text-3xl hover:no-underline text-foreground font-extralight`}
      href={href}
      scroll={false}
    >
      &larr;
    </Link>
  )
}