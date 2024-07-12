### Tech Stack:

- Next.js
- Supabase


#### To-:

- NEXTJS

  - [x] Installation
  - [x] Clean junks
  - [x] Project structure
  - [ ] Dependencies
    - [x] @supabase/supabase-js @supabase/ssr
    - [x] node-mailjet
    - [x] zod
    - [x] react-hook-form
    - [x] @hookform/resolvers
    - [ ] Shadcn
  - [ ] 

- BACKEND

  - [ ] Supabase auth
    - [x] Package @supabase/supabase-js @supabase/ssr
    - [x] Environment variables
    - [x] Utiliy functions for client
    - [x] Middleware to refresh autht tokens and store them
    - [x] Sign in page (call supabase signupfunctions)
    - [x] Auth confirmation if email confirmation is turned on (default)
    - [x] Access user info from server component
    - [x] Sign out
    - [x] Route protection logic
      - [x] !user & in protectedPaths => sign-in 
      - [x] user & in authPaths => user

    - OTP verification using Custom SMTP (mailjet integration)
      - [x] Grab email_otp via createClient with supabase.auth.admin.generateLinfor elavated priviliges (administrative context)
      - [x] Sign up procedure:
        - [x] Update params on sign up
        - [x] Update form to OTP verification
      - [x] Env variables (public & secret)
      - [x] Link mailjet to send OTP
      - [x] Get email on params if possible
      - [x] Clean the mess you made 
      - [x] Zod validation
        - [x] auth-form
        - [x] otp-form
      - [x] Unexport OtpSchema & make a solution for passing zod validated otp to verifyOtp with useActionState
      - [ ] Rate limit

    - [x] Login function with zod validation
    - [x] Clean up
    - [x] Actions/auth folder (to be replaced by route files)

    - [ ] Route files for auth
      - [x] @lib/auth/service.ts
      - [x] @app/api/auth/login/route.ts
      - [x] @lib/auth/api.ts
      - [x] @hooks/useAuth.ts
      - [x] Actually make it work
      - [x] Login
      - [x] Auth provider (create/useContext)
        - [x] @providers/authProvider.tsx
        - [x] Modify useAuth hook to sync with auth provider
        - [x] Link auth form to useAuth hook
      - [x] KISS
        - [x] Move login service to api layer (reduces complexity and applies KISS method)
      - [x] Better solution for api layer
        - [x] Error handling
      - [x] Signup
      - [x] Clean out authForm 
      - [ ] DRY
        - [x] @providers/authProvider.tsx
        - [ ] @auth/api.ts
      - [x] @hooks/useAuthAction.ts
      - [ ] Otp verification

    - Types

      - [x] LoginContextType
      - [x] Auth

    - Better error handling
      - [x] Otp
      - [x] Sign-up
      - [x] Login

    - [ ] Google auth
    - [ ] Facebook auth

  - From Theo's new tutorial
    - [ ] T3 env
    - [ ] Middleware filter (esp for api/trpc routes)
    - [ ] Metadata
    - [ ] Core functions to route handlers for CRUD management

  - Tests
    - [ ] Hooks
    - [ ] Providers
    - [ ] Reducers
    - [ ] Utils

  - Misc
    - [ ] Make use of useReducer
      - Just like useActionState but use when managing multiple switch cases

  - [ ] Drizzle ORM
    - [ ] Install dependencies
    - [ ] Setup env
    - [ ] Drizzle connection (db/index.ts)
    - [ ] Define Schema
    - [ ] Config file
    - [ ] Seed test
    - [ ] Link with supabase auth
    - [ ] Info addition
      - [ ] Username
  - [ ] 

- DOCS
  
  - [ ] 

- STRUCTURE

  - [x] Lib 
    - [x] supabase/
    - [x] auth/
  - [x] App/api
  - [x] Hooks
  - [x] Types
  - [x] Providers
  - [x] Auth stucture
  - [ ] Utils

- FRONT-END UI/UX (Figma/Photoshop)

  - [ ]

- STYLING

  - [ ] tailwind variables
    - [ ] fonts
    - [ ]
  - [ ] Tailwind merge (utils.ts)
  - [ ]

- MISCS

  - [x] Neovim/neovide
  - [ ] Powershell auto-suggestion

- TO KEEP IN MIND

  - Optimized/maintainable code
  - KISS
  - DRY

