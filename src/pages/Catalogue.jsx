import PageShell from "../components/PageShell";
import Breadcrumb from "../components/Breadcrumb";

import { FaDownload } from "react-icons/fa6";

import FD1 from '../assets/files/Product Catalog 2024—24V1.1-AISIKAI.pdf';
import FD2 from '../assets/files/SKT SERIES ATS Product Selection Guide-24V1.0-AISIKAI.pdf';
import FD3 from '../assets/files/AISIKAI-ASKQ1 Selection guide 2023v1.0.pdf';
import FD4 from '../assets/files/ASKQ6 ATS Products Introduction-24V1.0-AISIKAI.pdf';
import FD5 from '../assets/files/AISIKAI-ASKM1  Series  Catalogue 2023V1.0.pdf';
import FD6 from '../assets/files/AISIKAI-ASKM3  Series  Catalogue 2023V1.0.pdf';
import FD7 from '../assets/files/AISIKAI-ASKW Series  Catalogue_2023V1.0.pdf';
import FD8 from '../assets/files/ASKV5 Series VCB Catalogue-24V1.2- AISIKAI.pdf';
import FD9 from '../assets/files/SKQ1 Series Automatic Transfer Switch Catalogue-ATS24V1.0-AISIKAI.pdf';
import FD10 from '../assets/files/AISIKAI-BAC SERIES USER MANUAL-24V1.0.pdf';
import FD11 from '../assets/files/AISIKAI-MCB Series  Catalogue 2023V1.0.pdf';
import FD12 from '../assets/files/2019-(ATSC) Intelligent ATS Controller Catalogue-V1.2_190904.pdf';

import FD1image from '../assets/images/fd1.webp';
import FD2image from '../assets/images/fd2.webp';
import FD3image from '../assets/images/fd3.webp';
import FD4image from '../assets/images/fd4.webp';
import FD5image from '../assets/images/fd5.webp';
import FD6image from '../assets/images/fd6.webp';
import FD7image from '../assets/images/fd7.webp';
import FD8image from '../assets/images/fd8.webp';
import FD9image from '../assets/images/fd9.webp';
import FD10image from '../assets/images/fd10.webp';
import FD11image from '../assets/images/fd11.webp';
import FD12image from '../assets/images/fd12.webp';

const DOWNLOADS = [
    { title: "AISIKAI Product Catalog 2024 V1.1", date: "2024-07-03", downloads: 1462, file: FD1, image: FD1image },
    { title: "SKT Series ATS Product Selection Guide", date: "2025-04-03", downloads: 8652, file: FD2, image: FD2image },
    { title: "AISIKAI ASKQ1 Selection Guide 2023", date: "2022-07-26", downloads: 904, file: FD3, image: FD3image },
    { title: "ASKQ6 ATS Products Introduction", date: "2024-12-10", downloads: 117, file: FD4, image: FD4image },
    { title: "AISIKAI ASKM1 Series Catalogue 2023", date: "2024-06-06", downloads: 539, file: FD5, image: FD5image },
    { title: "AISIKAI ASKM3 Series Catalogue 2023", date: "2024-05-24", downloads: 429, file: FD6, image: FD6image },
    { title: "AISIKAI ASKW Series Catalogue 2023", date: "2022-09-30", downloads: 340, file: FD7, image: FD7image },
    { title: "ASKV5 Series VCB Catalogue", date: "2022-02-17", downloads: 1634, file: FD8, image: FD8image },
    { title: "SKQ1 Series Automatic Transfer Switch Catalogue", date: "2024-12-10", downloads: 546, file: FD9, image: FD9image },
    { title: "AISIKAI BAC Series User Manual", date: "2024-05-24", downloads: 429, file: FD10, image: FD10image },
    { title: "AISIKAI MCB Series Catalogue 2023", date: "2022-09-30", downloads: 340, file: FD11, image: FD11image },
    { title: "Intelligent ATS Controller Catalogue", date: "2022-02-17", downloads: 1634, file: FD12, image: FD12image },
];

const dateFormatter = new Intl.DateTimeFormat(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
});

const numberFormatter = new Intl.NumberFormat(undefined);

const DownloadCard = ({ item }) => {
    const formattedDate = dateFormatter.format(new Date(`${item.date}T00:00:00`));

    return (
        <article className="flex min-w-0 flex-col justify-between overflow-hidden rounded-lg border border-border bg-card xl:w-[20rem]">
            <div className="flex flex-col items-start justify-between gap-2 p-4">
                <div className="flex w-full flex-row items-center justify-between gap-4 text-muted">
                    <time dateTime={item.date} className="text-sm tabular-nums">{formattedDate}</time>
                    <div className="flex flex-row items-center gap-2">
                        <FaDownload className="text-muted" aria-hidden="true" />
                        <span className="text-sm tabular-nums">{numberFormatter.format(item.downloads)}</span>
                    </div>
                </div>
                <h2 className="min-w-0 text-sm font-medium line-clamp-2" translate="no">{item.title}</h2>
            </div>

            <div className="flex h-[12rem] w-full flex-col items-center justify-center gap-4 bg-background p-8">
                <img
                    src={item.image}
                    alt={`Cover for ${item.title}`}
                    width={240}
                    height={240}
                    loading="lazy"
                    className="max-h-full w-auto object-contain"
                />
            </div>

            <a
                href={item.file}
                download
                className="flex min-h-11 w-full flex-row items-center justify-center gap-2 bg-accent text-sm font-medium text-white hover:bg-[#075985]"
            >
                Download PDF
            </a>
        </article>
    );
};

const Catalogue = () => {
    return (
        <PageShell>
            <Breadcrumb pageName="Catalogue" />

            <div className="px-6 xl:px-24 3xl:px-60 py-12 xl:pb-16 pb-24 flex flex-col justify-center items-center gap-8 xl:gap-12">
                <ul className="flex flex-col xl:flex-row xl:flex-wrap items-stretch justify-center gap-10 list-none p-0 m-0">
                    {DOWNLOADS.map((item) => (
                        <li key={item.title}>
                            <DownloadCard item={item} />
                        </li>
                    ))}
                </ul>
            </div>
        </PageShell>
    );
};

export default Catalogue;
