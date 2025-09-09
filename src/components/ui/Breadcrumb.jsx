import { Link, useLocation } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    //   filter(x => x) is a shorthand for filter(x => x !== "")
    console.log("pathnames", pathnames);
    console.log("location", location);


    return (
        <nav aria-label="breadcrumb" className="py-4">
            <ol className="flex items-center space-x-2">
                <li className="inline-flex items-center">
                    <Link
                        to="/"
                        className="text-white hover:text-secondary focus:text-secondary active:text-secondary transition-colors"
                    >
                        Home
                    </Link>
                </li>
                {pathnames.map((name, index) => {
                    const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const isLast = index === pathnames.length - 1;

                    return (
                        <li key={name} className="inline-flex items-center space-x-2 text-base">
                            <IoIosArrowForward className="text-gray-400" />
                            {isLast ? (
                                <span className="text-secondary font-medium capitalize cursor-text">
                                    {name.replace(/-/g, ' ')}
                                </span>
                            ) : (
                                <Link
                                    to={routeTo}
                                    className="text-white hover:text-secondary focus:text-secondary active:text-secondary transition-colors capitalize"
                                >
                                    {name.replace(/-/g, ' ')}
                                </Link>
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
}

export default Breadcrumb;
