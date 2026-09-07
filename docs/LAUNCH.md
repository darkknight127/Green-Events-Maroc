# Static hosting, search and analytics

Copy .env.example to .env.local and fill in:

- VITE_SITE_URL: your final HTTPS domain, without a path or trailing slash.
- VITE_GA_MEASUREMENT_ID: your GA4 measurement ID (G-…). Leave empty to disable Analytics completely.

Run npm run build after changing either value. Upload dist to your static host.
Vite already creates a static export; output = export is not a Vite option.
Both /index.html and /testimonials/index.html contain rendered French content,
page-specific metadata and LocalBusiness structured data. The browser hydrates
these pages to enable animation and language switching. Configure the host to serve
directory index files and redirect /testimonials to /testimonials/.
Keep unknown URLs as genuine 404s rather than rewriting every URL to the homepage.

The final domain enables absolute social-image URLs, canonical URLs and sitemap.xml.
robots.txt is always generated. Add the published domain to Google Search Console,
verify ownership, and submit /sitemap.xml. Indexing and ranking are controlled by
search engines; metadata cannot guarantee visibility for every keyword.
French is the indexed default. English is available through the language switcher;
separate indexed English URLs/hreflang would require a future language-routing change.

Analytics loads only in a production build with a valid, nonempty ID.
Enable GA4 enhanced measurement and its browser-history page-change tracking.
The Google tag records page views; there is deliberately no second manual page-view
handler. contact_click events include only whatsapp, phone or email as a channel.
No contact details or WhatsApp message text are sent as custom event parameters.
Verify events in GA4 Realtime after configuring the ID and publishing.

Images are converted to 480/960/1600px WebP variants by npm run images:optimize.
This also runs before every build and skips unchanged outputs. Original photos
are preserved. Most content images use responsive srcsets and native lazy loading;
the hero remains immediately available. Browsers may fetch lazy images shortly
before they enter the viewport. The portfolio mounts only the selected slide and
two neighbours on each side. The five-step story remains ready to transition as
its section approaches. Hero video is still a separate network cost.

Reference: https://vite.dev/guide/static-deploy
Reference: https://developers.google.com/analytics/devguides/collection/ga4/views
Reference: https://developers.google.com/search/docs/appearance/google-images
