import LogoImg from '../../assets/Logo.svg';
import WhiteLogo from '../../assets/logo-white.svg';

function Logo({ isSticky = false, isHome2 = false }) {
  const logoSrc = isSticky
    ? LogoImg
    : isHome2
    ? WhiteLogo
    : LogoImg;

  const bgClass = isSticky
    ? 'bg-transparent'
    : isHome2
    ? 'bg-transparent'
    : 'bg-white';

  return (
    <div
      className={`w-85 self-start 
        ${isSticky ? 'h-16 sm:h-20' : 'h-20 sm:h-24 md:h-26'} 
        flex items-center`}
    >
      <div
        className={`logo-shape w-full h-full flex items-center 
          pl-2 sm:pl-3 md:pl-4 pr-8 sm:pr-12 md:pr-16 pb-2 sm:pb-3
          ${bgClass}`}
      >
        <img
          src={logoSrc}
          alt="Fixyland"
          className="h-full w-full object-fill flex-shrink-0"
        />
      </div>
    </div>
  );
}

export default Logo;
