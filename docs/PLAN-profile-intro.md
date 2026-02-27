# Portfolio Website — Nguyễn Hoàng Hải

## Mục tiêu
Xây dựng website cá nhân (portfolio) giới thiệu bản thân và kỹ năng Frontend, phục vụ mục đích xin việc.

**Thông tin đã có:**
- Tên: Nguyễn Hoàng Hải
- 4+ năm kinh nghiệm Frontend
- Tech stack: React, Next.js, HTML, CSS, JS, TypeScript
- Nội dung chi tiết sẽ được user cập nhật sau

**Yêu cầu kỹ thuật:**
- Next.js (App Router)
- Deploy trên Vercel
- Song ngữ Việt-Anh (i18n) — default: Tiếng Việt
- Dark/Light mode toggle
- Animation vừa phải
- Thiết kế đẹp & sáng tạo

---

## 🎨 Design Commitment

> **Style:** Typographic Tension — Motion-Driven Portfolio
> - **Topological Choice:** Asymmetric hero layout với massive typography (tên + title chiếm 80% viewport), phá vỡ mô hình hero split truyền thống
> - **Risk Factor:** Chữ cái đầu tên được animate riêng biệt, tạo tension visually; content flow theo vertical narrative thay vì grid sections
> - **Readability Conflict:** Heading cực lớn (clamp 3rem-6rem) tạo contrast mạnh với body text nhỏ
> - **Cliché Liquidation:** Không dùng Bento Grid, không hero split 50/50, không glassmorphism, không mesh gradient

### Color Palette (Custom - không dùng default blue)

| Role | Light Mode | Dark Mode | CSS Variable |
|------|-----------|-----------|-------------|
| Background | `#FAFAF9` (warm white) | `#0C0C0C` (near black) | `--bg` |
| Surface | `#FFFFFF` | `#161616` | `--surface` |
| Text Primary | `#0C0C0C` | `#FAFAF9` | `--text` |
| Text Muted | `#57534E` | `#A8A29E` | `--text-muted` |
| Accent | `#EA580C` (warm orange) | `#F97316` | `--accent` |
| Accent Hover | `#C2410C` | `#EA580C` | `--accent-hover` |
| Border | `#E7E5E4` | `#292524` | `--border` |

### Typography
- **Heading:** `Archivo` — Sharp, technical, commanding
- **Body:** `Space Grotesk` — Clean, modern, readable
- **Scale:** Major Third (1.25)

### Geometry
- Border radius: `0px - 2px` (sharp/technical feel)
- Không rounded corners

---

## Proposed Changes

### Core Setup

#### [NEW] Next.js Project Initialization

Khởi tạo Next.js App Router project trong thư mục hiện tại:
```bash
npx -y create-next-app@latest ./ --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack
```

#### [NEW] Dependencies

```bash
npm install next-intl next-themes lucide-react framer-motion
```

| Package | Purpose |
|---------|---------|
| `next-intl` | i18n song ngữ VI/EN |
| `next-themes` | Dark/Light mode toggle |
| `lucide-react` | SVG icon library (consistent, no emoji) |
| `framer-motion` | Scroll & entrance animations |

---

### i18n Setup

#### [NEW] `src/i18n/` directory

| File | Purpose |
|------|---------|
| `src/i18n/request.ts` | next-intl request config |
| `src/i18n/routing.ts` | Locale routing config (vi, en) |
| `src/messages/vi.json` | Vietnamese translations |
| `src/messages/en.json` | English translations |
| `src/middleware.ts` | Redirect/rewrite middleware for locales |

---

### Theme Setup

#### [MODIFY] `tailwind.config.ts`
- Add custom colors from design system (CSS variables)
- Add custom fonts (Archivo, Space Grotesk)
- Configure dark mode: `class` strategy

#### [NEW] `src/app/globals.css`
- CSS variables cho Light/Dark mode
- Google Fonts import
- Custom utility classes
- Base typography styles

#### [NEW] `src/components/ThemeProvider.tsx`
- Wrap app với `next-themes` provider

#### [NEW] `src/components/ThemeToggle.tsx`
- Toggle button Sun/Moon icon

---

### Layout & Navigation

#### [NEW] `src/app/[locale]/layout.tsx`
- Root layout với i18n + theme provider
- Google Fonts via `next/font/google`
- Meta tags, SEO

#### [NEW] `src/components/Navbar.tsx`
- Floating navbar (top-4 spacing)
- Logo/Tên
- Nav links (scroll to section)
- Language switcher (VI/EN)
- Theme toggle
- Mobile menu (hamburger)

#### [NEW] `src/components/Footer.tsx`
- Copyright
- Social links
- Quick links

---

### Page Sections

#### [NEW] `src/app/[locale]/page.tsx`
- Main page — single-page layout với tất cả sections

#### [NEW] `src/components/sections/Hero.tsx`
- Massive typography: Tên + Title
- Tagline
- CTA buttons: "Download CV" + "Contact Me"
- Entrance animation (staggered text reveal)

#### [NEW] `src/components/sections/About.tsx`
- Bio paragraph
- Số năm kinh nghiệm (animated counter)
- Key strengths / highlights

#### [NEW] `src/components/sections/Skills.tsx`
- Skills grouped by category (Languages, Frameworks, Tools...)
- Tag-based layout hoặc grouped cards
- Hover effects

#### [NEW] `src/components/sections/Experience.tsx`
- Vertical timeline layout
- Company name, role, duration
- Description bullets
- Tech tags

#### [NEW] `src/components/sections/Projects.tsx`
- Project cards (asymmetric grid)
- Hover overlay với description
- Tech stack tags
- Links to demo/GitHub

#### [NEW] `src/components/sections/Education.tsx`
- Education cards
- School, degree, year

#### [NEW] `src/components/sections/Contact.tsx`
- Contact form (mailto hoặc EmailJS)
- Social links grid
- Email + phone

---

### Animation System

#### [NEW] `src/components/ui/AnimateOnScroll.tsx`
- Reusable wrapper component dùng Intersection Observer + Framer Motion
- Fade-up, fade-in, slide-in variants
- Staggered children

#### [NEW] `src/components/ui/AnimatedCounter.tsx`
- Number counter animation cho stats (years, projects...)

---

### Data Layer

#### [NEW] `src/data/profile.ts`
- Centralized data file chứa tất cả thông tin cá nhân
- Type-safe với TypeScript interfaces
- User sẽ cập nhật file này với thông tin thực

---

## File Structure

```
d:/profile-intro/
├── public/
│   ├── images/          # Avatar, project screenshots
│   └── cv/              # CV PDF file
├── src/
│   ├── app/
│   │   └── [locale]/
│   │       ├── layout.tsx
│   │       └── page.tsx
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Experience.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Education.tsx
│   │   │   └── Contact.tsx
│   │   ├── ui/
│   │   │   ├── AnimateOnScroll.tsx
│   │   │   └── AnimatedCounter.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeProvider.tsx
│   │   └── ThemeToggle.tsx
│   ├── data/
│   │   └── profile.ts
│   ├── i18n/
│   │   ├── request.ts
│   │   └── routing.ts
│   ├── messages/
│   │   ├── vi.json
│   │   └── en.json
│   └── middleware.ts
├── design-system/       # Generated by ui-ux-pro-max
├── docs/
│   └── PLAN-profile-intro.md
└── package.json
```

---

## Verification Plan

### Automated
1. **Build check:**
   ```bash
   npm run build
   ```
   Phải pass không lỗi TypeScript hoặc build errors.

2. **Lint check:**
   ```bash
   npm run lint
   ```

### Browser Testing (Manual — User)
1. Mở `http://localhost:3000` → Verify trang load đúng với locale mặc định (vi)
2. Click language switcher → Verify chuyển sang EN, text đổi
3. Click theme toggle → Verify chuyển dark/light mode
4. Scroll qua từng section → Verify animations trigger đúng
5. Resize browser (375px, 768px, 1024px, 1440px) → Verify responsive
6. Click "Download CV" → Verify download hoặc placeholder message
7. Test trên mobile (hoặc DevTools mobile emulator)

### Accessibility
- Keyboard navigation qua tất cả interactive elements
- Screen reader test trên heading hierarchy
- Contrast ratio check (4.5:1 minimum)

---

## Deployment
- Deploy trên **Vercel** via Git integration
- Hoặc **GitHub Pages** nếu user muốn static export

---

## ⏭️ Bước tiếp theo sau khi Plan được approve
1. Initialize Next.js project
2. Setup i18n + theme
3. Build từng section
4. Add animations
5. Test + Deploy
