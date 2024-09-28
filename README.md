# jje

### Tech Stack:

Nextjs (build tool) </br>
React (component base) </br>
Typescript (main language) </br>
Tailwind & Sass (styling) </br>
Motion & Lenis Scroll (animations) </br>
React Three fiber (3d rendering) </br>
Drizzle (ORM) </br>
Docker (docker compose) </br>
Next Auth (Auth.js) </br>
MySQL (RDBMS) </br>
Avien (managed database) </br>
Git (version control) </br>
Cloudflare (hosting/deployment) </br>

Neovim </br>
Docker Desktop </br>
Figma </br>
Adobe Photoshop </br>

#### To-do:

- NEXTJS

  - [x] New nextjs app (latest version)
  - [x] App/project structure (app router)
  - [x] Remove unecessary/unused components/styling
  - [ ] Bun????
  - [ ] Install Packages/dependencies
    - [x] Tailwind prettier (auto class sort)
    - [-] Sass (unsupported on next v15)
    - [ ] Motion
    - [ ] Lenis scroll
    - [ ] R3F
    - [ ] Next Auth
    - [ ] drizzle
  - [ ] Deploy on Cloudflare
    - [ ] Modify pages to run on edge
    - [x] @cloudflare/next-on-pages package
    - [x] nodejs_compat
    - [x] node version variable
    - [ ] Custom domain
  - [ ] Project title & description
  - [ ]

- APP STRUCTURE
- [x] Improvise app router

```
jje/
├──design/
│  └──design.png
├──web/
│  ├──.next/
│  ├──app/
│  │  ├──(main)/
│  │  ├──(root)/
│  │  └──layout.tsx
│  ├──components/
│  │  └──example.tsx
│  ├──fonts/
│  │  └──font.ttf
│  ├──layouts/
│  │  └──Root.tsx
│  ├──lib/
│  ├──node_modules/
│  ├──public/
│  │  └──image.png
│  ├──styles/
│  │  └──globals.css
│  ├──types/
│  │  └──data.ts
│  ├──.eslintrc.json
│  ├──.gitignore
│  ├──next.env.d.ts
│  ├──next.config.ts
│  ├──package-lock.json
│  ├──package.json
│  ├──postcss.config.mjs
│  ├──tailwind.config.ts
│  └──tsconfig.json
└──README.md
```

- FRONT-END UI/UX (Figma/Photoshop)

  - [ ] (not to be prioritize rn as we need to focus more on the backend)
  - [ ] Link Back-end & new branch (initial)
    - [ ] Header
    - [ ] Root
  - [ ] Color palette
  - [ ] Fonts
    - [ ] Helvetica
    - [ ] Garamond
    - [ ] Century
    - [ ] Badoni
    - [ ] Futura
  - [ ] 404 page not found error route

- BASIC

  - [x] next link/routing initial

- STYLING

  - [-] Implement sass (unsupported on next v15)
  - [ ] Additional styles
    - [x] Utils
    - [ ] Fonts
    - [-] \_Variables
  - [x] Tailwind method
    - [x] Post-css import plugin (imports)
  - [ ] Tailwind config setup
    - [ ] Fonts/typography
    - [ ] Colors
    - [ ]

- BACK-END

  - [x] (drizzling still)
  - [x] (but i'll kill it trust me)
  - [x] Drizzle (initial setup)
    - [x] Packages
    - [x] Docker compose setup
    - [x] Database connection db/index.ts
    - [x] env.ts (typesafe url's)
    - [x] Schema
    - [x] drizzle.config.ts
    - [x] Drizzle kit
    - [x] Drizzle studio
    - [x] .env
    - [x] Db push
  - [x] Docker/docker-compose
  - [-] Reverting to PostgreSQL (no free mySQL managed and vps database & no cheap local machine)
  - [ ] HTTP req routes handlers (crud)
    - [ ] where to put it?
  - [ ] Client/server management
  - [ ] Avien for mysql managed database
  - [ ]
  - [x] Authentication/sign-in/login nextauth (auth.js)
    - [x] Facebook provider
    - [x] Google Provider
    - [x] Sign-in (log-in)
    - [x] Sign-out (log-out)
    - [x] Session management
    - [ ] Redirect to sign-in page & back
    - [ ] Account deletion
  - [ ] Rating
  - [ ] Commenting
  - [ ] Notification
  - [ ] Testimonials
  - [ ] Visitors count
  - [ ] Admin page
    - [ ] Manage testimonials/comments
  - [ ] Contact/Emailing
  - [ ]
  - [ ] File sharing/download
  - [ ] JJE email/gmail
    - [ ] Link google gloud & facebook app provider
  - [ ]

- MISCS

  - [x] Prettier/formatting (vscode & source code)
  - [x] Vscode intellisense priority
  - [ ] Powershell autosuggestion
  - [x] Seperate folders (design and web)
  - [ ] Experiment with mySQL
  - [ ] Github student developer pack
  - [ ] Sorry na malala

- README

  - [ ] Initial
    - [ ] Tech Stack
    - [ ] Todo shit
  - [ ]

- GIT

  - [ ] Issues (github cli)
  - [ ] Code review
  - [x] Fork initial
    - [x] Branch off main
    - [x] Check pull requests on main repo
    - [x] Merge and rebase
  - [ ] Back-end linking branch for deployment
  - [ ] New branch for jje front-end
  - [ ]

- GOAL

  - Ibalik ang masakit na nakaraan
  - Back-end

#### Not-to-do

- BE INCONSISTENT
