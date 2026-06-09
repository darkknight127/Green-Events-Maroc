# Green Events Maroc — Project Rules

## Project identity

This website is for Green Events Maroc, a Marrakech-based wedding, private events, catering, and event decoration brand.

Services:
- Wedding & Private Events
- Traiteur & Décorateur événementiel
- Créateurs d’expérience sur mesure
- Mariage
- Anniversaire
- Private Events
- Marrakech Wedding

The website must feel like a cinematic luxury wedding invitation, not a generic business website.

The main feeling is:
- Elegant
- Warm
- Moroccan luxury
- Emotional
- Smooth
- Premium

## Main objective

The visitor must quickly feel:
“This brand can create a beautiful, organized, premium event.”

The website must sell the experience, not only list services.

Primary conversion:
- WhatsApp quote request

Secondary conversions:
- View portfolio
- Visit Instagram
- Call directly

## Mobile-first rule

Most visitors will come from Instagram on mobile.

Design mobile first, then adapt to desktop.

Mobile requirements:
- Hero must look perfect on phone.
- CTA must be visible quickly.
- Sticky WhatsApp button on mobile.
- Text must be short.
- No heavy animation before the visitor understands the offer.
- Performance is more important than decoration.

## Visual direction

Use a luxury wedding/event mood.

Recommended palette:
- Deep black: #070605
- Warm ivory: #F7F1E7
- Champagne gold: #C8A45D
- Olive green: #4F5A3A
- Warm sand: #D8C3A5

Typography:
- Elegant serif for headings.
- Clean sans-serif for body.
- Big headings, short paragraphs, generous spacing.

Good visual language:
- Full-screen cinematic imagery
- Warm light
- Wedding table details
- Candles
- Flowers
- Elegant food presentation
- Moroccan luxury details
- Soft shadows
- Editorial spacing
- Slow reveals

Avoid:
- Generic AI-looking layout
- SaaS dashboard style
- Too many cards
- Random icons everywhere
- Neon colors
- Cheap gradients
- Fast/bouncy animations
- Overdecorated sections
- Stock-photo feeling
- Long text blocks

## Animation direction

Animation must be premium, calm, and meaningful.

Use GSAP only for:
- Signature pinned scroll section
- Canvas image sequence
- Scroll scrub
- Complex timeline

Use Motion only for:
- Mobile menu
- Button hover/tap
- Small fade-in
- Gentle UI transitions

Do not mix GSAP and Motion on the same element.

Animations allowed:
- Soft fade-up
- Image reveal
- Slow parallax
- Pinned scroll sequence
- Subtle mask reveal

Animations forbidden:
- Bounce
- Spin
- Random movement
- Too many animations at once
- Animation that hurts readability

Always respect prefers-reduced-motion.

## Signature website moment

The signature section is:

“From vision to celebration”

Concept:
The visitor scrolls and watches an empty event space become a magical wedding dinner.

Possible sequence:
1. Empty elegant table
2. Flowers and candles appear
3. Plates and styling appear
4. Warm lights appear
5. Final wedding/private dinner atmosphere

This is the main wow moment. Do not add many other heavy effects.

## Homepage structure

Use this order:

1. Cinematic hero
2. Brand promise
3. Signature scroll experience
4. Services
5. Portfolio / réalisations
6. Process
7. Why Green Events
8. Instagram/social proof
9. Final WhatsApp CTA

## Language and copywriting rules

The production website supports French and English only.

Default language: French.

Use a language switcher:
FR | EN

Do not mix French and English inside the same visible content block.

Do not use Arabic in visible website content.

Copy style:
- Short
- Elegant
- Premium
- Human
- Not corporate
- Not generic

Examples:
- Créateurs d’expériences sur mesure à Marrakech.
- Mariages, anniversaires et événements privés pensés dans les moindres détails.
- Du traiteur à la décoration, chaque détail est imaginé pour créer une atmosphère unique.

Avoid:
- “Nous sommes les meilleurs”
- Very long paragraphs
- Robotic AI copy
- Too many buzzwords

## Component rules

Create clean reusable components.

Suggested sections:
- HeroSection
- BrandPromiseSection
- ScrollExperienceSection
- ServicesSection
- PortfolioSection
- ProcessSection
- WhyUsSection
- SocialProofSection
- FinalCtaSection
- StickyWhatsAppButton

Suggested UI components:
- Container
- SectionHeader
- Button
- ImageReveal
- ServiceCard

## Performance rules

The site must be fast.

Images:
- Use WebP when possible.
- Use real client images when available.
- Compress all images.
- Use lazy loading for non-hero images.
- Add width and height when possible.

Scroll sequence:
- Use canvas, not hundreds of img tags.
- Use 40–80 frames for mobile.
- Use 80–120 frames for desktop.
- Use fallback poster image.
- Disable heavy animation with prefers-reduced-motion.

Video:
- Use muted, playsInline, poster.
- Keep videos short.
- Do not autoplay heavy video without need.

## Accessibility rules

- Use semantic HTML.
- Buttons must be real buttons or links.
- Images need meaningful alt text.
- Text must have good contrast.
- Respect prefers-reduced-motion.
- Do not hide important content behind animation.
- Site must work without JavaScript-heavy effects.

## Quality bar

The result is accepted only if:
- It does not look AI-generated.
- It feels like a premium wedding/event brand.
- It works beautifully on mobile.
- The hero is emotionally strong.
- The CTA is clear.
- The scroll effect feels meaningful, not decorative.
- The code is maintainable.

## Production direction

This website is a real production client website.

Every section must look intentional, premium, and ready for client presentation.

Use production-quality imagery, refined copy, and stable section structure at every stage.

The final goal is a polished luxury wedding/private events website that can impress real clients and convert visitors to WhatsApp inquiries.

## Image rule

Images are the main selling asset of this website.

Use approved client images whenever available.

Generated or interim imagery must match the final art direction and be saved under the same production paths expected by the code.

Every image must feel:
- premium
- cinematic
- romantic
- elegant
- clear
- emotionally desirable

Every image must make the visitor feel:
“I want this atmosphere for my wedding/event.”

Global image treatment:
- warm tone
- slightly darker blacks
- soft gold highlights
- less saturation
- cinematic contrast
- no harsh filters
- no over-sharpening
- never too dark

Wedding clients must clearly see:
- flowers
- table styling
- food
- candles
- light
- décor
- atmosphere
