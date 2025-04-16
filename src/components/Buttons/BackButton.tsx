import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface Props {
  href: string;
  className: string;
}

export default function BackButton({ href, className }: Props) {
  return (
    <Link
      className={className}
      href={href}
      scroll={false}
    >
      <ArrowLeft className="hover:text-primary"/>
    </Link>
  )
}