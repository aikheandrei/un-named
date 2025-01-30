### Tech Stack:

- Next.js
- Supabase


#### To-do:

- NEXTJS

  - [x] Installation
  - [x] Clean junks
  - [x] Project structure
  - [ ] Dependencies
    - [x] @supabase/supabase-js @supabase/ssr
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
    - [x] Otp
      - [x] Sign in with OTP
      - [x] Verify OTP
      - [x] useActionState
    - [ ] Custom SMTP (mailjet integration)
      - [x] Grab email_otp via createClient with supabase.auth.admin.generateLinfor elavated priviliges (administrative context)
      - [ ] Sign up procedure:
        - [ ] Update params on sign up
        - [ ] Update form to OTP verification (twmerge)
      - [ ] Env variables (public & secret)
      - [ ] 
    - [ ] Info addition
      - Username
  - [ ] Drizzle ORM
    - [ ] Link with supabase auth
  - [x] lib & utils folder

- FRONT-END UI/UX (Figma/Photoshop)

  - [ ]

- STYLING

  - [ ] tailwind variables
    - [ ] fonts
    - [ ]

- MISCS

  - [x] Neovim/neovide
  - [ ] Powershell auto-suggestion

- TO KEEP IN MIND

  - Optimized/maintainable code
  - KISS

