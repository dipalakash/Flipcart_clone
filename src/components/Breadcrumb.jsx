import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function Breadcrumb({ category, subCategory }) {
    return (
        <nav className="flex items-center text-sm text-muted-foreground mb-4">
            <Link href="/" className="hover:text-primary transition-colors">
                Home
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link href="/products" className="hover:text-primary transition-colors">
                Products
            </Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="font-medium text-foreground capitalize">
                {category}
            </span>
            {subCategory && (
                <>
                    <ChevronRight className="h-4 w-4 mx-2" />
                    <span className="font-medium text-foreground capitalize">
                        {subCategory}
                    </span>
                </>
            )}
        </nav>
    );
}
