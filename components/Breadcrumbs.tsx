"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

const Breadcrumbs: React.FC = () => {
  const paths = usePathname()
  const pathNames = paths.split('/').filter(path => path)
  return pathNames.length > 0 ? (

    <nav aria-label='Länkstig från startsidan' className='container'>
      <ul className='breadcrumb'>
        <li>
          <Link href="/">Start</Link>
        </li>
        {
          pathNames.map((link, index) => {
            const href = `/${pathNames.slice(0, index + 1).join('/')}`

            let linkName = ''
            switch (link) {
              // Add all links with swedish chars and other links that doesn't match the menu.
              case 'tjanster':
                linkName = 'Tjänster';
                break;
              case 'universell-utformning-och-tillganglighet':
                linkName = 'Tillgänglighet';
                break;
              default:
                const ln = link.replace(/-/g, ' ')
                linkName = ln[0].toUpperCase() + ln.slice(1, link.length);
                break;
            }



            return (
              <React.Fragment key={index}>
                <li>
                  {index < pathNames.length - 1 ? (
                    <Link href={href}>{linkName}</Link>
                  ) : (
                    <span aria-current="page">{linkName}</span>
                  )}
                </li>
              </React.Fragment>
            )
          })
        }

      </ul>
    </nav>
  ) : null
};

export default Breadcrumbs;
