---
name: Route RSE
description: La page Certifications est accessible via /nos-engagements-rse (redirect de /certifications)
---

- Route principale : `/nos-engagements-rse` → composant `Certifications.tsx`
- Ancien chemin : `/certifications` → `<Redirect to="/nos-engagements-rse" />`
- Nav label : "Engagements RSE"
- Footer label : "Nos Engagements RSE"

**Why:** Brief V3 demande renommage de la page Certifications en "Nos Engagements RSE".
**How to apply:** Toujours lier vers `/nos-engagements-rse`, ne pas ressusciter `/certifications` comme route active.
