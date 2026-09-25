# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

- **Primary:** Tech recruiters and hiring managers evaluating Orlando's profile for development roles.
- **Secondary:** Freelance clients (businesses or individuals) seeking custom software development services.
- **Tertiary:** Developer community, collaborators, and networking contacts discovering Orlando's work and approach.

## Product Purpose

Personal portfolio and professional showcase for Orlando Lopez, a full-stack software developer. The site exists to demonstrate technical capability, project delivery, and design sensibility to potential employers and clients. Success means generating qualified professional opportunities — job interviews, freelance inquiries, and meaningful collaborations.

## Positioning

Full-stack developer with production clients, a Spec-Driven Development methodology, and a portfolio of real-world systems (not lab projects). Differentiator: combines deep frontend craft (React, Astro, GSAP animations, Tailwind) with robust backend integration (Node.js, Supabase, PostgreSQL), shipped to real users under real constraints (offline-first, multi-tenant, multi-currency).

## Operating Context

- Visitor flow: Hero introduction → Project showcase → Workflow process → Skills → About → Contact
- Primary CTAs: "Ver Proyectos" (explore work), "Descargar CV" (download resume), contact channels (WhatsApp, email, LinkedIn, GitHub)
- Language: Spanish (es_ES)
- 3 showcase projects with full case studies: TuPrestamo (mobile lending app), Dulces Ideas (POS & inventory), ERP SaaS (multi-tenant enterprise system)
- Projects include real metrics, before/after comparisons, technical challenges, and live demos where available

## Capabilities and Constraints

- Static site generation via Astro with Tailwind CSS v4 and GSAP animations
- Responsive design with mobile-first approach; avatar and marquee hidden on small screens
- Dynamic route `/project/[slug]` for individual project case studies
- Structured data (JSON-LD) for Person, WebSite, CreativeWork, and BreadcrumbList
- Open Graph and Twitter Card metadata for social sharing
- Sitemap generation via `@astrojs/sitemap`
- Accessibility: skip-to-content link, semantic HTML, ARIA labels, screen reader text
- CV download links to external Google Drive
- No CMS — all content lives in TypeScript constants files
- No authentication or user accounts

## Brand Commitments

- Strong focus on the 3 production projects (TuPrestamo, Dulces Ideas, ERP SaaS) as the primary proof of capability
- Modern, tech-forward aesthetic with purple/green accent palette
- Personal and approachable tone — not corporate, not overly casual
- Animated, alive interface with purposeful motion (GSAP-driven)

## Evidence on Hand

- 3 complete project case studies with real metrics, challenges, and solutions
- Production deployments: TuPrestamo (GitHub), Dulces Ideas (Vercel live), ERP SaaS (GitHub)
- Real contact channels: WhatsApp, email, LinkedIn, GitHub
- CV hosted on Google Drive

## Product Principles

1. **Show, don't tell.** Projects and metrics speak louder than adjectives. Every section earns its space with concrete evidence.
2. **Craft is the message.** The portfolio itself is a demonstration of the quality it claims to deliver — animations, typography, spacing, and interaction all reflect the developer's standards.
3. **Real over theoretical.** Prioritize production work, real constraints, and shipped software over hypothetical or academic projects.
4. **Full-stack fluency.** Frontend and backend are not separate concerns; the portfolio should reflect the ability to own the entire product lifecycle.
5. **Accessibility by default.** Inclusive design is not an afterthought — semantic HTML, ARIA, keyboard navigation, and reduced-motion support are baseline requirements.
