# Alex Carluccio — Portfolio

Sito portfolio personale. Statico, zero dipendenze, pronto al deploy.

## File inclusi

```
index.html   → Sito principale (responsive, SEO ottimizzato)
robots.txt   → Istruzioni per i crawler di Google
sitemap.xml  → Mappa del sito per Google Search Console
```

## Setup Formspree (form di contatto)

1. Vai su https://formspree.io e crea un account gratuito
2. Crea un nuovo form e copia il tuo **Form ID** (es. `xpwzabcd`)
3. In `index.html`, cerca questa riga:
   ```html
   action="https://formspree.io/f/YOUR_FORMSPREE_ID"
   ```
   e sostituisci `YOUR_FORMSPREE_ID` con il tuo ID
4. La tua email rimane privata — Formspree fa da intermediario

Il piano gratuito di Formspree include 50 invii/mese.

## Personalizzazioni necessarie

Cerca e sostituisci in `index.html`:

| Placeholder              | Sostituire con                          |
|--------------------------|------------------------------------------|
| `YOUR_LINKEDIN`          | Il tuo username LinkedIn                 |
| `YOUR_GITHUB`            | Il tuo username GitHub                   |
| `YOUR_FORMSPREE_ID`      | Il tuo Form ID da formspree.io           |
| `https://alexcarluccio.dev` | Il tuo dominio definitivo            |

In `sitemap.xml` e `robots.txt` sostituisci anche:
- `https://alexcarluccio.dev` → il tuo dominio definitivo
- `2025-07-01` → data di ultimo aggiornamento

## SEO — cosa è già incluso

- Meta tags completi (description, keywords, author)
- Open Graph (condivisione su social)
- Twitter Card
- Canonical URL
- Structured Data JSON-LD (schema.org/Person)
- robots.txt con sitemap reference
- sitemap.xml con priorità e frequenza
- HTML semantico (h1, h2, h3, article, section, nav, footer)
- Attributi aria-label per accessibilità

## Deploy consigliati

**Vercel** (gratuito, semplicissimo):
```bash
npm i -g vercel
vercel --prod
```

**Netlify** (drag & drop):
- Vai su https://netlify.com
- Trascina la cartella del progetto

**GitHub Pages**:
- Push su un repo GitHub
- Abilita Pages nelle impostazioni del repo

## Google Search Console

Dopo il deploy:
1. Vai su https://search.google.com/search-console
2. Aggiungi il tuo dominio
3. Invia la sitemap: `https://tuodominio.dev/sitemap.xml`
