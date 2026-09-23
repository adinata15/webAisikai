import { useEffect, useCallback, useRef, useState } from "react";

import PageShell from "../components/PageShell";
import Breadcrumb from "../components/Breadcrumb";

import Cert1 from "../assets/images/cert1.webp";
import Cert2 from "../assets/images/cert2.webp";
import Cert3 from "../assets/images/cert3.webp";
import Cert4 from "../assets/images/cert4.webp";
import Cert5 from "../assets/images/cert5.webp";
import Cert6 from "../assets/images/cert6.webp";
import Cert7 from "../assets/images/cert7.webp";
import Cert8 from "../assets/images/cert8.webp";
import Cert9 from "../assets/images/cert9.webp";
import Cert10 from "../assets/images/cert10.webp";
import Cert11 from "../assets/images/cert11.webp";
import Cert12 from "../assets/images/cert12.webp";
import Cert13 from "../assets/images/cert13.webp";
import Cert14 from "../assets/images/cert14.webp";
import Cert15 from "../assets/images/cert15.webp";
import Cert16 from "../assets/images/cert16.webp";
import Cert17 from "../assets/images/cert17.webp";
import Cert18 from "../assets/images/cert18.webp";
import Cert19 from "../assets/images/cert19.webp";
import Cert20 from "../assets/images/cert20.webp";

const CERTIFICATES = [
    Cert1, Cert2, Cert3, Cert4, Cert5, Cert6, Cert7, Cert8, Cert9, Cert10,
    Cert11, Cert12, Cert13, Cert14, Cert15, Cert16, Cert17, Cert18, Cert19, Cert20,
];

const FOCUSABLE = 'button:not([disabled]), [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

const Certificates = () => {
    const [popup, setPopup] = useState(null);
    const closeButtonRef = useRef(null);
    const lastFocusRef = useRef(null);

    const openPopup = (image, label, trigger) => {
        lastFocusRef.current = trigger;
        setPopup({ image, label });
    };

    const closePopup = useCallback(() => {
        setPopup(null);
        lastFocusRef.current?.focus();
    }, []);

    useEffect(() => {
        if (!popup) return undefined;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeButtonRef.current?.focus();

        const onKeyDown = (event) => {
            if (event.key === "Escape") {
                event.preventDefault();
                closePopup();
                return;
            }

            if (event.key !== "Tab") return;

            const dialog = document.getElementById("certificate-dialog");
            if (!dialog) return;

            const focusable = [...dialog.querySelectorAll(FOCUSABLE)];
            if (focusable.length === 0) return;

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [popup, closePopup]);

    return (
        <PageShell>
            <Breadcrumb pageName="Certificates" />

            <div className="flex flex-col py-12 gap-12 xl:gap-24 xl:px-24 3xl:px-60">
                <div className="flex flex-col justify-center items-center gap-4 xl:gap-8 px-6 xl:px-24">
                    <h2 className="font-bold text-2xl xl:text-4xl">Our Honor</h2>
                    <div className="section-rule" aria-hidden="true" />

                    <ul className="flex flex-col xl:flex-row xl:flex-wrap gap-2 xl:gap-6 justify-center items-center list-none p-0 m-0">
                        {CERTIFICATES.map((cert, index) => {
                            const label = `AISIKAI certificate ${index + 1}`;
                            return (
                                <li key={label}>
                                    <button
                                        type="button"
                                        className="p-1 rounded-sm hover:opacity-90"
                                        onClick={(event) => openPopup(cert, label, event.currentTarget)}
                                        aria-label={`View ${label}`}
                                    >
                                        <img
                                            src={cert}
                                            alt={label}
                                            width={240}
                                            height={320}
                                            loading="lazy"
                                            className="xl:w-40 h-auto"
                                        />
                                    </button>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {popup && (
                    <div
                        className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 px-6 overscroll-contain"
                        role="presentation"
                        onClick={closePopup}
                    >
                        <div
                            id="certificate-dialog"
                            role="dialog"
                            aria-modal="true"
                            aria-label={popup.label}
                            className="relative max-h-[90vh] max-w-4xl overflow-auto overscroll-contain rounded-lg border border-border bg-card p-4 text-foreground"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <button
                                ref={closeButtonRef}
                                type="button"
                                className="absolute top-2 right-2 min-h-11 min-w-11 rounded-lg text-3xl text-foreground"
                                onClick={closePopup}
                                aria-label="Close certificate"
                            >
                                ×
                            </button>

                            <img
                                src={popup.image}
                                alt={popup.label}
                                width={900}
                                height={1200}
                                className="max-w-full max-h-[80vh] rounded-lg object-contain"
                            />
                        </div>
                    </div>
                )}
            </div>
        </PageShell>
    );
};

export default Certificates;
