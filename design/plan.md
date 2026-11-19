# Design plan: ilhamghaza.github.io redesign ("Studio Stone")

Kind: **service** (a person is hired: recruiters and freelance clients). `data-type="service"`, `site-kind="other"`.

Deal (taste-skill scripts, 2026-11-19), and what was built:

| Part | Dealt | Built | Why |
|---|---|---|---|
| Hero | `photo` (--has photo,film), then `split` (--has film,ui) | `film` | The brief fixes the film hero (LockFlare screenshot + play to the YouTube Short). The site has no photograph of the work, so `photo` had nothing to show. |
| Palette | card-pastels / cool-white-slate / studio-grey | Studio Stone through `start.mjs brand` | The brief fixes the palette; none of the three dealt fits it. |
| Type | source-serif / instrument / work-sans | `besley` (Besley / Albert Sans) from the same library | The brief fixes it; `besley` is a pairing the kit can deal for service. |
| Moment | none ("service gets no moment") | `word-highlight` in the statement | The brief asks for exactly this one moment. Waived, see waivers.json. |
| Nav | `nav-centre` | `nav nav--centre` | as dealt |
| Footer | `footer-columns` | `footer-dark` (ground-inverse) | The brief fixes a dark closing footer (#26251e); footer-dark is on the service list. |
| Close | `close-type` | `close-type` | as dealt: "Email me about your app" + one big button |
| Rhythm | `dark-band` | statement section on `.ground-inverse` | as dealt; it is not next to the dark footer (About sits between). |
| Buttons | `block` | `data-buttons="block"` | as dealt |
| Mark | `stack` | `data-mark="stack"` | as dealt |

ui-ux-pro-max `--design-system "premium developer portfolio mobile engineer" --variance 5 --motion 3 --density 3`:
run 1 returned *Liquid Glass*, black + gold (#A16207), Cormorant/Montserrat; run 2 ("editorial minimal developer
portfolio") returned *Dark Mode OLED* with green #22C55E and JetBrains Mono. Run 1 is premium but glossy and gold;
run 2 is the banned black + neon. Kept from it: spacious density (24-96px), subtle motion (150-300ms hovers),
the pre-delivery checklist and the accessibility rules. Palette, fonts and effects come from the brief.

## Tokens

| Name | Hex | Role |
|---|---|---|
| stone | `#dfdedb` | page ground (`--p-bg`) |
| stone-2 | `#d3d2ce` | surface: More apps band, frames behind `contain` images |
| ink | `#26251e` | text, hairlines (12-15%), hero text box, statement band, footer |
| muted | `#5a5850` | meta, dates, run-on halves of headings (5.3:1 on stone, 4.7:1 on stone-2) |
| blueprint | `#2456d6` | the one accent: primary button, links, focus ring, the statement's accent phrase |
| inverse surface | `#313029` | the step inside dark grounds (printed by start.mjs) |

Type: Besley 400 for h1, h2, card titles and the statement (tracking -2% to -2.6%); Albert Sans 400/500 for
everything people read and every control. Self-hosted variable woff2, latin subset, two files in `/fonts`.
Sizes from system.css (h1 72/40, h2 48/30, lead 20, body 16/26, labels 13/500 sentence case).

Radius `soft` (8/12/20). Buttons `block`. Spacing scale 4…128 from system.css.

## Layout (1440)

```
┌ nav ─ [stack] Ilham Ghazali ─────── Work  Experience  About  Contact ─────── [Email me] ┐
│                                                                                          │
│ ┌──────────────── film frame (LockFlare, dark) across the .wrap ───────────────────────┐ │
│ │                                         phone render                                 │ │
│ │ ┌ dark text box ───────────────┐                                                      │ │
│ │ │ Flutter apps for iOS          │                                                     │ │
│ │ │ and Android                   │                                    (▶) Watch       │ │
│ │ │ lead, 2 sentences             │                                        LockFlare   │ │
│ │ │ [See the apps] [See my exp.]  │                                                     │ │
│ │ └───────────────────────────────┘                                                     │ │
│ └──────────────────────────────────────────────────────────────────────────────────────┘ │
├ #work (h = content) ──────────────────────────────────────────────────────────────────────┤
│ h2 Apps I have shipped. muted run-on                         [All] [Mobile] [Web]  (≥2 each)│
│ ┌ card span-6 ─────────────┐ ┌ card span-6 ─────────────┐                                │
│ │ screenshot 3:2           │ │ screenshot 3:2           │                                │
│ │ Title · year             │ │ Title                    │                                │
│ │ summary                  │ │ summary                  │                                │
│ │ stack line               │ │ stack line               │                                │
│ │ Watch the demo  Read …   │ │ Open the site  Read …    │                                │
│ └──────────────────────────┘ └──────────────────────────┘                                │
│ odd count: last card span-12, image span-7 + text span-5 (horizontal)                     │
├ #more (surface) ──────────────────────────────────────────────────────────────────────────┤
│ h2 More apps. muted                                                                       │
│ rows span-5 (name, one line, year)    │  peek frame span-6 start-7 (image of active row)  │
│ [Show all apps] when > 6                                                                  │
├ #experience ──────────────────────────────────────────────────────────────────────────────┤
│ h2 Experience …                                                                           │
│ rows: company + role │ one concrete result │ dates          (no photo: waived)            │
├ #how (ink band, word-highlight) ──────────────────────────────────────────────────────────┤
│ "I take an app from the Figma file to the store listing: … *keep it fast after launch*."  │
├ #about ───────────────────────────────────────────────────────────────────────────────────┤
│ text span-6: education, certificates, tools  │ portrait span-5 start-8, multiply on stone  │
├ footer.closing.footer--dark (ink) ────────────────────────────────────────────────────────┤
│ Email me about your app  [ Email me ─────────────── ]                                     │
│ mark + name │ Work │ Experience │ Elsewhere: GitHub LinkedIn Instagram CV │ © 2026         │
└──────────────────────────────────────────────────────────────────────────────────────────┘
```

Alignment: everything on the `.wrap` lines (x 80 / 1360), left-aligned, split line at column 7 (x 732).
390: one column, film frame then the words below it on the ground (the hero's phone layout), buttons full width.

## Principles

1. **Quiet stone, one blue.** 90%+ neutral; blueprint blue only where something can be pressed or must be read first.
2. **The apps are the pictures.** Every visual is a real screenshot of Ilham's own apps; no stock, no drawn icons, no fake UI.
3. **Precision over decoration.** Hairlines in ink at 12%, no shadows, no gradients, no glass. Hover = 2px lift / 1.02 zoom only.
4. **One moment.** Only the statement moves with the scroll; nothing fades in.
5. **Data drives the work list.** `data/projects.json` is the only place a project lives; the HTML holds a `<noscript>` list for crawlers.

## Review against "AI-generated" tells (frontend-design)

| Tell | Plan before | Changed to |
|---|---|---|
| Cream + serif + terracotta | Stone #dfdedb + Besley could read as "cream + serif" | Kept the brief's stone (it is grey, not cream: hue ~45°, chroma near 0) and the accent is cold blueprint blue, not clay. No warm accent anywhere. |
| Dark ground + one bright accent | Ink statement band + ink footer | The dark is warm ink #26251e, not #0B0B0B, and the accent on dark is the light stone, not neon. Blue appears on the dark band only as the one accent phrase. |
| SaaS card kit (identical rounded cards + soft shadow) | Featured projects as 4 identical cards | No shadow, no border box: open cards (image frame with radius, text on the ground). The last odd card turns horizontal, the More apps list is rows, Experience is rows: three different structures. |
| ALL-CAPS eyebrow above headings, 01/02/03 | old site had both | None. Headings carry a muted run-on instead of a label. Experience rows use dates, which are real data. |
| Middle-dot meta strings, "→" appended to links | stack shown as "Flutter · GetX · Go" | Stack written as a plain comma list in one muted line; buttons carry the kit's drawn arrow only on the primary. |
| One accented word in the headline | — | The h1 has none; the single colour-inside-a-phrase is the statement's accent phrase, which the brief asks for. |
| Fade-and-slide on every section | — | None; only `word-highlight`. |

## Skill conflicts and how they were decided

Priority: premium feel > taste-skill > ui-ux-pro-max; the user's own brief above all three.

1. **Gold/glass (ui-ux-pro-max) vs calm stone (brief).** Brief wins; ui-ux-pro-max used for checklists only.
2. **Google Fonts link (taste-skill) vs self-host (brief).** Brief wins: `/fonts/*.woff2` with `@font-face`, same families the kit deals.
3. **No moment on a service page (taste-skill) vs word-highlight (brief).** Brief wins; the kit's own `word-highlight` module is used so it stays reduced-motion safe. Waived.
4. **Hero deal photo/split (taste-skill) vs film (brief).** Brief wins; the kit's `hero-film` markup is used.
5. **"Never print an email" (taste-skill, for contacts the brief does not give) vs mailto (brief).** The brief gives the address, so it is used as given in a `mailto:` button; the address itself is not printed as text.
6. **"One section per screen, exactly 1 or 2 screens" vs a list that grows.** Waived for #work only (and #more when expanded).
7. **Every section shows a picture (taste-skill) vs no real photos for Experience (brief).** Waived; no stock.
8. **Premium vs taste "words per screen 34 on service".** Copy kept short, but the lead and the experience results are the proof a recruiter reads; slight overrun accepted if the checker warns.
