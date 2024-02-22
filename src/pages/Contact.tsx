// Modules
import { useEffect } from "react";
import { ErrorBoundary } from "react-error-boundary";

// Icons
import bg from "../icons/green-bg.svg";

// Components
import ContactForm from "../components/contact/ContactForm";
import Map from "../components/global/Map";
import EmptyState from "../components/global/EmptyState";

const Contacts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ErrorBoundary fallback={<EmptyState page={true} />}>
      <main className="contact">
        <div className="contact-bg">
          <img src={bg} alt="" />
        </div>
        <div className="container">
          <div className="contact-inner">
            <ErrorBoundary fallback={<EmptyState />}>
              <ContactForm />
            </ErrorBoundary>
            <ErrorBoundary fallback={<EmptyState />}>
              <Map />
            </ErrorBoundary>
          </div>
        </div>
      </main>
    </ErrorBoundary>
  );
};

export default Contacts;
