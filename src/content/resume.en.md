# Resume

Last updated: August 14, 2026

| Item | Details |
| --- | --- |
| Name | Ryota Taya (田矢 凌太) |
| Current status | Currently employed |
| GitHub | https://github.com/jouer-rt |

---

## Summary

I have experience in web backend development centered on Python and Django, building and operating infrastructure on AWS, and developing payment features with Stripe.

In developing e-commerce sites and web services, I have covered a wide range of phases: requirements gathering, design, implementation, testing, deployment, and monitoring/incident investigation. I am particularly strong in implementing APIs and business logic with Django, Stripe payments, scheduled batch jobs on AWS Lambda, log investigation with CloudWatch, and setting up CI/CD with GitHub Actions.

I currently also work with technologies such as Next.js/FastAPI, Swift/SwiftUI, and AI coding agents, building web services and iOS apps as personal projects.

---

## Applicable Experience, Knowledge & Skills

- **Web backend development**: Backend development of web applications centered on Python/Django. Implementation of APIs, authentication, payments, external service integrations, and batch processing, as well as maintenance and operation of systems running on AWS, log investigation, and CI/CD setup.
- **Payment feature development**: Design and implementation of payment features using Stripe, working with PaymentIntent, Invoice, SetupIntent, Subscription, Webhooks, and more. Coverage includes credit card payments, convenience store payments, recurring billing, invoicing, handling failed payments, and duplicate-payment prevention — not just the happy path, but error cases and incident response as well.
- **Infrastructure construction & operation**: Building and operating web applications and scheduled batch jobs using EC2, Aurora MySQL, Lambda, EventBridge, CloudWatch, Secrets Manager, GitHub Actions, AWS SAM, and more.
- **Testing & quality management**: Automated testing with pytest, Selenium, and Playwright; code quality management with ruff/pre-commit; and CI/CD setup with GitHub Actions.
- **Incident investigation & log analysis**: Chunked retrieval and root-cause investigation of large log volumes using CloudWatch Logs Insights and structured logging.
- **Adoption of new technologies**: Web service development with Next.js/FastAPI and iOS app development with Swift/SwiftUI. Practical use of AI development tools such as Claude Code and ChatGPT to streamline the development process from requirements definition through implementation, testing, and review.

---

## Work History

### Company A | Voice-synthesis software industry (approx. 50 employees) (June 2021 – present)

- **Business**: Development and sales of voice-synthesis creative software (desktop application) and related web services
- **Role / Position**: Web engineer (responsible for website, APIs, and infrastructure)

#### Project A-1: Development and operation of the web system for a voice-synthesis software service (June 2021 – present)

- **Overview**: Designed and built from scratch the service website, the authentication and payment APIs that integrate with the desktop software, and the infrastructure. After launch, responsible for additional web/infrastructure development for new products, plus maintenance and operation.
- **Phases**: Requirements gathering / Design / Implementation / Testing / Deployment / Monitoring & incident investigation
- **Responsibilities & achievements**:
  - Backend development with Django (authentication API, payment API, business logic)
  - Design and implementation of payment features with Stripe (credit card and convenience store payments, recurring billing, invoicing, handling failed payments, duplicate-payment prevention)
  - UI implementation with React/Next.js and integration with the backend
  - Building the Docker-based development environment and the production environment on AWS
  - Scheduled batch jobs with AWS Lambda + EventBridge; monitoring and log investigation with CloudWatch
  - CI/CD setup with GitHub Actions; automated test development with pytest, Selenium, and Playwright
- **Technical environment**:
  - Languages: Python, JavaScript, HTML/CSS
  - Frameworks: Django, Django REST Framework, React, Next.js
  - DB: MySQL / Amazon Aurora MySQL
  - Infrastructure: AWS (EC2, RDS/Aurora, Lambda, EventBridge, CloudWatch, Secrets Manager, SES, VPC, ALB, IAM, SAM)
  - Payments: Stripe
  - CI/CD: GitHub Actions, AWS SAM, Docker
  - Other: Nginx, uWSGI, Amazon Linux 2

### Company B | SES & contract development industry (March 2020 – May 2021)

- **Business**: Web service development through SES and contract work
- **Role / Position**: Engineer (project lead on some projects)

#### Project B-1: Development of an e-commerce site platform (October 2020 – May 2021)

- **Overview**: Frontend and backend development of an e-commerce site platform
- **Phases**: Implementation / Testing
- **Responsibilities & achievements**:
  - Development of login, payment, and search features
  - UI implementation and integration with the backend
  - Building the Docker-based development environment and developing tests
- **Technical environment**: PHP (Laravel), Vue.js, Sass, JavaScript, HTML/CSS, MySQL, Docker, GCE (Google Compute Engine)

#### Project B-2: Development of a live-streaming site (July 2020 – September 2020)

- **Overview**: Frontend development of a live-streaming site
- **Phases**: Implementation
- **Responsibilities & achievements**:
  - UI implementation with React and integration with the backend
- **Technical environment**: React, JavaScript, HTML/CSS

#### Project B-3: Development of an amusement-machine information site (March 2020 – June 2020)

- **Overview**: Greenfield development of an amusement-machine information site (as project lead)
- **Phases**: Design / Implementation / Testing
- **Responsibilities & achievements**:
  - Implementation of social login authentication and member registration/update/deletion features
  - Implementation of data retrieval from external APIs
  - Prototype implementation of a smartphone app with Flutter
- **Technical environment**: PHP, JavaScript, HTML/CSS, Dart (Flutter), MySQL

#### Project B-4: Renovation of the company's corporate website (March 2020 –)

- **Overview**: Renovation of the existing corporate website (as project lead)
- **Responsibilities & achievements**: Building the staging environment, WordPress plugin selection and theme fixes, introducing Basic authentication
- **Technical environment**: WordPress, PHP, JavaScript, HTML/CSS, MySQL

### Company C | Programming education industry (approx. 30 employees) (May 2018 – February 2020)

- **Business**: Operation of a one-on-one programming learning service
- **Role / Position**: Programming instructor → Product development dept. (data analysis engineer) → System development dept. (lead developer of the CRM system)

#### Project C-1: Maintenance, operation, and data-analysis platform development for the in-house CRM (December 2018 – February 2020)

- **Overview**: Review and improvement of service business workflows managed in Salesforce, and development of a customer data analysis platform (as development lead)
- **Phases**: Requirements gathering / Design / Implementation / Maintenance & operation
- **Responsibilities & achievements**:
  - Regular workflow reviews with each department, followed by workflow redesign and improvements
  - Handling Salesforce system errors
  - Development of a data-analysis platform connecting the Salesforce database with Google Sheets
- **Technical environment**: Salesforce (Apex), Python, Google Apps Script, AWS Lambda, Amazon API Gateway

#### Project C-2: Development of a customer–instructor matching system (September 2018 – November 2018)

- **Overview**: Systematized the previously manual matching of customers and instructors, while redesigning the data structure to enable data analysis (project lead; approx. 3 person-months)
- **Phases**: Design / Implementation / Testing / Maintenance
- **Responsibilities & achievements**:
  - Built a prototype to propose systematization, then carried it through from design documentation and tool selection
  - Created programs to automatically notify instructors of matching results and to document analysis results
  - Reduced the labor previously spent on manual matching
- **Technical environment**: Python, Google Apps Script, AWS Lambda, Amazon API Gateway

#### Project C-3: Other internal development & work (May 2018 – February 2020)

- As a programming instructor, taught a total of 4 students over 2 months (Ruby, PHP, C++). Created original curricula and contributed to curriculum standardization (May 2018 – August 2018)
- Development of a technical Q&A site (WordPress, Amazon EC2; project lead, approx. 1 person-month). Created a usage-measurement program and a Slack notification program (August 2018)
- Landing page production for the corporate website (HTML, CSS, JavaScript) (December 2019 – January 2020)
- Development of an expense-reimbursement automation system using Google Sheets (Google Apps Script) (February 2020)

---

## Certifications

- None

---

## Technical Skills

Legend — **Professional**: hands-on implementation and operation experience at work / **Personal**: currently used in personal projects / **Evaluated**: adoption, evaluation, or study experience (including architecture reviews and PoCs)

| Category | Technologies | Experience |
| --- | --- | --- |
| Languages | Python, PHP, JavaScript, SQL, HTML, CSS, Shell Script | Professional |
| Languages | Swift | Personal |
| Backend | Django, Django REST Framework, Django ORM, Django Signals, Django Cache Framework, Django Middleware, Django Authentication | Professional |
| Backend | REST API design & development, JWT authentication, HMAC-signed authentication, batch processing, async & scheduled jobs, external API integration, webhook implementation | Professional |
| Backend | FastAPI | Personal / Evaluated |
| Frontend | JavaScript, HTML/CSS, Django Template | Professional |
| Frontend | Next.js, React | Professional |
| Frontend | SwiftUI | Personal |
| Database | MySQL, Amazon Aurora MySQL, Django ORM (data extraction & investigation with SQL, index/collation configuration research, transaction design) | Professional |
| Database | PostgreSQL, pgvector | Personal / Evaluated |
| Database | SwiftData | Personal |
| Cloud (AWS) | EC2, RDS, Aurora MySQL, Lambda, EventBridge, CloudWatch, CloudWatch Logs / Logs Insights, Secrets Manager, SES, VPC, ALB, IAM, SAM, Lambda Layers, NAT Gateway, OIDC authentication | Professional |
| Web / app servers | Nginx, uWSGI, Linux, Amazon Linux 2 (including performance tuning such as process/thread counts) | Professional |
| Containers | Docker, Docker Compose (local development, CI, SAM builds) | Professional |
| CI/CD | Git, GitHub, GitHub Actions, AWS SAM, OIDC deployment, Makefile, pre-commit, ruff (static analysis, formatting, type checking, automated testing, deploy automation) | Professional |
| Payments | Stripe (PaymentIntent, SetupIntent, Invoice, InvoiceItem, Subscription, Payment Element, Webhook) / credit card, convenience store, Alipay, Link; recurring billing, invoices & receipts, failed payments & retries, duplicate-payment prevention | Professional |
| Testing | pytest, Django Test Framework, Selenium, Playwright (unit, integration, E2E, and API tests; Page Object Pattern, fixtures, screenshot/trace capture) | Professional |
| Monitoring & operations | CloudWatch, CloudWatch Logs Insights, structured logging, request-ID-based log tracing, Slack notifications, incident investigation, production maintenance & operation | Professional |
| Mobile (iOS) | Swift, SwiftUI, SwiftData, UserDefaults, FileManager, local notifications, WidgetKit, Firebase Analytics/Crashlytics, App Store Connect Analytics | Personal |
| Google Cloud | Cloud Run, Cloud Functions, Cloud Logging, Cloud Monitoring, Pub/Sub, Cloud Tasks, Firebase Hosting/Analytics/Crashlytics | Personal / Evaluated |
| AI / LLM | OpenAI API, Claude, Claude Code, ChatGPT, Codex, GitHub Copilot, Cursor, Devin, OpenHands, LangChain, LangGraph, RAG, vector search, pgvector, MCP research & evaluation | Personal / Professional (development support) |

---

## Strengths & Areas of Expertise

### 1. Web backend development with Django

Using Django and Django REST Framework, I can implement APIs, authentication, payments, business logic, caching, and external service integrations. I can add features, fix bugs, and refactor existing systems while verifying their specifications and the scope of impact.

### 2. Payment feature development with Stripe

I have designed and implemented payment features using PaymentIntent, Invoice, SetupIntent, Subscription, Webhooks, and more. Beyond the happy path, I can implement and troubleshoot with failed payments, duplicate processing, retries, asynchronous events, rate limits, and object conflicts in mind.

### 3. System operation and automation on AWS

I can build and operate systems combining EC2, Aurora MySQL, Lambda, EventBridge, CloudWatch, Secrets Manager, GitHub Actions, and more. This includes moving scheduled batch jobs to serverless, setting up CI/CD, log investigation, monitoring alerts, permission management, and network architecture design.

### 4. Incident investigation & log analysis

Using CloudWatch Logs Insights and application logs, I can pinpoint where errors occur and trace the flow of requests. I can investigate root causes by combining multiple sources of information: chunked retrieval of large log volumes, structured-log analysis, external API errors, payment errors, Django exceptions, and more.

### 5. Testing & CI/CD

Using pytest, Selenium, Playwright, GitHub Actions, and more, I can set up unit tests, API tests, E2E tests, and automated deployment. I can incrementally introduce linting, formatting, testing, and deploy automation into existing projects.

### 6. Development efficiency with AI tools

I use Claude Code, ChatGPT, Codex, GitHub Copilot, and other tools to streamline requirements gathering, writing implementation instructions, code review, test design, and bug investigation. Rather than adopting AI-generated code as-is, I develop while verifying consistency with specifications, maintainability, security, and test results.

---

## Personal Projects

### SoloOps (project & invoicing management web service for solo businesses)

I develop and operate SoloOps, a web service that centralizes clients, projects, tracked hours, invoices, and payments for freelancers and side businesses. I handle every stage on my own, from writing the requirements document, screen specifications, data model, and ADRs, through implementation, infrastructure construction, and operation.

- **Public demo**: https://solops.jouerworld.com/
- **Phases**: Requirements definition / Design / Implementation / Testing / Infrastructure construction / Deployment / Operation
- **Key implementation work**:
  - Backend development with Django REST Framework (session authentication, multi-tenant data isolation, optimistic locking, invoice PDF generation, audit logging)
  - Frontend development with Next.js/TypeScript
  - Building and operating an AWS serverless architecture (CloudFront + Lambda + Aurora Serverless v2) with Terraform
  - 600+ backend and 430+ frontend automated tests, plus E2E tests with Playwright
- **Technologies**: Python, Django REST Framework, TypeScript, Next.js, PostgreSQL, AWS (Lambda, Aurora Serverless v2, CloudFront), Terraform, Playwright

### Oshibell (countdown iOS app, in development)

I am developing Oshibell (推しベル), a countdown iOS app for fans of VTubers, cover singers, and streamers. Built as a backend-less MVP; I design and implement everything on my own, from the UI and data management to notifications, widgets, and social sharing.

- **Official site**: https://oshibell.jouerworld.com/
- **Phases**: Planning / Design / Implementation / Testing
- **Key implementation work**:
  - UI implementation with SwiftUI and data management with SwiftData
  - Local notifications and widgets with WidgetKit
  - Social-share image generation
  - Usage and crash tracking with Firebase Analytics/Crashlytics and App Store Connect Analytics
- **Technologies**: Swift, SwiftUI, SwiftData, UserDefaults, FileManager, iOS local notifications, WidgetKit, Firebase Analytics, Firebase Crashlytics, App Store Connect Analytics
