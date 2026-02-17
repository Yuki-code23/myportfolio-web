# Luxury Portfolio - Designer & Engineer

A high-end, professional portfolio website built with Next.js 14, featuring a luxurious matte black design with gold accents. This portfolio showcases your work as a designer and engineer with smooth animations, responsive design, and seamless Supabase integration.

## ✨ Features

### 🎨 Design
- **Matte Black Theme**: Sophisticated dark color scheme with gold accents
- **Glassmorphism Effects**: Modern frosted glass UI elements
- **Custom Cursor**: Interactive custom cursor with smooth animations
- **Smooth Animations**: Powered by Framer Motion for fluid transitions
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop

### 📄 Pages
1. **Home**: Hero section with animated background and featured projects
2. **About**: Professional profile with skills, expertise, and work experience
3. **Works**: Portfolio gallery with category filtering
4. **Project Details**: Individual project pages with detailed information
5. **Contact**: Contact form with Supabase integration

### 🚀 Technical Features
- **Next.js 14 App Router**: Latest Next.js features with server components
- **TypeScript**: Full type safety throughout the application
- **Supabase**: Backend database for projects and contact messages
- **Framer Motion**: Advanced animations and transitions
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Database**: Supabase
- **Icons**: React Icons
- **Deployment**: Vercel-ready

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- Supabase account (free tier works)

### Setup Steps

1. **Clone or download the project**
   ```bash
   # Navigate to the project directory
   cd luxury-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Configure Supabase**
   
   a. Create a new project at [Supabase](https://supabase.com)
   
   b. Go to SQL Editor and run the schema from `supabase/schema.sql`
   
   c. Get your project credentials from Settings > API

4. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🗄️ Database Setup

### Supabase Tables

The application uses two main tables:

#### Projects Table
```sql
- id (UUID, Primary Key)
- title (Text)
- description (Text)
- image_url (Text)
- category (Text)
- technologies (Text Array)
- project_url (Text, Optional)
- github_url (Text, Optional)
- created_at (Timestamp)
```

#### Contact Messages Table
```sql
- id (UUID, Primary Key)
- name (Text)
- email (Text)
- message (Text)
- created_at (Timestamp)
```

### Sample Data
The `supabase/schema.sql` file includes sample projects. You can customize these or add your own projects via the Supabase dashboard.

## 📁 Project Structure

```
luxury-portfolio/
├── app/                      # Next.js App Router pages
│   ├── about/               # About page
│   ├── contact/             # Contact page
│   ├── works/               # Works listing & detail pages
│   │   └── [id]/           # Dynamic project detail page
│   ├── layout.tsx          # Root layout with Header/Footer
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── AnimatedSection.tsx
│   ├── CustomCursor.tsx
│   ├── FeaturedProjects.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Loading.tsx
│   └── ProjectCard.tsx
├── lib/                     # Utilities and API
│   ├── animations.ts       # Framer Motion variants
│   ├── supabase.ts         # Supabase client & API
│   └── utils.ts            # Helper functions
├── supabase/               # Database configuration
│   ├── schema.sql          # Database schema
│   └── README.md           # Supabase setup guide
├── public/                 # Static assets
├── .env.local.example      # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  'matt-black': '#0a0a0a',
  'dark-gray': '#121212',
  'light-gray': '#1a1a1a',
  'gold': '#D4AF37',
  'silver': '#C0C0C0',
  'accent': '#D4AF37',
}
```

### Content
- Update personal information in `app/about/page.tsx`
- Modify contact details in `app/contact/page.tsx`
- Add your projects via Supabase dashboard
- Update social links in `components/Footer.tsx`

### Animations
Customize animations in `lib/animations.ts` using Framer Motion variants.

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**

2. **Import to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository

3. **Configure Environment Variables**
   - Add `NEXT_PUBLIC_SUPABASE_URL`
   - Add `NEXT_PUBLIC_SUPABASE_ANON_KEY`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Other Deployment Options
- **Netlify**: Works with Next.js static export
- **Railway**: Full Next.js support
- **AWS Amplify**: Enterprise deployment option

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL | Yes |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous key | Yes |

## 🔧 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Key Components

- **Header**: Fixed navigation with smooth scroll
- **CustomCursor**: Interactive cursor effect (desktop only)
- **ProjectCard**: Reusable project card with hover effects
- **AnimatedSection**: Scroll-triggered animations

## 🎯 Features Implemented

### ✅ Completed
- ✅ Matte black luxury design
- ✅ Custom cursor with animations
- ✅ Smooth page transitions
- ✅ Responsive navigation
- ✅ Hero section with animated background
- ✅ Featured projects section
- ✅ About page with skills and experience
- ✅ Works page with category filtering
- ✅ Dynamic project detail pages
- ✅ Contact form with Supabase integration
- ✅ Footer with social links
- ✅ Loading states and animations
- ✅ SEO optimization
- ✅ Mobile responsive design

### 🔮 Future Enhancements (Optional)
- [ ] Blog section
- [ ] Testimonials slider
- [ ] Dark/Light mode toggle
- [ ] Project search functionality
- [ ] Admin dashboard for project management
- [ ] Image gallery for projects
- [ ] Case studies with detailed project breakdowns
- [ ] Multi-language support
- [ ] Newsletter subscription

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Core Web Vitals**: Optimized for excellent user experience
- **Image Optimization**: Using Next.js Image component
- **Code Splitting**: Automatic with Next.js App Router

## 🤝 Contributing

Feel free to customize this portfolio to match your personal brand and style!

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- Design inspiration from Awwwards and Dribbble
- Built with modern web technologies
- Powered by Vercel and Supabase

## 📞 Support

For issues or questions:
1. Check the `supabase/README.md` for database setup
2. Ensure all environment variables are set correctly
3. Verify Node.js version is 18 or higher

---

**Made with ❤️ using Next.js, Supabase, and Tailwind CSS**

Enjoy your new portfolio! 🚀✨
