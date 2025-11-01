# Dynamic Open Graph Images

This project uses Vercel's `@vercel/og` library to generate dynamic Open Graph images for better social media sharing.

## API Endpoints

### `/api/og` - Open Graph Images (1200x630)
Generates Facebook/LinkedIn compatible images.

**Parameters:**
- `title` - The title to display (URL encoded)
- `description` - The description to display (URL encoded)

**Example:**
```
/api/og?title=My%20Custom%20Title&description=My%20custom%20description
```

### `/api/twitter-og` - Twitter Images (1200x600)
Generates Twitter/X compatible images.

**Parameters:**
- `title` - The title to display (URL encoded)
- `description` - The description to display (URL encoded)

**Example:**
```
/api/twitter-og?title=My%20Custom%20Title&description=My%20custom%20description
```

## Features

- ✅ **Dynamic Content**: Generate images with custom titles and descriptions
- ✅ **Edge Caching**: Images are cached at Vercel's edge for fast delivery
- ✅ **SEO Optimized**: Proper meta tags for all social platforms
- ✅ **Terminal Theme**: Matches your CLI framework branding
- ✅ **Responsive**: Optimized for different social media platforms

## Usage Examples

### Basic Usage
```typescript
// In your metadata
openGraph: {
  images: [
    {
      url: "/api/og?title=My%20Page%20Title&description=My%20page%20description",
      width: 1200,
      height: 630,
    },
  ],
}
```

### Dynamic Usage (per page)
```typescript
// In a page component
export async function generateMetadata({ params }) {
  const title = "Custom Page Title";
  const description = "Custom page description";

  return {
    openGraph: {
      images: [
        {
          url: `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`,
          width: 1200,
          height: 630,
        },
      ],
    },
  };
}
```

## Benefits

1. **Performance**: Images are generated on-demand and cached at the edge
2. **Flexibility**: Customize images per page or content type
3. **Branding**: Consistent with your site's terminal theme
4. **SEO**: Better social media engagement and click-through rates
5. **Cost-effective**: No storage costs, generated on-demand

## Testing

Test your OG images at:
- [Open Graph Preview](https://opengraph.xyz/)
- [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [Twitter Card Validator](https://cards-dev.twitter.com/validator)

## Technical Details

- **Framework**: Next.js App Router with Vercel OG
- **Runtime**: Node.js (Edge Runtime compatible)
- **Image Format**: PNG with transparency support
- **Caching**: Automatic edge caching with proper headers
- **Bundle Size**: Optimized for Vercel's 500KB limit