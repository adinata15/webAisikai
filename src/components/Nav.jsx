import Footer from "./Footer";

const Nav = ({linkToNav}) => {
    return(
        <section className="flex flex-col xl:flex-row">
            {linkToNav.map((item, index) => (
                <div key={index} className="my-6 xl:font-medium ">
                    <a href={item.href} className="mx-4 2xl:mx-6 text-lg 2xl:text-lg">{item.label}</a>
                </div>
            ))}
        </section>

        
    )
}

export default Nav;