import React from 'react';
import Link from 'next/link';

interface AsideProps {
  children: React.ReactNode | React.ReactNode[]
  inEnglish?: boolean
}
const Aside: React.FC<AsideProps> = ({ children, inEnglish }) => {

  return (
    <aside className='aside'>
      <div className='aside__content'>
        <h2 className='heading heading--md'>{inEnglish ? 'On this page' : 'På denna sida'}</h2>
        {children}
      </div>
      <div className='aside__contact' aria-hidden>
        <p className='text text--md'>
          {inEnglish ? (
            <>
              <span>Let me know if you need any help.</span><Link href="mailto:hej@ahadigital.se">hej@ahadigital.se</Link>
            </>
          ) : (
            <>
              <span>Behöver ni hjälp med något?</span><Link href="/kontakt">Kontakta mig</Link>
            </>
          )}
        </p>
      </div>
    </aside>
  );
};


export default Aside;
