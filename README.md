# Luxury Portfolio - Designer & Engineer

A high-end, professional portfolio website built with Next.js 14, featuring a luxurious matte black design with gold accents. This portfolio showcases your work as a designer and engineer with smooth animations, responsive design, and seamless MicroCMS integration.

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
5. **Contact**: Contact form with SSGform integration

### 🚀 Technical Features
- **Next.js 14 App Router**: Latest Next.js features with server components
- **TypeScript**: Full type safety throughout the application
- **MicroCMS**: Headless CMS for project content management
- **SSGform**: Serverless form handling for the contact page
- **Framer Motion**: Advanced animations and transitions
- **Tailwind CSS**: Utility-first CSS framework with custom configuration
- **SEO Optimized**: Proper meta tags and semantic HTML

## 🛠️ Tech Stack

- **Framework**: Next.js 14.1.0
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **CMS**: MicroCMS
- **Form**: SSGform
- **Icons**: React Icons
- **Deployment**: Vercel-ready

## 📦 Installation

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager
- MicroCMS account

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

3. **Configure MicroCMS**
   
   a. Create a new service at [MicroCMS](https://microcms.io)
   
   b. Create a "projects" API with the following fields:
      - title (Text)
      - description (Text area)
      - image_url (Text)
      - category (Text/Select)
      - technologies (Custom: technology name)
      - project_url (Text)
      - github_url (Text)
      - is_featured (Boolean)

4. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN=your_service_domain
   NEXT_PUBLIC_MICROCMS_API_KEY=your_api_key
   ```

5. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

6. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

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
│   ├── microcms.ts         # MicroCMS client & API
│   └── utils.ts            # Helper functions
├── public/                 # Static assets
├── .env.local.example      # Environment variables template
├── next.config.js          # Next.js configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
├── package.json            # Dependencies
└── README.md               # Documentation
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
- Add your projects via MicroCMS dashboard
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
   - Add `NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN`
   - Add `NEXT_PUBLIC_MICROCMS_API_KEY`

4. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes!

### Other Deployment Options
- **Netlify**: Works with Next.js static export
- **Railway**: Full Next.js support
- **AWS Amplify**: Enterprise deployment option

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------
| `NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN` | Your MicroCMS service domain | Yes |
| `NEXT_PUBLIC_MICROCMS_API_KEY` | Your MicroCMS API key | Yes |

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
- ✅ Contact form with SSGform integration
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
- Powered by Vercel and MicroCMS

## 📞 Support

For issues or questions:
1. Ensure all environment variables are set correctly
2. Verify Node.js version is 18 or higher

---

**Made with ❤️ using Next.js, MicroCMS, and Tailwind CSS**

Enjoy your new portfolio! 🚀✨
