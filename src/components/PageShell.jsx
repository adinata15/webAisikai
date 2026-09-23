import Header from "./Header";
import Footer from "./Footer";
import SideContact from "./SideContact";

const PageShell = ({ children, className = "" }) => (
  <div className={`font-primary m-0 p-0 box-border bg-background text-foreground ${className}`}>
    <a href="#main-content" className="skip-link">
      Skip to main content
    </a>
    <SideContact />
    <Header />
    <main id="main-content" tabIndex={-1} className="pb-20 xl:pb-0">
      {children}
    </main>
    <Footer />
  </div>
);

export default PageShell;
