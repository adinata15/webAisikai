import { useLocation, Link } from 'react-router-dom';
import BreadcrumbImage from '../assets/images/breadcrumbimage.webp';

const Breadcrumb = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    return (
        <section className='w-full'>
            <div className='py-6 flex flex-col justify-center items-center bg-cover bg-center'
                style={{backgroundImage: `url(${BreadcrumbImage})` }}>
                    <h3 className='font-bold text-2xl text-white'>Products</h3>
                    <nav className="bg-gray-100 p-4 rounded-lg">
                        <ul className="flex items-center gap-2 text-sm">
                            <li>
                                <Link to="/home" className="text-primary font-medium hover:underline">
                                    Home
                                </Link>
                            </li>
                            {pathnames.map((value, index) => {
                                const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                                const isLast = index === pathnames.length - 1;

                                return (
                                    <li key={to} className="flex items-center gap-2">
                                        <span>/</span>
                                        {isLast ? (
                                            <span className="text-gray-500">{value.replace('-', ' ')}</span>
                                        ) : (
                                            <Link to={to} className="text-primary font-medium hover:underline">
                                                {value.replace('-', ' ')}
                                            </Link>
                                        )}
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