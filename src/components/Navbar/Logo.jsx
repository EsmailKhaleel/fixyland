import LogoImg from '../../assets/Logo.svg';

function Logo({ isSticky = false }) {
    return (
        <div className={`w-85 ${isSticky ? 'h-24' : 'h-28'} flex items-center`}>
            <div className={`logo-shape w-full h-full flex items-center pl-4 pr-20 bg-white`}>
                <img src={LogoImg} alt="Fixyland" className="h-4/5 w-11/12" />
            </div>
        </div>
    )
}

export default Logo