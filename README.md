## HomeService 
A modern platform and reliable household services in your local area. Built with a user-friendly design and effective search functionality.

## Setup & installation instructions


## 4. Route Summary

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