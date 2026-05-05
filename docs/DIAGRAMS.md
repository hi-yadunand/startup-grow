# StartupGrow Diagrams

These diagrams are written in Mermaid format and can be viewed in GitHub, VS Code Mermaid extensions, or Mermaid Live Editor.

## System Architecture

```mermaid
flowchart LR
  Founder["Startup Founder"] --> Frontend["Next.js Frontend<br/>Services, portfolio, quote form"]
  Admin["StartupGrow Admin"] --> Frontend
  Frontend --> API["Express.js API<br/>Validation and request handling"]
  API --> Database[("MongoDB<br/>service_requests")]
  Database --> API
  API --> Frontend
```

## DFD Level 0

```mermaid
flowchart LR
  Founder["Startup Founder"] --> Platform["0. StartupGrow Platform"]
  Platform --> Founder
  Platform --> Admin["Admin Team"]
  Admin --> Platform
  Platform <--> Store[("D1: Service Request Data")]
```

## DFD Level 1

```mermaid
flowchart LR
  Founder["Startup Founder"] --> P1["1. Explore Services"]
  Founder --> P2["2. Submit Service Request"]
  P1 --> P2
  P2 --> P3["3. Validate Request"]
  P3 --> Store[("D1: MongoDB Requests")]
  Store --> P4["4. Manage Requests"]
  Admin["Admin Team"] --> P4
  P4 --> Store
  P4 --> Admin
```

## ER Diagram

```mermaid
erDiagram
  SERVICE_REQUEST {
    string id PK
    string startupName
    string founderName
    string email
    string phone
    string city
    string stage
    string service
    string budget
    string message
    string status
    datetime createdAt
    datetime updatedAt
  }

  SERVICE {
    string id PK
    string name
    string category
    string description
  }

  ADMIN {
    string id PK
    string name
    string email
    string role
  }

  SERVICE ||--o{ SERVICE_REQUEST : selected_for
  ADMIN ||--o{ SERVICE_REQUEST : manages
```

## Module Diagram

```mermaid
flowchart TD
  StartupGrow["StartupGrow System"]
  StartupGrow --> UI["User Interface Module"]
  StartupGrow --> Service["Service Module"]
  StartupGrow --> Contact["Contact and Request Module"]
  StartupGrow --> Admin["Admin Module"]

  UI --> Pages["Home, Services, Portfolio"]
  Service --> Listings["SEO, PPC, Social, Content, Email, Web"]
  Contact --> Form["Request Form"]
  Contact --> API["Express API"]
  Admin --> Dashboard["Request Dashboard"]
  API --> Database[("MongoDB")]
  Dashboard --> API
```
