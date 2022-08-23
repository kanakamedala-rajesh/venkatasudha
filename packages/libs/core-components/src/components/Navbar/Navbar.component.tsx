import { useState } from 'react';
import { FaCode } from 'react-icons/fa';
import { MdGridView } from 'react-icons/md';
import { useWindowScroll } from 'react-use';
import { SafeHydrate } from '../../utils';
import Icon from '../Icon/Icon.component';
import NetworkConnection from '../NetworkConnection/NetworkConnection.component';

export interface NavbarProps {
  children: React.ReactNode;
  iconString: string;
}

export function Navbar(props: NavbarProps) {
  const { y } = useWindowScroll();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header
      className={`bg-background text-onBackground fixed z-50 flex h-8 w-full transform items-center justify-between py-8 px-2 duration-300 lg:h-32 lg:px-12 lg:py-0 ${
        y > 128 && 'shadow-onBackground/40 shadow-lg lg:h-16'
      }`}
    >
      <Icon icon={FaCode} name={props.iconString} linkURL="/" />
      <nav>
        <button
          id="mobile-menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden"
        >
          <MdGridView className="text-primary h-8 w-8" />
        </button>
        <ul
          className={`bg-background/90 fixed left-0 right-0 mt-7 flex min-h-screen translate-x-full transform flex-col items-center justify-start space-y-8 overflow-y-scroll text-center transition duration-300 lg:relative lg:mt-0 lg:min-h-0 lg:translate-x-0 lg:flex-row lg:space-y-0 lg:space-x-6 lg:p-0
          ${mobileMenuOpen && 'translate-x-0'}`}
        >
          {props.children}
        </ul>
      </nav>
      <div className="flex flex-col items-center justify-center space-y-4">
        <SafeHydrate>
          <NetworkConnection />
        </SafeHydrate>
        {/* <ThemeToggle /> */}
      </div>
    </header>
  );
}

export default Navbar;
