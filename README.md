# Mohamed Jamazi – CV Portfolio

## Structure

```
cv/
├── cv-frontend/   Angular 17 standalone SPA
└── cv-backend/    Spring Boot 3 REST API
```

## Lancer le projet

### Backend (Spring Boot + MySQL XAMPP)
1. Démarrer **XAMPP** → lancer **Apache** + **MySQL**
2. La base `cvdb` est créée automatiquement au premier lancement
```bash
cd cv-backend
mvn spring-boot:run
# Tourne sur http://localhost:8080
```
3. Voir les messages : phpMyAdmin → http://localhost/phpmyadmin → base `cvdb` → table `contact_messages`

### Frontend (Angular)
```bash
cd cv-frontend
npm install
ng serve
# Tourne sur http://localhost:4200
```

## Photo de profil
Placer votre photo à : `cv-frontend/src/assets/images/profile.jpg`

## API Contact
`POST http://localhost:8080/api/contact`
```json
{
  "nom": "...",
  "email": "...",
  "sujet": "...",
  "message": "..."
}
```
