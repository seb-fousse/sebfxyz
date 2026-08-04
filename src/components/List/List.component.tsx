import Link from "next/link";
import ListItem from "./ListItem.component";

interface ListItemProps {
  title: string;
  subtitle: string;
  date?: string;
  href: string;
  tags?: string[];
}

interface ListProps {
  items: ListItemProps[];
  maxItems?: number;
  seeMoreLabel?: string;
  seeMoreHref?: string;
  expandedListItems?: boolean;
}

export default function List({ items, maxItems, seeMoreLabel, seeMoreHref, expandedListItems }: ListProps) {

  const listItems = maxItems ? items.slice(0, maxItems) : items;
  const showSeeMore = seeMoreLabel && seeMoreHref && listItems.length < items.length;

  const seeMore = showSeeMore ? (
    <div className="py-1">
      <Link href={seeMoreHref} className="text-primary font-mono hover:underline">
        {seeMoreLabel}
      </Link>
    </div>
  ) : null;
  
  return (
    <div>
      {listItems.map((item, index) => (
        <ListItem
          title={item.title}
          subtitle={item.subtitle}
          href={item.href}
          tags={item.tags}
          key={index}
          expanded={expandedListItems}
        />
      ))}
      {seeMore}
    </div>
  );
};
