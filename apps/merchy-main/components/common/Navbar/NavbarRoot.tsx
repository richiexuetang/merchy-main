import { PropsWithChildren, useEffect, useState } from 'react';
import throttle from 'lodash.throttle';
import s from './Navbar.module.css';
import cn from 'clsx';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

const NavbarRoot: React.FC<PropsWithChildren<Props>> = ({ children }) => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const offset = 0;
      const { scrollTop } = document.documentElement;
      const scrolled = scrollTop > offset;

      if (hasScrolled !== scrolled) {
        setHasScrolled(scrolled);
      }
    }, 200);

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [hasScrolled]);

  return (
    <nav
      className={cn(s.root, {
        'shadow-magical': hasScrolled,
      })}
    >
      {children}
    </nav>
  );
};

export default NavbarRoot;
