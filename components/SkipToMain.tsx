"use client"
import React from 'react';
import { usePathname } from 'next/navigation'
import Button from '@/components/primitives/Button'


const SkipToMain: React.FC = () => {
  const navigation = usePathname()
  const inEnglish = navigation === '/english'
  const skipTo = (e: React.MouseEvent<HTMLElement>) => {
    (e.target as HTMLElement).blur();
    const mainElement = document.getElementById('mainContent')

    if (mainElement) {
      mainElement.setAttribute('tabIndex', '0')
      mainElement.focus()
    }
  }
  return (
    <Button classNames="button__skip-to-main" onClick={(e) => { skipTo(e) }} {...(inEnglish ? { lang: 'en' } : null)}>{inEnglish ? 'To main content' : 'Till innehållet'}</Button>
  );
};


export default SkipToMain;
