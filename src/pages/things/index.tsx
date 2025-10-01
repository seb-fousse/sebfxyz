import { useState, useMemo, useEffect } from "react";

// Components
import Section from "@/components/Basic/Section.component";
import List from "@/components/List/List.component";
import CustomHead from "@/components/CustomHead/CustomHead.component";
import BackButton from "@/components/Buttons/BackButton";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Layout from "@/components/Layout/Layout.component";

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
  const [resultsText, setResultsText] = useState<string>("");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    myThingItems.forEach((item: ThingItem) => {
      item.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  const filteredItems = useMemo(() => {
    if (selectedTags.length === 0) {
      return myThingItems;
    }
    
    if (filterLogic === "and") {
      // AND filter logic
      return myThingItems.filter((item: ThingItem) =>
        selectedTags.every(tag => item.tags.includes(tag))
      );
    } else {
      // OR filter logic
      return myThingItems.filter((item: ThingItem) =>
        selectedTags.some(tag => item.tags.includes(tag))
      );
    }
  }, [selectedTags, filterLogic]);

  useEffect(() => {
    const showingXofYItems = `Showing ${filteredItems.length} of ${myThingItems.length} items`;
    if (selectedTags.length === 1) {
      const matchingSingleTag = 'matching the 1 selected tag';
      setResultsText(`${showingXofYItems} ${matchingSingleTag}`);
    }
    else if (selectedTags.length > 1) {
      const matchingXofYTags = `matching ${filterLogic === "and" ? "all" : "any"} of the ${selectedTags.length} selected tags`;
      setResultsText(`${showingXofYItems} ${matchingXofYTags}`);
    }
    else {
      setResultsText(showingXofYItems);
    }
  }, [filteredItems, selectedTags, filterLogic]);

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
    <>
      <CustomHead 
        title="Things - Seb Fousse" 
        description="A collection of my projects, work, art, hobbies, and more." 
        url="https://sebf.xyz/things" 
      />

      <Layout showHomeLink={true}>
        {/* Fixed components */}
        <BackButton className="fixed top-5 left-5 z-10" href={'/'} />

        {/* Main section */}
        <Section id="things" heading="*things" className="pb-2">
          <div className="px-9 pt-4 pb-8">
            
            {/* Filter section */}
            <div className="mb-8">

              {/* Filter logic toggle */}
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

              {/* Clear filters and results count */}
              {selectedTags.length > 0 && (
                <div className="flex items-center gap-4">
                  <button
                    onClick={clearFilters}
                    className="text-sm text-muted-foreground hover:text-primary underline transition-all duration-200"
                  >
                    Clear all filters
                  </button>
                  <div className="text-sm text-muted-foreground">
                    {resultsText}
                  </div>
                </div>
              )}
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
      </Layout>
    </>
  );
}
