// components/Breadcrumb.tsx
import React from 'react';
import { usePathname } from 'next/navigation';
import { BreadcrumbLink } from '@/types/BreadcrumbLink';
import Link from 'next/link';



interface BreadcrumbProps {
  pageName: string;
  links: BreadcrumbLink[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ pageName, links }) => {

  return (
    <nav className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between mb-6">
      <h2 className="text-title-md2 font-semibold text-black dark:text-white">
        {pageName}
      </h2>
      <ol className="flex items-center gap-2">
        {links.map((breadcrumb, index) => (
          <li key={index}>
            {breadcrumb.path ? (
              <Link
                href={breadcrumb.path}
                className={`font-medium ${breadcrumb.active ? 'text-primary' : 'text-black dark:text-white'}`}
              >
                {breadcrumb.name}
                {index < links.length - 1 && <span className="mx-1">/</span>}
              </Link>
            ) : (
              <span className="font-medium text-primary">
                {breadcrumb.name}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
