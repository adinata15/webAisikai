import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { RiWhatsappFill } from "react-icons/ri";
import { IoMdArrowDropleft } from "react-icons/io";

const WHATSAPP_HREF = "https://wa.me/6285176879999?text=Halo,%20Saya%20tertarik%20dengan%20produk%20Aisikai";
const EMAIL_HREF = "mailto:detapowergensetindonesia@gmail.com";

const CONTACTS = [
    {
        id: "whatsapp",
        href: WHATSAPP_HREF,
        label: "Inquire on WhatsApp with AISIKAI",
        tip: "AISIKAI",
        external: true,
        Icon: RiWhatsappFill,
    },
    {
        id: "email",
        href: EMAIL_HREF,
        label: "Email AISIKAI",
        tip: "Email",
        external: false,
        Icon: FiMail,
    },
];

function contactLinkProps(contact) {
    return {
        href: contact.href,
        "aria-label": contact.label,
        ...(contact.external ? { target: "_blank", rel: "noopener noreferrer" } : {}),
    };
}

const SideContact = () => {
    const [activeId, setActiveId] = useState(null);

    return (
        <div>
            <div className="xl:hidden">
                <div
                    className="fixed z-20 flex items-end bottom-0 w-full"
                    style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
                >
                    <div className="flex flex-row justify-between w-full">
                        <a
                            {...contactLinkProps(CONTACTS[0])}
                            className="bg-accent min-h-14 flex justify-center items-center w-1/2 hover:bg-[#075985] focus-visible:z-10"
                        >
                            <RiWhatsappFill className="text-white size-10" aria-hidden="true" />
                        </a>

                        <div className="w-px self-stretch bg-white/70" aria-hidden="true" />

                        <a
                            {...contactLinkProps(CONTACTS[1])}
                            className="bg-accent min-h-14 flex justify-center items-center w-1/2 hover:bg-[#075985] focus-visible:z-10"
                        >
                            <FiMail className="text-white size-8" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>

            <div className="hidden xl:flex">
                <div className="min-h-screen fixed z-20 flex items-center right-0">
                    <div className="flex flex-col gap-px">
                        {CONTACTS.map((contact) => {
                            const showTip = activeId === contact.id;
                            const { Icon } = contact;
                            return (
                                <div
                                    key={contact.id}
                                    className="bg-accent hover:bg-card text-white hover:text-link size-16 flex justify-center items-center relative border border-white/30 transition-[background-color,color] duration-300"
                                    onMouseEnter={() => setActiveId(contact.id)}
                                    onMouseLeave={() => setActiveId(null)}
                                >
                                    <a
                                        {...contactLinkProps(contact)}
                                        className="size-full flex justify-center items-center"
                                        onFocus={() => setActiveId(contact.id)}
                                        onBlur={() => setActiveId(null)}
                                    >
                                        <Icon className="size-8" aria-hidden="true" />
                                    </a>
                                    {showTip && (
                                        <div className="absolute bg-accent text-white h-16 w-32 right-full text-center flex flex-row items-center pointer-events-none border border-white/30">
                                            <span className="text-sm font-medium w-full pl-4">{contact.tip}</span>
                                            <IoMdArrowDropleft className="size-8 -mr-[0.8rem]" aria-hidden="true" />
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideContact;
export { WHATSAPP_HREF, EMAIL_HREF };
