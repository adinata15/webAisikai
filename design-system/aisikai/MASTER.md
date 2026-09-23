# Design System Master File

> **LOGIC:** When building a page, read this Master first. Then check `design-system/aisikai/pages/[page-name].md`.
> If that file exists, its rules **override** this Master. If it does not, follow this file only.
> Do not replace this file with a generated palette. A navy "Accessible & Ethical" search result fights the AISIKAI logo.

---

**Project:** AISIKAI
**Category:** B2B electrical-equipment manufacturer
**Pattern:** Trust and authority

Cyan is the only accent. Slate carries text and chrome. The brand name is AISIKAI.

---

## Pattern

**Pattern name:** Trust and authority

Buyers should meet a claim, proof, products, then a contact path. The homepage leads with credibility, not a picture carousel.

- **Section order:** Hero with claim and CTA, then proof, then products, then contact.
- **CTA placement:** Primary actions sit in the hero panel. Closing contact copy uses a normal grid, not overlapping offsets.
- **Brand voice:** Buttons and headings say AISIKAI. Name Deta Power once, as the local Indonesia partner, not as the brand of a button or the site.

---

## Color

`#0369A1` is the accent for links and buttons in both themes. White labels on that fill are about 5.8:1. `#38BDF8` is for section rules and for links on dark surfaces. `#04A1EA` is only a large brand mark, never body text or button fill. White on `#04A1EA` is about 2.9:1.

Use cyan for buttons, the section rule, links, and the active tab. Use slate for headings and the footer.

### Light

| Role | Hex | CSS variable |
|------|-----|--------------|
| Background | `#F8FAFC` | `--bg` |
| Card | `#FFFFFF` | `--card` |
| Text | `#0F172A` | `--text` |
| Muted | `#475569` | `--muted` |
| Border | `#E2E8F0` | `--border` |

### Dark

| Role | Hex | CSS variable |
|------|-----|--------------|
| Background | `#0F172A` | `--bg` |
| Card | `#1E293B` | `--card` |
| Text | `#F8FAFC` | `--text` |
| Muted | `#CBD5E1` | `--muted` |
| Border | `#334155` | `--border` |

Muted text on dark (`#CBD5E1` on `#0F172A` or `#1E293B`) must stay at least 4.5:1.

### Accent

| Role | Hex | CSS variable |
|------|-----|--------------|
| Links and buttons | `#0369A1` | `--accent` |
| Label on accent | `#FFFFFF` | `--on-accent` |
| Rules and links on dark | `#38BDF8` | `--accent-on-dark` |
| Large brand mark only | `#04A1EA` | `--brand-mark` |

```css
:root {
  --bg: #F8FAFC;
  --card: #FFFFFF;
  --text: #0F172A;
  --muted: #475569;
  --border: #E2E8F0;
  --accent: #0369A1;
  --on-accent: #FFFFFF;
  --accent-on-dark: #38BDF8;
  --brand-mark: #04A1EA;
}

html.dark {
  --bg: #0F172A;
  --card: #1E293B;
  --text: #F8FAFC;
  --muted: #CBD5E1;
  --border: #334155;
}
```

On light surfaces, links use `--accent`. On dark surfaces, links and the section rule use `--accent-on-dark`. Button fill stays `--accent` with white labels in both themes.

Footer links and copyright use `text-slate-300` (or lighter) on `slate-900`. Muted labels on light surfaces use `--muted` (`#475569`). Do not use `text-gray-400` or `text-gray-500` for meaningful text.

---

## Typography

Open Sans only. Headings and body share one family. There is no display serif.

- **Heading font:** Open Sans
- **Body font:** Open Sans
- **Spec labels:** Open Sans, small size, medium weight, letter-spacing. No italic. No underline.

---

## Spacing

8px steps. Padding, gaps, and section spacing use multiples of 8px.

| Token | Value | Usage |
|-------|-------|-------|
| `--space-xs` | `8px` | Tight gaps |
| `--space-sm` | `16px` | Icon gaps, inline spacing |
| `--space-md` | `24px` | Card padding |
| `--space-lg` | `32px` | Section padding |
| `--space-xl` | `48px` | Large gaps |
| `--space-2xl` | `64px` | Section margins |
| `--space-3xl` | `96px` | Hero padding |

---

## Components

### Buttons

Pills only. Radius is fully rounded. Fill is `#0369A1`. Label is white.

```css
.btn-primary {
  background: #0369A1;
  color: #FFFFFF;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: 600;
  transition: background-color 200ms ease;
  cursor: pointer;
}

.btn-secondary {
  background: transparent;
  color: #0369A1;
  border: 2px solid #0369A1;
  padding: 12px 24px;
  border-radius: 9999px;
  font-weight: 600;
  transition: background-color 200ms ease, color 200ms ease;
  cursor: pointer;
}
```

On dark surfaces, a secondary button's border and label may use `#38BDF8`. The primary fill stays `#0369A1` with a white label.

### Cards

One radius for cards: 8px. White card on light, `#1E293B` on dark. 1px border. Hover may change border or background. It must not shift layout.

```css
.card {
  background: var(--card);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 24px;
}
```

### Icons

One outline set at one stroke for navigation and contact. Filled icons only for the mobile dock, and only if they stay brand-colored (`#0369A1` or `#38BDF8` on dark). Do not mix icon families on the same surface.

---

## Anti-Patterns (Do NOT Use)

- Playfair spec labels. Spec labels are Open Sans, small, medium weight, with letter-spacing. No italic underline.
- Gray-on-slate body text. `text-gray-500` (`#6B7280`) on `slate-900` is about 3.8:1. Footer and other dark surfaces use `text-slate-300` or lighter. Light muted text uses `#475569`, not `text-gray-400`.
- Deta Power as the brand name. AISIKAI is the brand. Deta Power is the local partner, named once, not the label of a CTA.
- Negative-margin heroes. Closing bands and heroes use a normal grid. Do not position sections with `xl:-ml-[24rem]`, `xl:ml-[34rem]`, or similar offsets.
- A navy SaaS palette in place of this cyan accent. It fights the logo.
