# SITE.md — BridgeToGrants

## Site Name
BridgeToGrants

## Tagline
Din bro till EU-finansiering | Your Bridge to EU Funding

## Purpose
Professional, premium website for a European EU funding consultancy targeting Swedish companies and municipalities. The site positions BridgeToGrants as a modern, AI-native, transparency-first consultancy that helps organisations identify, apply for, and win EU grants.

---

## Pages

### Home (`/`)
**Purpose:** Hero landing page that immediately communicates trust, expertise, and results. Features a compelling value proposition, social proof (success metrics), a quick-scan CTA, and previews of key services. First impression must convey premium B2B quality and differentiate from competitors.

### Program (`/program`)
**Purpose:** Overview of major EU funding programmes with subpages for each. Educates visitors on available opportunities and demonstrates deep domain expertise.

**Subpages:**
- `/program/horizon-europe` — Horizon Europe (research & innovation)
- `/program/digital-europe` — Digital Europe Programme
- `/program/life` — LIFE Programme (environment & climate)
- `/program/eruf` — European Regional Development Fund (ERUF/ERDF)
- `/program/esf-plus` — European Social Fund Plus (ESF+)
- `/program/cef` — Connecting Europe Facility
- `/program/interreg` — Interreg (cross-border cooperation)
- `/program/innovationsfonden` — Innovation Fund
- `/program/creative-europe` — Creative Europe

### Matcha (`/matcha`) — EU-Stod Scanner
**Purpose:** Interactive matching tool that helps visitors identify which EU programmes fit their organisation and project. Core differentiator — no competitor offers this. Requires login to access full results. The scanner asks structured questions and returns a ranked list of matching programmes with fit scores.

### Tjanster (`/tjanster`) — Services
**Purpose:** Transparent service offerings with clear pricing tiers. Breaks down exactly what BridgeToGrants delivers at each level. Builds trust through radical pricing transparency — a key differentiator vs competitors who hide costs.

### Case (`/case`)
**Purpose:** Success stories and case studies showcasing real client results. Each case includes the challenge, approach, EU programme used, and measurable outcomes (funding secured, project impact). Social proof that converts.

### Team (`/team`)
**Purpose:** Profiles of the BridgeToGrants team. Humanises the brand, shows credentials and EU expertise. Builds personal trust — critical in B2B consulting.

### Dashboard (`/dashboard`) — Protected Client Area
**Purpose:** Post-login client portal with sidebar navigation. Central hub for authenticated users to access tools and track their projects.

**Sidebar sections:**
- **Mina verktyg** — Access to EU-Stod Scanner, eligibility checklist, price calculator
- **Mina projekt** — Track active grant applications and their status
- **Konto** — Profile settings, subscription, billing

**Access:** Requires authentication. Users land here after login.

### Resultat (`/resultat`) — Public Success Dashboard
**Purpose:** Public-facing live dashboard showing aggregated success metrics (total funding secured, number of successful applications, average success rate, active projects). Transparency as a trust signal — no competitor does this openly.

### Kunskap (`/kunskap`)
**Purpose:** Knowledge hub with articles, guides, and insights about EU funding. Establishes thought leadership, supports SEO, and educates potential clients. Content categories: guides, news/updates, tips, programme deep-dives.

### Kontakt (`/kontakt`)
**Purpose:** Contact page with form, office details, and booking link. Clear CTA to start a conversation. Includes map and response-time expectations.

---

## Protected Routes (require login)
- `/dashboard`
- `/dashboard/*`
- `/matcha` (full results)
- `/quick-scan` (full results)

## Auth Flow
- `/login` — Sign in
- `/register` — Create account
- Post-login redirect: `/dashboard`

## Language
- Primary: Swedish (sv)
- All UI text in Swedish
- Programme names use their official EU English names where standard
