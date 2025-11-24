## HomeService 
A modern platform and reliable household services in your local area. Built with a user-friendly design and effective search functionality.

## Setup & installation instructions

Clone the repo and install dependencies

```bash
  git clone https://github.com/emon-ahmed-60/HomeService.git
  cd HomeService
  npm install
```

Set up environment variables by creating a .env file in the root directory:
```bash
NEXT_PUBLIC_FIREBASE_API_KEY=Your_FIREBASE_API_KEY
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=Your_FIREBASE_AUTH_DOMAIN
NEXT_PUBLIC_FIREBASE_PROJECT_ID=Your_FIREBASE_PROJECT_ID
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=Your_FIREBASE_STORAGE_BUCKET
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=Your_FIREBASE_MESSAGING_SENDER_ID
NEXT_PUBLIC_FIREBASE_APP_ID=Your_FIREBASE_APP_ID
```

Run the application:

```bash
  npm run dev
```


    

## Route Summary

Our application uses Next.js file-based routing with client-side protection for core features.

### A. Public Routes (Accessible to Everyone)

| Path | Description |
| :--- | :--- |
| `/` | Application landing page. |
| `/services` | List of all services available. |
| `/services/[id]` | Dynamic route for viewing specific service details. |
| `/login` | Page for user sign-in and sign-up. |

### B. Protected Routes (Requires Authentication)

| Path | Description |
| :--- | :--- |
| `/add-service` | Form to create a new service listing. |
| `/manage-service` | Interface for managing existing service listings (view/delete). |