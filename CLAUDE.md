# CynteraTech Website — Claude Code Instructions

## What This Is
The public CynteraTech website. Built on React + Vite + TypeScript + Tailwind + shadcn/ui.
Deployed at cynteratech.com via nginx Docker container behind Traefik on the CynteraTech VPS.

## Stack
- React + Vite + TypeScript
- Tailwind CSS + shadcn/ui + Lucide React icons
- nginx serving static dist/ folder
- Traefik for SSL and routing
- Cloudflare DNS

## Key Paths
- Project: /root/projects/cynteratech-website/
- Build output: /root/projects/cynteratech-website/dist/
- Docker config: /root/docker/cynteratech-website/docker-compose.yml
- Domain: cynteratech.com
- VPS IP: 187.124.83.53

## Session Prompt
Read the session prompt from Notion before every session:
Notion → 🌐 CynteraTech Website → ⚡ Session Prompt

## Rules
1. Read ui-ux-pro-max AND frontend-design skills before writing any code
   - /home/coder/root/cynteratech-skills/frontend-design/SKILL.md
   - /home/coder/root/.claude/skills/ui-ux-pro-max/SKILL.md
2. No gradient text — ever
3. No glowing orbs, particle effects, or animated blobs
4. No stock photography
5. Single accent color only — #2563eb or #06b6d4
6. Dark background: #0a0a0a
7. npm run build must pass before reporting done
8. Verify cynteratech.com, /privacy-policy, and /terms all return 200 after deploy

## Deploy Process
1. npm run build
2. docker compose up -d from /root/docker/cynteratech-website/
3. Verify all 3 URLs live

## Must NOT Happen
- No gradient text
- No glowing effects or particle backgrounds
- No stock photos
- No Lovable placeholder content left in
- No Atlas phone number on site
- No testimonials or fake social proof
- No reporting done without npm run build passing
