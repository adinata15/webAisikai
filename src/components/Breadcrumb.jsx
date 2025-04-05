import { useLocation, Link } from 'react-router-dom';
import BreadcrumbImage from '../assets/images/bcimage.jpg';

const Breadcrumb = ({pageName}) => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <section className='w-full'>
            <div className='py-10 flex flex-col justify-center items-center bg-cover bg-center gap-2'
                style={{backgroundImage: `url(${BreadcrumbImage}`, backgroundSize: 'cover'}}>
                    <h3 className='font-bold text-2xl text-white'>{pageName}</h3>
                    <nav className="p-4 text-white font-medium">
                        <ul className="flex items-center gap-2 text-sm">
                            <li>
                                <Link to="/home" className="text-white font-medium hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <span className='text-xs'>/</span>
                            </li>
                            {pathnames.map((pathname, index) => {
                                const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                                return (
                                    <li key={index}>
                                        <Link to={routeTo} className="text-white font-medium hover:underline">
                                            {pathname.charAt(0).toUpperCase() + pathname.slice(1)}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
            </div>
        </section>
    );
};

export default Breadcrumb;