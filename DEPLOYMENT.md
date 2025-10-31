# Deploying ZFish Documentation

## Overview

The ZFish documentation website is built with Next.js and deployed on Vercel. This guide explains how to deploy and maintain the documentation.

## Local Development

```bash
cd website/zfish
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Deployment to Vercel

### Automatic Deployment (Recommended)

The documentation is automatically deployed to Vercel when changes are pushed to the `main` branch.

### Manual Deployment

1. **Connect to Vercel**:
   ```bash
   cd website/zfish
   npx vercel --prod
   ```

2. **Or use Vercel CLI**:
   ```bash
   npx vercel
   ```

### Vercel Configuration

The `vercel.json` file contains the deployment configuration:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "framework": "nextjs",
  "installCommand": "npm install",
  "devCommand": "npm run dev",
  "regions": ["fra1"]
}
```

## Domain Setup

The documentation is available at `zfish.dev`. To update the domain:

1. Go to Vercel Dashboard
2. Select the ZFish project
3. Go to Settings → Domains
4. Add or update the custom domain

## Content Updates

### Adding New Pages

1. Create new page in `app/` directory
2. Update navigation in `components/navigation.tsx`
3. Test locally with `npm run dev`
4. Commit and push to deploy

### Updating Components

1. Modify components in `components/` directory
2. Update imports in pages as needed
3. Test and deploy

### Adding Examples

1. Update the examples array in `app/examples/page.tsx`
2. Create individual example pages if needed
3. Test and deploy

## Maintenance

### Dependencies

Keep dependencies updated:

```bash
cd website/zfish
npm update
npm run build  # Test build
```

### Performance Monitoring

Monitor the site performance through Vercel Analytics and check for any build errors.

### SEO and Metadata

Update metadata in `app/layout.tsx` for SEO improvements.

## Troubleshooting

### Build Failures

1. Check TypeScript errors: `npm run build`
2. Verify all imports are correct
3. Check for missing dependencies

### Deployment Issues

1. Check Vercel build logs
2. Verify `vercel.json` configuration
3. Ensure all environment variables are set

### Content Issues

1. Test locally first: `npm run dev`
2. Check for broken links
3. Verify responsive design on different screen sizes

## Contributing

When contributing to the documentation:

1. Follow the existing code style
2. Test all changes locally
3. Update this guide if processes change
4. Ensure accessibility and responsive design