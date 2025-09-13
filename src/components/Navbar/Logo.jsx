import LogoImg from '../../assets/Logo.svg';

function Logo({ isSticky = false }) {
    return (
        <div className={`w-85 self-start
        ${isSticky ? 'h-16 sm:h-20 md:h-24' : 'h-20 sm:h-24 md:h-26'} 
        flex items-center`}
        >
            <div className={`logo-shape w-full h-full flex items-center pl-2 sm:pl-3 md:pl-4 pr-8 sm:pr-12 md:pr-16 bg-white`}>
                <img src={LogoImg} alt="Fixyland" className="h-full w-full object-fill" />
            </div>
        </div>
    )
}

export default Logo