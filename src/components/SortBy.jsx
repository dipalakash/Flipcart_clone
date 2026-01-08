"use client";

import { ChevronDown } from "lucide-react";

export default function SortBy({ currentSort, onSortChange }) {
    return (
        <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Sort By</span>
            <div className="relative">
                <select
                    value={currentSort}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="h-10 w-[180px] appearance-none rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                >
                    <option value="popularity">Popularity</option>
                    <option value="price_low_high">Price -- Low to High</option>
                    <option value="price_high_low">Price -- High to Low</option>
                    <option value="newest">Newest First</option>
                </select>
                <ChevronDown className="absolute right-3 top-3 h-4 w-4 opacity-50 pointer-events-none" />
            </div>
        </div>
    );
}
