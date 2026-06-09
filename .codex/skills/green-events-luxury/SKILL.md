---
name: green-events-luxury
description: Use this skill when designing, coding, reviewing, or polishing the Green Events Maroc luxury wedding, catering, and private events website.
---

# Green Events Luxury Website Skill

## Mission

Build and maintain a mobile-first luxury website for Green Events Maroc.

The website must feel like a cinematic wedding invitation and a premium event portfolio. It must never feel like a generic AI-generated landing page.

The result must be:
- memorable
- refined
- elegant
- emotional
- trustworthy
- premium

## Brand

Green Events Maroc is a Marrakech-based event brand.

Services:
- Wedding & Private Events
- Traiteur & Décorateur événementiel
- Créateurs d’expérience sur mesure
- Mariage
- Anniversaire
- Private Events
- Marrakech Wedding

Core promise:
Green Events creates tailor-made event experiences where catering, decoration, styling, atmosphere, and coordination feel unified.

## Design behavior

When creating UI, always follow this direction:

- Mobile-first.
- Luxury wedding/event feeling.
- Big cinematic visuals.
- Warm Moroccan atmosphere.
- Elegant serif headings.
- Clean body text.
- Generous spacing.
- Calm, confident layout.
- Short premium French and English copy.
- Clear WhatsApp conversion.

Color mood:
- Deep black
- Warm ivory
- Champagne gold
- Olive green
- Warm sand

Do not create:
- SaaS-like layout
- Generic cards grid everywhere
- Random AI art feeling
- Startup gradients
- Neon colors
- Overloaded UI
- Cheap icon-heavy sections
- Long corporate paragraphs

## Animation behavior

Use animation only when it improves the experience.

GSAP is preferred for:
- ScrollTrigger
- pinned scroll
- scrubbed animation
- canvas image sequence
- complex cinematic timeline

Motion is allowed only for:
- small UI interactions
- mobile menu
- button hover/tap
- gentle fade transitions

Never animate everything.

Never mix GSAP and Motion on the same element.

All animation must:
- be subtle
- be smooth
- be performant
- respect prefers-reduced-motion
- have a static fallback

## Signature section

The key memorable section is:

“From vision to celebration”

It should show the transformation of an event:
1. empty space
2. table setup
3. flowers/candles
4. food/decor
5. final magical wedding/private dinner

Preferred implementation:
- GSAP ScrollTrigger
- pinned section
- canvas image sequence
- WebP frames from public/scroll-sequence/
- fallback poster on mobile and reduced motion

## Homepage section order

Use this structure unless the user asks otherwise:

1. HeroSection
2. BrandPromiseSection
3. ScrollExperienceSection
4. ServicesSection
5. PortfolioSection
6. ProcessSection
7. WhyUsSection
8. SocialProofSection
9. FinalCtaSection
10. StickyWhatsAppButton

## Copywriting style

Use French and English only.

Default language: French.

Use a language switcher:
FR | EN

Never mix French and English in the same visible content block.

Do not use Arabic in visible website content.

Tone:
- elegant
- clear
- premium
- warm
- human
- short

Good examples:
- Créateurs d’expériences sur mesure à Marrakech.
- Mariages, anniversaires et événements privés pensés dans les moindres détails.
- Une atmosphère, un service, une mise en scène — imaginés pour vous.

Avoid:
- generic marketing fluff
- robotic AI copy
- long paragraphs
- exaggerated claims

## Code quality

Create clean React components.

Rules:
- Keep components small.
- Use clear names.
- Use reusable UI components.
- Avoid hardcoded repeated values when a data file is better.
- Keep animations isolated in their own components.
- Clean up GSAP contexts and ScrollTriggers on unmount.
- Keep images in public/images.
- Keep scroll frames in public/scroll-sequence.
- Keep content data in src/data/siteContent.js when useful.

## Review checklist

Before finishing any change, check:

- Does it look premium?
- Does it look mobile-first?
- Does it avoid AI-generated clichés?
- Is the CTA clear?
- Is the animation meaningful?
- Is performance protected?
- Is the code maintainable?
- Does it follow docs/PROJECT_RULES.md?

## Production quality mode

This is a real production client website.

Always aim for a polished, premium, client-ready result.

Do not create generic, temporary-feeling sections.

Do not use Arabic.

Use French and English only, with a language switcher.

Default language is French.

The website must impress foreign wedding/private event clients and drive WhatsApp inquiries.

Use approved client visuals whenever available. Generated or interim imagery must match the final art direction and live at production image paths.

Visual quality is critical. Images must look cinematic, emotional, warm, luxurious, and clear.
