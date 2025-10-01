import { useState, useMemo } from "react";
import Link from "next/link";

// Components
import Section from "@/components/Basic/Section.component";
import List from "@/components/List/List.component";
import CustomHead from "@/components/CustomHead/CustomHead.component";
import BackButton from "@/components/Buttons/BackButton";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import ThemeToggle from "@/components/ThemeToggle/ThemeToggle.component";

// Constants
import myThingItems from "@/constants/myThings.json";

// Icons
import { SquaresIntersect, SquaresUnite } from 'lucide-react';

// Types
interface ThingItem {
  title: string;
  subtitle: string;
  href: string;
  tags: string[];
}

export default function Things() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [filterLogic, setFilterLogic] = useState<string>("or");

  // Get all unique tags from the items
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    myThingItems.forEach((item: ThingItem) => {
      item.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter items based on selected tags
  const filteredItems = useMemo(() => {
    if (selectedTags.length === 0) {
      return myThingItems;
    }
    
    if (filterLogic === "and") {
      // AND logic
      return myThingItems.filter((item: ThingItem) =>
        selectedTags.every(tag => item.tags.includes(tag))
      );
    } else {
      // OR logic
      return myThingItems.filter((item: ThingItem) =>
        selectedTags.some(tag => item.tags.includes(tag))
      );
    }
  }, [selectedTags, filterLogic]);

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <div>
      <CustomHead 
        title="Things - Seb Fousse" 
        description="A collection of my projects, work, art, hobbies, and more." 
        url="https://sebf.xyz/things" 
      />

      <div className="max-w-7xl m-auto">
        {/* Fixed components */}
        <BackButton className="fixed top-5 left-5 z-10" href={'/'} />
        <ThemeToggle className="fixed top-5 right-5 z-10"/>

        {/* Main section */}
        <Section id="things" heading="*things" className="pb-2">
          <div className="px-9 pt-4 pb-8">
            
            {/* Filter section */}
            <div className="mb-8">
              <div className="flex items-center justify-between pb-4">
                <h4 className="text-2xl font-bold italic">Filter by tags</h4> 
                <ToggleGroup
                  type="single" 
                  size="sm"
                  value={filterLogic} 
                  onValueChange={(value) => setFilterLogic(value || "or")}
                >
                  <ToggleGroupItem value="or" aria-label="Show items with OR selected tag" className="text-sm">
                    <SquaresUnite className="h-4 w-4" /> OR
                  </ToggleGroupItem>
                  <ToggleGroupItem value="and" aria-label="Show items with AND selected tags">
                    <SquaresIntersect className="h-4 w-4" /> AND
                  </ToggleGroupItem>
                </ToggleGroup>
              </div>
              
              {/* Filter pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-3 py-1 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
                      selectedTags.includes(tag)
                        ? 'bg-primary border-primary text-background'
                        : 'bg-background border-primary text-foreground hover:text-primary'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-4">
                {/* Clear filters button */}
                {selectedTags.length > 0 && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-muted-foreground hover:text-primary underline transition-all duration-200"
                  >
                    Clear all filters
                  </button>
                )}

                {/* Results count */}
                <div className="text-sm text-muted-foreground">
                  Showing {filteredItems.length} of {myThingItems.length} items
                  {selectedTags.length > 0 && (
                    <span>
                      {' '}matching {filterLogic === "and" ? "all" : "any"} of the {selectedTags.length} selected tag{selectedTags.length > 1 ? 's' : ''} 
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Items list */}
            <div>
              {filteredItems.length > 0 ? (
                <List items={filteredItems} />
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No items match the selected filters.</p>
                  <button
                    onClick={clearFilters}
                    className="mt-2 text-primary hover:underline"
                  >
                    Clear filters to see all items
                  </button>
                </div>
              )}
            </div>
          </div>
        </Section>

        {/* Footer */}
        <footer className="w-full py-8 flex justify-center">
          <div className="flex space-x-6 text-primary">
            <Link href="/">Home</Link>
            <a href="mailto:me@sebf.xyz">Email</a>
            <a
              href="https://github.com/seb-fousse"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/sebastien-fousse"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/sebf.xyz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
