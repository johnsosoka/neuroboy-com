# John R. Sosoka Jr Memorial Website

A memorial website built with Next.js, celebrating the life and legacy of John R. Sosoka Jr (1953-2021).

## Overview

This is a static memorial website featuring:
- **Biography**: John's life journey and professional achievements
- **Timeline**: Key milestones from 1953-2021
- **Projects**: Showcase of his innovative work (Pleo, Musini, etc.)
- **Gallery**: Photo gallery (placeholder - coming soon)
- **Stories**: Personal stories and memories (placeholder - coming soon)
- **Guestbook**: Tribute messages (placeholder - coming soon)

## Tech Stack

- **Next.js 15**: React framework with static export
- **Tailwind CSS v3**: Utility-first CSS framework
- **TypeScript**: Type-safe development
- **Headless UI**: Unstyled accessible components
- **Lucide React**: Icon library

## Development

### Prerequisites

- Node.js 18+ and npm
- AWS CLI configured with `jscom` profile (for deployment)

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server locally
npm start
```

The dev server runs at http://localhost:3000 with hot-reload enabled.

## Building

```bash
npm run build
```

This command:
1. Compiles TypeScript and bundles the application
2. Generates static HTML/CSS/JS files in the `out/` directory
3. Optimizes images and assets

## Deployment

### Quick Deploy

Deploy to staging:
```bash
./deploy.sh
```

Deploy to production (www subdomain):
```bash
./deploy.sh -e www
```

Deploy to apex domain:
```bash
./deploy.sh -e apex
```

### Deployment Options

```bash
./deploy.sh [OPTIONS]

Options:
  -e, --environment ENV    Target environment: staging, www, apex (default: staging)
  -p, --profile PROFILE    AWS profile to use (default: jscom)
  --dry-run                Run without making changes
  -h, --help               Show help message
```

### Manual Deployment

```bash
# Build first
npm run build

# Deploy to staging
aws s3 sync out/ s3://stage.neuroboy.com/ --profile jscom --delete

# Deploy to www
aws s3 sync out/ s3://www.neuroboy.com/ --profile jscom --delete

# Deploy to apex domain
aws s3 sync out/ s3://neuroboy.com/ --profile jscom --delete
```

## Project Structure

```
website/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Homepage
│   ├── biography/         # Biography page
│   ├── timeline/          # Timeline page
│   ├── projects/          # Projects showcase
│   ├── gallery/           # Photo gallery (placeholder)
│   ├── stories/           # Personal stories (placeholder)
│   ├── guestbook/         # Tribute messages (placeholder)
│   ├── layout.tsx         # Root layout with navigation
│   └── globals.css        # Global styles and Tailwind
├── components/            # React components
│   ├── Navigation.tsx     # Site navigation
│   └── Footer.tsx         # Site footer
├── lib/                   # Utilities and helpers
├── public/                # Static assets
│   └── images/            # Image files
├── deploy.sh              # Deployment script
└── next.config.ts         # Next.js configuration
```

## Design System

### Colors

The site uses a dark memorial theme with:
- **Background**: `#0a0a0a` (memorial-dark)
- **Accents**: Blue (`#60a5fa`) and Purple (`#a78bfa`)
- **Text**: Shades of gray from `#fafafa` to `#18181b`

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold, using memorial-gray-50
- **Body**: Regular, using memorial-gray-300
- **Accents**: memorial-accent-blue

## Future Features

The placeholder pages (Gallery, Stories, Guestbook) are designed to integrate with future backend services:

### Architecture for Dynamic Features

- **Authentication**: AWS Cognito
- **Storage**: DynamoDB for stories/guestbook, S3 for photos
- **API**: Python Lambda functions via API Gateway
- **Frontend**: Next.js will fetch from API routes

### Planned Enhancements

1. **Photo Gallery**
   - S3-backed image storage
   - CloudFront delivery
   - Category browsing

2. **Story Submissions**
   - Authenticated user submissions
   - Moderation workflow
   - Community contributions

3. **Guestbook**
   - Public or anonymous messages
   - Moderation system
   - Real-time updates

## Adding Images

Place images in `public/images/` directory:

```
public/images/
├── john-sosoka.jpg        # Main portrait
├── pleo.jpg              # Pleo robot
├── musini.jpg            # Musini toy
├── vita-robotica.jpg     # Vita Robotica
├── pulse-robotics.jpg    # Pulse-Robotics
└── tech-applications.jpg # Technology Applications Group
```

Then reference in pages as `/images/filename.jpg`

## Accessibility

The site is built with WCAG 2.1 AA compliance in mind:
- Semantic HTML structure
- Proper heading hierarchy
- Color contrast ratios
- Keyboard navigation
- Screen reader support via Headless UI

## License

This memorial website is a private project. All rights reserved.

## Contact

For questions or to contribute memories, please contact the family through the website once the guestbook is live.
