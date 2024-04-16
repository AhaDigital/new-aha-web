"use client"
import React, { useContext, useEffect, useRef, useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { MenuStateContext } from '@/contexts/menuStateContextProvider';
import NavigationData from '@/data/navigation.json';
import Logo from '@/components/primitives/Logo'
import Button from '@/components/primitives/Button';
import IconTranslate from '@/components/primitives/icons/IconTranslate';
import IconHamburger from '@/components/primitives/icons/IconHamburger';
import IconMobile from '@/components/primitives/icons/IconMobile';
import IconClose from '@/components/primitives/icons/IconClose';
import IconChevron from '@/components/primitives/icons/IconChevron';

const Header: React.FC = () => {
  const currentPath = usePathname();

  /** Menu state handler */
  const { isMenuOpen, setIsMenuOpen } = useContext(MenuStateContext);
  // activeEvents check will ensure that focus won't be added to button on page load.
  const [activeEvents, setActiveEvents] = useState(false)

  const buttonRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  // State to track previous pathname
  const [prevPathname, setPrevPathname] = useState<string | null>(null);

  useEffect(() => {
    // Update previous pathname when current pathname changes
    setPrevPathname(currentPath);
  }, [currentPath]);

  useEffect(() => {
    // Close the menu when the route changes
    if (prevPathname && prevPathname !== currentPath) {
      setIsMenuOpen(false);
    }
  }, [prevPathname, currentPath, setIsMenuOpen]);

  useEffect(() => {
    if (isMenuOpen) {
      if (buttonRef.current && navRef.current) {
        navRef.current.setAttribute('tabIndex', '0');
        buttonRef.current.blur();
        navRef.current.focus();
        setActiveEvents(true);
      }
    } else {
      if (activeEvents && buttonRef.current && navRef.current) {
        navRef.current.setAttribute('tabIndex', '-1');
        navRef.current.blur();
        buttonRef.current.focus();
      }
    }

  }, [isMenuOpen, activeEvents]);

  const escHandler = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Escape') {
      setIsMenuOpen(false)
    }
  };

  const [animateLogo, setAnimateLogo] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollPos = window.scrollY || 0;

    if (currentScrollPos > 150 && currentScrollPos > prevScrollPos) {
      // Scrolling down and more than 150px
      setAnimateLogo(true);
    } else {
      // Either scrolling up or not scrolled enough
      setAnimateLogo(false);
    }

    setPrevScrollPos(currentScrollPos);
  }, [prevScrollPos]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  /** Icons */
  interface IconComponentMap {
    [key: string]: React.FC<any> | undefined;
  }

  const iconComponents: IconComponentMap = {
    IconTranslate,
    IconMobile
  };

  let linksCount = 0
  let totalLength = 0
  NavigationData.map(({ navigation }) => {
    if (navigation.includes('main')) {
      totalLength = totalLength + 1;

    }
  })

  return (
    <header className='page-header'>
      <div className='container-large'>
        <div className='page-header__logo'>
          {currentPath === '/' ? (
            <Logo animate={animateLogo} />
          ) : (
            <Link href="/" aria-label='Till startsidan'>
              <Logo animate={animateLogo} />
            </Link>
          )}
        </div>
        <nav role="navigation" aria-label="huvudnavigation">
          <div className='page-header__hamburger'>
            <Button ref={buttonRef} aria-expanded={isMenuOpen} aria-controls="main-navigation" onClick={() => setIsMenuOpen(!isMenuOpen)} hasIcon={true}>
              {isMenuOpen ? <IconClose /> : <IconHamburger />}
              {' '}
              <span>Meny</span>
            </Button>
          </div>
          <div id="main-navigation" ref={navRef} tabIndex={-1} className={`${isMenuOpen ? 'navigation-list-container navigation-list-container--visible' : 'navigation-list-container'}`} onKeyUp={(e) => isMenuOpen && escHandler(e)}>
            <div>
              <ul className='navigation-list navigation-list--top'>
                {
                  NavigationData.map(({ name, uri, icon, navigation }) => {
                    if (navigation.includes('mainTop')) {
                      const IconComponent = iconComponents[icon as keyof IconComponentMap];
                      return (
                        <li key={`mainTop-${name}`} className='navigation-list__nav-item navigation-list__nav-item--top'>
                          <Link href={uri} className={`navigation-list__top-link${currentPath === uri ? ' navigation-list__top-link--current' : ''}`}{...(currentPath === uri ? { "aria-current": "page" } : null)}{...(name === 'English' ? { lang: 'en' } : null)}>
                            {
                              IconComponent && <IconComponent />
                            }
                            <span className='ml-1'>
                              {name}
                            </span>
                          </Link>
                        </li>
                      )
                    }
                  })
                }
              </ul>
            </div>
            <ul className='navigation-list'>
              {
                NavigationData.map(({ name, uri, navigation }, index) => {
                  if (navigation.includes('main')) {
                    linksCount = linksCount + 1
                    return (
                      <li key={`main-${name}`} className='navigation-list__nav-item'>
                        <Link href={uri} className={`navigation-list__link${currentPath === uri ? ' navigation-list__link--current' : ''}`}{...(currentPath === uri ? { "aria-current": "page" } : null)} onBlur={() => totalLength === index - 1 && setIsMenuOpen(false)}>
                          {name}
                          <IconChevron />
                        </Link>
                      </li>
                    )
                  }
                })
              }
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
