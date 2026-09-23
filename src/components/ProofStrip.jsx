const FACTS = [
    { value: "2007", label: "Manufacturing electrical switches" },
    { value: "ISO 9001, CCC, CE, SGS", label: "Certifications" },
    { value: "Levels I–III", label: "Power distribution product lines" },
];

const ProofStrip = () => (
    <section aria-label="Company facts" className="px-6 xl:px-24 3xl:px-60">
        <ul className="grid grid-cols-1 gap-2 sm:grid-cols-3">
            {FACTS.map((fact) => (
                <li key={fact.label} className="rounded-lg border border-border bg-card p-4">
                    <p className="text-lg font-semibold text-foreground">{fact.value}</p>
                    <p className="mt-1 text-sm text-muted">{fact.label}</p>
                </li>
            ))}
        </ul>
    </section>
);

export default ProofStrip;
