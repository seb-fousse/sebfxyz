import { useState, useMemo } from "react";
import Link from "next/link";

// Components
import Section from "@/components/Basic/Section.component";
import List from "@/components/List/List.component";
import CustomHead from "@/components/CustomHead/CustomHead.component";
import BackButton from "@/components/Buttons/BackButton";

// Constants
import myThingItems from "@/constants/myThings.json";

// Types
interface ThingItem {
  title: string;
  subtitle: string;
  href: string;
  tags: string[];
}

export default function Things() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [useAndLogic, setUseAndLogic] = useState(false); // false = OR logic, true = AND logic

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
    
    if (useAndLogic) {
      // AND logic: item must have ALL selected tags
      return myThingItems.filter((item: ThingItem) =>
        selectedTags.every(tag => item.tags.includes(tag))
      );
    } else {
      // OR logic: item must have ANY of the selected tags
      return myThingItems.filter((item: ThingItem) =>
        selectedTags.some(tag => item.tags.includes(tag))
      );
    }
  }, [selectedTags, useAndLogic]);

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
        {/* Back button */}
        <div className="p-4">
          <BackButton href="/" className="" />
        </div>

        {/* Main section */}
        <Section id="things" heading="*things" className="pb-2">
          <div className="px-9 pt-4 pb-8">
            {/* Filter section */}
            <div className="mb-8">
              <h4 className="text-2xl font-bold italic pb-4">Filter by tags</h4>
              
              {/* Logic toggle */}
              <div className="mb-4 p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Filter logic:</span>
                  <button
                    onClick={() => setUseAndLogic(!useAndLogic)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      useAndLogic ? 'bg-primary' : 'bg-muted'
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        useAndLogic ? 'translate-x-6' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span className={!useAndLogic ? 'text-primary font-medium' : ''}>
                    OR - Show items with ANY selected tag
                  </span>
                  <span className={useAndLogic ? 'text-primary font-medium' : ''}>
                    AND - Show items with ALL selected tags
                  </span>
                </div>
              </div>
              
              {/* Filter pills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {allTags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border-2 transition-all duration-200 ${
                      selectedTags.includes(tag)
                        ? 'bg-primary border-primary text-primary-foreground'
                        : 'bg-muted text-muted-foreground hover:bg-muted/80'
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Clear filters button */}
              {selectedTags.length > 0 && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-muted-foreground hover:text-foreground underline"
                >
                  Clear all filters
                </button>
              )}

              {/* Results count */}
              <div className="mt-4 text-sm text-muted-foreground">
                Showing {filteredItems.length} of {myThingItems.length} items
                {selectedTags.length > 0 && (
                  <span>
                    {' '}matching {selectedTags.length} selected tag{selectedTags.length > 1 ? 's' : ''} 
                    {' '}({useAndLogic ? 'ALL' : 'ANY'} logic)
                  </span>
                )}
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
