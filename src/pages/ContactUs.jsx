import { Fragment, useEffect, useRef, useState } from "react";
import emailjs from "emailjs-com";

import PageShell from "../components/PageShell";
import Breadcrumb from "../components/Breadcrumb";

import { FiPhone } from "react-icons/fi";
import { MdOutlineFax, MdOutlineEmail, MdOutlinePlace } from "react-icons/md";

import SA from "../assets/images/southafrica.webp";
import CD from "../assets/images/cambodia.webp";
import TK from "../assets/images/turkey.webp";
import RM from "../assets/images/romania.webp";
import VN from "../assets/images/vietnam.webp";

const EMPTY_FORM = { name: "", phone: "", email: "", message: "" };
const FIELD_ORDER = ["name", "phone", "email", "message"];

function validateForm(values) {
    const errors = {};
    if (!values.name.trim()) errors.name = "Enter your name.";
    if (!values.phone.trim()) errors.phone = "Enter your phone number.";
    if (!values.email.trim()) errors.email = "Enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = "Enter a valid email address.";
    if (!values.message.trim()) errors.message = "Enter your message.";
    return errors;
}

function fieldClass(invalid) {
    return `w-full min-h-11 rounded-lg border bg-card px-4 py-2 text-foreground ${invalid ? "border-foreground" : "border-border"}`;
}

const AGENCIES = [
    { name: "SOUTH AFRICA", flag: SA, alt: "South Africa flag" },
    { name: "CAMBODIA", flag: CD, alt: "Cambodia flag" },
    { name: "TURKIYE", flag: TK, alt: "Turkiye flag" },
    { name: "ROMANIA", flag: RM, alt: "Romania flag" },
    { name: "VIETNAM", flag: VN, alt: "Vietnam flag" },
];

const CONTACT_DETAILS = [
    {
        title: "Tel",
        Icon: FiPhone,
        wrapClass: "w-full",
        content: <a href="tel:+6285176879999" className="text-link hover:underline rounded-sm">+62 8517 687 9999</a>,
    },
    {
        title: "Fax",
        Icon: MdOutlineFax,
        content: "+62 8517 687 9999",
    },
    {
        title: "Email",
        Icon: MdOutlineEmail,
        wrapClass: "min-w-0",
        textClass: "break-words",
        content: (
            <a href="mailto:detapowergensetindonesia@gmail.com" className="text-link hover:underline rounded-sm">
                detapowergensetindonesia@gmail.com
            </a>
        ),
    },
    {
        title: "Place",
        Icon: MdOutlinePlace,
        content: (
            <>
                East side of industrial zone,<br />
                Chenji Town, Yizheng City,<br />
                Jiangsu Province, China
            </>
        ),
    },
];

const ContactUs = () => {
    const [formData, setFormData] = useState(EMPTY_FORM);
    const [fieldErrors, setFieldErrors] = useState({});
    const [formStatus, setFormStatus] = useState({ type: "", message: "" });
    const [isSending, setIsSending] = useState(false);
    const fieldRefs = useRef({});
    const focusField = useRef(null);

    useEffect(() => {
        const name = focusField.current;
        if (!name) return;
        focusField.current = null;
        fieldRefs.current[name]?.focus();
    }, [fieldErrors]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFieldErrors((prev) => {
            if (!prev[name]) return prev;
            const next = { ...prev };
            delete next[name];
            return next;
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSending) return;

        const errors = validateForm(formData);
        const firstInvalid = FIELD_ORDER.find((name) => errors[name]);
        if (firstInvalid) {
            focusField.current = firstInvalid;
            setFieldErrors(errors);
            setFormStatus({ type: "error", message: "Please correct the fields listed above." });
            return;
        }

        setFieldErrors({});
        setIsSending(true);
        setFormStatus({ type: "", message: "" });

        emailjs
            .send(
                "service_nv9huug",
                "template_gkvywkj",
                formData,
                "Rendiero"
            )
            .then(
                () => {
                    setFormStatus({ type: "success", message: "Message sent successfully." });
                    setFormData(EMPTY_FORM);
                },
                () => {
                    setFormStatus({
                        type: "error",
                        message: "Failed to send message. Check your connection and try again.",
                    });
                }
            )
            .finally(() => {
                setIsSending(false);
            });
    };

    const errorNames = FIELD_ORDER.filter((name) => fieldErrors[name]);

    return (
        <PageShell>
            <Breadcrumb pageName="Contact Us" />

            <div className="py-12 flex flex-col justify-center items-center gap-12 xl:gap-24">
                <div className="w-full flex flex-col xl:flex-row justify-center gap-12 xl:gap-16 3xl:px-60">
                    <div className="flex flex-col px-6 xl:p-0 gap-2 justify-center items-center xl:items-start">
                        <div className="flex flex-col justify-center items-center xl:items-start gap-2">
                            <h2 className="text-2xl font-bold mb-6">Feedback</h2>
                            <p className="font-normal text-lg text-center xl:text-left xl:max-w-lg">
                                We serve you wholeheartedly, your satisfaction is our pursuit,
                                and we look forward to working together with you to create a win-win situation.
                            </p>
                        </div>

                        <form onSubmit={handleSubmit} noValidate className="w-full max-w-2xl rounded-lg border border-border bg-card p-4">
                            {errorNames.length > 0 && (
                                <div
                                    role="alert"
                                    className="mb-4 rounded-lg border border-border bg-background p-4"
                                >
                                    <p className="font-semibold">Please fix the following:</p>
                                    <ul className="mt-2 list-disc pl-5 text-sm">
                                        {errorNames.map((name) => (
                                            <li key={name}>
                                                <button
                                                    type="button"
                                                    className="text-left text-link underline"
                                                    onClick={() => fieldRefs.current[name]?.focus()}
                                                >
                                                    {fieldErrors[name]}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            <div className="flex flex-col xl:flex-row justify-between gap-4">
                                <div className="mb-4 flex-1">
                                    <label htmlFor="name" className="block text-md font-normal mb-2">
                                        Name
                                    </label>
                                    <input
                                        ref={(node) => { fieldRefs.current.name = node; }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        autoComplete="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        aria-invalid={fieldErrors.name ? true : undefined}
                                        aria-describedby={fieldErrors.name ? "name-error" : undefined}
                                        className={fieldClass(Boolean(fieldErrors.name))}
                                    />
                                    {fieldErrors.name && (
                                        <p id="name-error" className="mt-1 text-sm text-foreground">{fieldErrors.name}</p>
                                    )}
                                </div>
                                <div className="mb-4 flex-1">
                                    <label htmlFor="phone" className="block text-md font-normal mb-2">
                                        Phone
                                    </label>
                                    <input
                                        ref={(node) => { fieldRefs.current.phone = node; }}
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        autoComplete="tel"
                                        inputMode="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        aria-invalid={fieldErrors.phone ? true : undefined}
                                        aria-describedby={fieldErrors.phone ? "phone-error" : undefined}
                                        className={fieldClass(Boolean(fieldErrors.phone))}
                                    />
                                    {fieldErrors.phone && (
                                        <p id="phone-error" className="mt-1 text-sm text-foreground">{fieldErrors.phone}</p>
                                    )}
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="email" className="block text-md font-normal mb-2">
                                    Email
                                </label>
                                <input
                                    ref={(node) => { fieldRefs.current.email = node; }}
                                    type="email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    spellCheck={false}
                                    value={formData.email}
                                    onChange={handleChange}
                                    aria-invalid={fieldErrors.email ? true : undefined}
                                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                                    className={fieldClass(Boolean(fieldErrors.email))}
                                />
                                {fieldErrors.email && (
                                    <p id="email-error" className="mt-1 text-sm text-foreground">{fieldErrors.email}</p>
                                )}
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-md font-normal mb-2">
                                    Message
                                </label>
                                <textarea
                                    ref={(node) => { fieldRefs.current.message = node; }}
                                    id="message"
                                    name="message"
                                    autoComplete="off"
                                    value={formData.message}
                                    onChange={handleChange}
                                    aria-invalid={fieldErrors.message ? true : undefined}
                                    aria-describedby={fieldErrors.message ? "message-error" : undefined}
                                    className={fieldClass(Boolean(fieldErrors.message))}
                                    rows="4"
                                />
                                {fieldErrors.message && (
                                    <p id="message-error" className="mt-1 text-sm text-foreground">{fieldErrors.message}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                disabled={isSending}
                                className="w-full btn-primary disabled:opacity-70"
                            >
                                {isSending ? "Sending…" : "Send Message"}
                            </button>
                            {formStatus.message && (
                                <p
                                    className="mt-4 text-sm text-foreground"
                                    role="status"
                                    aria-live="polite"
                                >
                                    <span className="font-semibold">{formStatus.type === "success" ? "Sent: " : "Error: "}</span>
                                    {formStatus.message}
                                </p>
                            )}
                        </form>
                    </div>

                    <div className="flex flex-col justify-center xl:justify-start items-start sm:items-center xl:items-start gap-8 px-6">
                        {CONTACT_DETAILS.map((detail, index) => (
                            <Fragment key={detail.title}>
                                {index > 0 && (
                                    <div className="w-full border-t border-dashed border-border" aria-hidden="true" />
                                )}
                                <div className="flex flex-row items-center justify-center gap-10">
                                    <div className="rounded-full border-2 border-link/40 p-4" aria-hidden="true">
                                        <detail.Icon className="size-10 text-link" />
                                    </div>
                                    <div className={`flex flex-col ${detail.wrapClass ?? ""}`}>
                                        <h3 className="font-bold text-2xl">{detail.title}</h3>
                                        <p className={`font-normal text-lg xl:text-sm ${detail.textClass ?? ""}`}>
                                            {detail.content}
                                        </p>
                                        {detail.title === "Email" && (
                                            <p className="mt-1 text-sm text-muted">Deta Power is the local Indonesia partner for AISIKAI.</p>
                                        )}
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col justify-center items-center gap-4 px-6 xl:px-24">
                    <h2 className="text-2xl font-bold mb-6">Our Agency</h2>
                    <div className="flex flex-row flex-wrap gap-8 xl:gap-12 2xl:gap-24 justify-center items-center">
                        {AGENCIES.map((agency) => (
                            <div key={agency.name} className="flex flex-col justify-center items-center gap-2">
                                <img
                                    src={agency.flag}
                                    alt={agency.alt}
                                    width={104}
                                    height={104}
                                    loading="lazy"
                                    className="rounded-full size-26 object-cover"
                                />
                                <h3 className="font-bold text-xl">{agency.name}</h3>
                                <p className="font-medium text-xl">
                                    <a href="mailto:oversea@aisikai.cc" className="text-link hover:underline rounded-sm">oversea@aisikai.cc</a>
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3068.168792484928!2d119.18497831534274!3d32.28316998112452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35b5a7a8b0b0b0b1%3A0x0!2zMzLCsDE3JzAwLjgiTiAxMTnCsDExJzA1LjkiRQ!5e0!3m2!1sen!2sid!4v1691234567890!5m2!1sen!2sid"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="AISIKAI factory location on Google Maps"
                    />
                </div>
            </div>
        </PageShell>
    );
};

export default ContactUs;
