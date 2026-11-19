# Copy (written before layout, taste-skill copy.md rules)

Sources: the old index.html (commit dd0dd22), the Leventa READMEs (leventa-fe, leventa-backend), GitHub repo
creation dates for project years. Nothing else is assumed; see "Assumptions" at the end.

## Head

- title: `Muhammad Ilham Ghazali: Flutter apps for iOS and Android`
- description: `Junior Flutter developer in Bogor, Indonesia. Apps for iOS and Android with three teams since 2025, Flutter Developer Expert certificate, apps on Google Play.`

## Nav

Ilham Ghazali · Work · Experience · About · Contact · button **Email me**

## Hero (film)

- h1: **Flutter apps for iOS and Android**
- lead: I'm a junior mobile developer in Bogor. Since 2025 I've built Flutter apps with three teams, earned the Flutter Developer Expert certificate, and have apps live on Google Play.
- buttons: **See the apps** (#work) · **See my experience** (#experience)
- play: **Watch LockFlare** / small: YouTube Short, 0:30 → *no duration known*, so the small line is "A YouTube Short"

## Work

- h2: **Apps I've shipped.** <muted>Each with a demo, the code or the live site.</muted>
- filter: All · Mobile · Web (only when both types have 2+ projects)
- card links: **Watch the demo** · **Read the code** · **Open the site**

### Featured (order)

1. **Leventa** (2026, mobile): Property listing app where guests browse homes, marketing staff manage listings and deals, and admins run the agency. Stack: Flutter, GetX, Go, Fiber, PostgreSQL, JWT.
2. **Disaster Radar Indonesia** (2026, web): Live map of earthquakes, floods, volcanoes and extreme weather in Indonesia, built on public data from BMKG, BNPB and PVMBG. Stack: Next.js, Tailwind CSS, Leaflet, REST API.
3. **Photo AI** (2025, mobile): Turns one uploaded photo into four art styles with Google's Gemini, with live progress and a saved-images gallery. Stack: Flutter, Gemini API, Firebase.
4. **MyPOS** (2024, mobile): Point-of-sale app for a farm supply store, with inventory, sales tracking and reports. Stack: Flutter, Bloc, Laravel.

## More apps

- h2: **More apps.** <muted>Smaller builds and study projects.</muted>
- rows: FindWorker (2024) "Find and hire workers, see their ratings and pay from an in-app wallet." · Task (2025) "Personal task manager with Firebase sign-in, real-time sync and light and dark themes." · LockFlare (2025) "Encrypts, decrypts and hashes text with classic and modern ciphers, including Hill cipher."
- button when more than 6: **Show all apps**

## Experience

- h2: **Experience with four teams.** <muted>Three mobile roles since 2025 and two years teaching at Gunadarma.</muted>
- rows:
  - Quetra Asia Klandesin, Serpong · Mobile developer · Jul 2025 to Feb 2026 · Built five client apps in Flutter, from warehouse and fleet tracking to HRIS, and cut reported bugs by 30% in the first release.
  - Pansus Studio, Bandung · Mobile developer · Aug 2025 to Mar 2026 · Built 80% of the core features of a food delivery app for customers, merchants and drivers in a team of two.
  - Kita Bantu Indonesia, Jakarta · Mobile developer · Mar 2025 to Jun 2025 · Led a team of four that shipped a working MVP in 8 weeks, from 20+ Figma screens.
  - Information Systems Lab, Gunadarma, Depok · Assistant and tutor · Oct 2023 to Jan 2025 · Taught C programming labs to 30+ students; average lab scores rose by 25%.
- link: **Read the full CV**

"two years teaching" was cut in the build: Oct 2023 to Jan 2025 is 15 months. Final run-on: "Three mobile roles since 2025 and one teaching role."

## Statement (word-highlight, dark band)

I take an app from the Figma file to the store listing: I build the screens to the design, agree the API with the backend developer, test each feature before release, and **keep it fast after launch**.

(36 words. Each clause is from the old resume: Figma screens at Pansus and Kita Bantu, API contracts at Quetra, feature testing at Pansus, 25% faster loading at Quetra.)

## About

- h2: **Ilham Ghazali, mobile developer in Bogor**
- p1: I studied Information Systems at Gunadarma University from 2022 to 2026 and finished with a GPA of 3.72.
- p2: I hold twelve Dicoding certificates, from Dart basics to Flutter Developer Expert and machine learning for Flutter, and Google Play Academy's store listing certificate.
- p3: I work in Flutter and Dart with GetX, Bloc and Provider, on Firebase, Appwrite, Laravel and Go backends, with Git and Postman.
- link: **Read the full CV** → reuse is a second label to one target, so About uses **See my certificates** to LinkedIn? No: no page lists them. About has no link; CV stays in Experience and footer.

## Close (footer, dark)

- h2: **Email me about your app**
- line: Freelance builds and full-time mobile roles.
- button: **Email me** (mailto:m.ilhamghazali@gmail.com)
- columns: Work (Featured apps, More apps) · Profile (Experience, About) · Elsewhere (GitHub, LinkedIn, Instagram, CV)
- legal: © 2026 Muhammad Ilham Ghazali

## Fixes from the old site

- photo_ai GitHub link was `github.com/github.com/IlhamGhaza/photo_ai` → `github.com/IlhamGhaza/photo_ai`.
- Task linked the GitHub profile → `github.com/IlhamGhaza/task_app` (its README embeds the same demo video, 6mpTsdOo7ho).
- Leventa stack was "Flutter, Gemini API, Firebase" → Flutter, GetX, Go, Fiber, PostgreSQL, JWT (both READMEs).
- Both phone numbers removed; email only.
- Indonesian summaries (Disaster Radar, FindWorker, MyPOS) translated to English.

## Assumptions to check

- Project years = the GitHub repo's creation year (Leventa 2026, Disaster Radar 2026, Photo AI 2025, LockFlare 2025, Task 2025, MyPOS 2024, FindWorker 2024).
- The degree is finished (old site: Sep 2022 to Aug 2026, "8th semester"). If not yet graduated, change "finished with" to "have".
- "Apps live on Google Play": from the old site's "published apps on Google Play Store"; no store links were on the old site.
- FindWorker summary is read from its promo screenshot (wallet, ratings) since the old text was one line.
