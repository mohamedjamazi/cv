# 🚀 Guide de déploiement — CV en ligne (gratuit)

Architecture en production :

```
Vercel (Angular)  ──HTTPS──>  Render (Spring Boot)  ──>  Railway (MySQL)
   frontend                       backend                   base de données
```

---

## Étape 0 — Mettre le code sur GitHub

1. Crée un compte sur https://github.com (si tu n'en as pas).
2. Crée un nouveau repo **vide** nommé `cv` (sans README).
3. Dans le dossier `C:\Users\moham\Desktop\cv`, exécute :

```bash
git init
git add .
git commit -m "Initial commit - CV portfolio"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/cv.git
git push -u origin main
```

> ⚠️ Le `.gitignore` exclut déjà `node_modules`, `target`, `.tools` et la grosse photo `DSC07995.JPG`.

---

## Étape 1 — Base de données MySQL (Railway)

1. Va sur https://railway.app → connecte-toi avec GitHub.
2. **New Project → Provision MySQL**.
3. Une fois créée, ouvre le service MySQL → onglet **Variables**. Note ces valeurs :
   - `MYSQLHOST`, `MYSQLPORT`, `MYSQLDATABASE`, `MYSQLUSER`, `MYSQLPASSWORD`
4. L'URL JDBC à utiliser plus tard sera :
   ```
   jdbc:mysql://MYSQLHOST:MYSQLPORT/MYSQLDATABASE?useSSL=false&serverTimezone=UTC&allowPublicKeyRetrieval=true
   ```

---

## Étape 2 — Backend Spring Boot (Render)

1. Va sur https://render.com → connecte-toi avec GitHub.
2. **New → Web Service** → sélectionne ton repo `cv`.
3. Configuration :
   - **Root Directory** : `cv-backend`
   - **Runtime** : `Docker` (Render détecte le `Dockerfile`)
   - **Instance Type** : `Free`
4. Dans **Environment → Add Environment Variable**, ajoute :

   | Clé | Valeur |
   |---|---|
   | `SPRING_DATASOURCE_URL` | `jdbc:mysql://...` (URL de l'étape 1) |
   | `SPRING_DATASOURCE_USERNAME` | `MYSQLUSER` |
   | `SPRING_DATASOURCE_PASSWORD` | `MYSQLPASSWORD` |
   | `CORS_ALLOWED_ORIGINS` | `https://ton-site.vercel.app` (rempli à l'étape 3) |

5. **Create Web Service**. Render build l'image Docker (~3-5 min).
6. Note l'URL finale, ex : `https://cv-backend-xxxx.onrender.com`

> 💤 Le tier gratuit Render « s'endort » après 15 min d'inactivité. Le 1er appel après réveil prend ~30s, c'est normal.

---

## Étape 3 — Frontend Angular (Vercel)

1. **Avant de déployer**, mets l'URL du backend dans :
   `cv-frontend/src/environments/environment.prod.ts`
   ```ts
   apiUrl: 'https://cv-backend-xxxx.onrender.com/api',
   ```
   Puis `git add . && git commit -m "set prod api url" && git push`.

2. Va sur https://vercel.com → connecte-toi avec GitHub.
3. **Add New → Project** → importe ton repo `cv`.
4. Configuration :
   - **Root Directory** : `cv-frontend`
   - **Framework Preset** : `Angular` (ou « Other » — le `vercel.json` gère le reste)
5. **Deploy**. Tu obtiens une URL, ex : `https://cv-mohamed.vercel.app`

6. **Retourne sur Render** → variable `CORS_ALLOWED_ORIGINS` → mets l'URL Vercel exacte → **Save** (le backend redémarre).

---

## ✅ Vérification finale

1. Ouvre ton URL Vercel.
2. Va sur la section **Contact**, remplis et envoie un message.
3. Vérifie dans Railway → MySQL → **Data** → table `contact_messages`.

---

## 🔧 Récapitulatif des variables d'environnement (backend)

| Variable | Exemple | Où |
|---|---|---|
| `SPRING_DATASOURCE_URL` | `jdbc:mysql://host:3306/railway?...` | Render |
| `SPRING_DATASOURCE_USERNAME` | `root` | Render |
| `SPRING_DATASOURCE_PASSWORD` | `xxxxx` | Render |
| `CORS_ALLOWED_ORIGINS` | `https://cv-mohamed.vercel.app` | Render |
| `PORT` | *(auto par Render)* | Render |

---

## Alternatives gratuites

- **Frontend** : Netlify, GitHub Pages, Cloudflare Pages
- **Backend** : Railway (même projet que la DB), Fly.io, Koyeb
- **MySQL** : Aiven (free tier), Clever Cloud
