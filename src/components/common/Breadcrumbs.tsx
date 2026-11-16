import React from "react";
import Link from "next/link";
import { ChevronLeft, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="مسار التنقل" className="py-3 px-1">
      <ol className="flex items-center flex-wrap gap-2 text-xs text-charcoal-500 font-ibm">
        <li className="flex items-center gap-1.5">
          <Link
            href="/"
            className="hover:text-forest-700 transition-colors flex items-center gap-1"
          >
            <Home size={13} className="text-forest-600" />
            <span>الرئيسية</span>
          </Link>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={index} className="flex items-center gap-2">
              <ChevronLeft size={12} className="text-sage-400 rtl:rotate-0" />
              {isLast || !item.href ? (
                <span
                  className="text-forest-800 font-semibold truncate max-w-[200px] sm:max-w-none"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-forest-700 transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
