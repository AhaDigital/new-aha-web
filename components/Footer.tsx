"use client"

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import NavigationData from '@/data/navigation.json'
import IconInsta from '@/components/primitives/icons/IconInsta';
import IconLinkedIn from '@/components/primitives/icons/IconLinkedIn';
import IconGitHub from '@/components/primitives/icons/IconGitHub';
import IconChevron from '@/components/primitives/icons/IconChevron';


const Footer: React.FC = () => {

  const currentPath = usePathname()
  return (
    <footer className='page-footer'>
      <nav aria-label="Sidfotsnavigation" className='container'>
        <ul className='page-footer__navigation'>
          {
            NavigationData.map(({ name, uri, navigation }) => {
              if (navigation.includes('footer')) {
                return (
                  <li key={`footer-${name}`}>
                    <Link href={uri} className={`page-footer__link page-footer__link${currentPath === uri ? '--current' : ''}`}{...(currentPath === uri ? { "aria-current": "page" } : null)}>
                      <span className='ml-1'>
                        {name}
                      </span>
                      <IconChevron />
                    </Link>
                  </li>
                )
              }
            })
          }
        </ul>
      </nav>
      <section className='page-footer__social'>
        <div className='container'>
          <p className='page-footer__social-content'>
            Följ mig på sociala medier{' '}
            <Link href="https://www.instagram.com/ahadigital.se/" aria-label='Aha digital AB på Instagram'>
              {
                <IconInsta />
              }
            </Link>
            {' '}
            <Link href="https://www.linkedin.com/in/tatsumisuzuki/" aria-label='Min LinkedIn-profil'>
              {
                <IconLinkedIn />
              }
            </Link>
            <Link href="https://github.com/AhaDigital" aria-label='Min GitHub-profil'>
              {
                <IconGitHub />
              }
            </Link>
          </p>
        </div>
      </section>
    </footer>
  );
};


export default Footer;
