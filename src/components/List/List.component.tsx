import { ArrowRight } from "lucide-react";
import ListItem from "./ListItem.component";
import Link from "next/link";

interface ListItemProps {
  title: string;
  subtitle: string;
  date?: string;
  href: string;
}

interface ListProps {
  items: ListItemProps[];
  maxItems?: number;
  seeMoreLabel?: string;
  seeMoreHref?: string;
}

export default function List({ items, maxItems, seeMoreLabel, seeMoreHref }: ListProps) {

  return (
    <div>
      {(maxItems ? items.slice(0, maxItems) : items).map((item, index) => (
        <ListItem
          title={item.title}
          subtitle={item.subtitle}
          href={item.href}
          key={index}
        />
      ))}
    </div>
  );
};
