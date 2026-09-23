import { useLocation, Link } from "react-router-dom";
import BreadcrumbImage from "../assets/images/bcimage.jpg";
import { catalog } from "../catalog/catalog.js";

const LABEL_OVERRIDES = {
    "about-us": "About Us",
    "contact-us": "Contact Us",
    "gallery": "Gallery",
    "company-profile": "Company Profile",
    certificate: "Certificates",
    products: "Products",
    catalogue: "Catalogue",
};

function crumbLabel(segment, index, pathnames) {
    if (LABEL_OVERRIDES[segment]) {
        return LABEL_OVERRIDES[segment];
    }

    if (pathnames[0] === "products" && index === 1 && /^\d+$/.test(segment)) {
        const product = catalog.getProductById(segment);
        return product?.name ?? segment;
    }

    return segment
        .split("-")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");
}

const Breadcrumb = ({ pageName }) => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter(Boolean);

    return (
        <section className="w-full">
            <div
                className="relative py-16 flex flex-col justify-center items-center bg-cover bg-center"
                style={{ backgroundImage: `url(${BreadcrumbImage})`, backgroundSize: "cover" }}
            >
                <div
                    className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/70 to-slate-950/85"
                    aria-hidden="true"
                />
                <div className="relative z-10 flex flex-col items-center gap-2 px-6 text-center">
                    <h1 className="font-bold text-3xl md:text-4xl xl:text-5xl text-white">{pageName}</h1>
                    <nav className="text-slate-100 font-medium" aria-label="Breadcrumb">
                        <ol className="flex flex-wrap items-center justify-center gap-2 text-sm">
                            <li>
                                <Link to="/" className="text-white font-medium hover:underline rounded-sm">
                                    Home
                                </Link>
                            </li>
                            {pathnames.map((pathname, index) => {
                                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
                                const label = crumbLabel(pathname, index, pathnames);
                                const isLast = index === pathnames.length - 1;

                                return (
                                    <li key={routeTo} className="flex items-center gap-2 min-w-0">
                                        <span className="text-xs text-slate-200" aria-hidden="true">/</span>
                                        {isLast ? (
                                            <span className="truncate text-white" aria-current="page" translate="no">
                                                {label}
                                            </span>
                                        ) : (
                                            <Link to={routeTo} className="text-white font-medium hover:underline rounded-sm truncate" translate="no">
                                                {label}
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    );
};

export default Breadcrumb;
