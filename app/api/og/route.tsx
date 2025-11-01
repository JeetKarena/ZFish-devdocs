import { ImageResponse } from 'next/og';
import { NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);

  const title = searchParams.get('title') || 'ZFish - Ultra-Light CLI Framework for Rust';
  const description = searchParams.get('description') || 'Beautiful, zero-dependency CLI framework for Rust';

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          fontFamily: 'Courier New',
          padding: '40px',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '30px',
          }}
        >
          <span
            style={{
              fontSize: '72px',
              marginRight: '20px',
              display: 'block',
            }}
          >
            🐟
          </span>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <h1
              style={{
                fontSize: '48px',
                fontWeight: 'bold',
                color: '#e94560',
                margin: '0',
                lineHeight: '1.2',
                display: 'block',
              }}
            >
              ZFish
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: '#a0a0a0',
                margin: '0',
                marginTop: '5px',
                display: 'block',
              }}
            >
              Ultra-Light CLI Framework for Rust
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div
          style={{
            textAlign: 'center',
            maxWidth: '800px',
            marginBottom: '40px',
            display: 'block',
          }}
        >
          <h2
            style={{
              fontSize: '32px',
              color: '#ffffff',
              margin: '0 0 20px 0',
              lineHeight: '1.3',
              display: 'block',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: '20px',
              color: '#cccccc',
              margin: '0',
              lineHeight: '1.4',
              display: 'block',
            }}
          >
            {description}
          </p>
        </div>

        {/* Terminal Example */}
        <div
          style={{
            background: 'rgba(0, 0, 0, 0.8)',
            borderRadius: '12px',
            padding: '30px',
            border: '2px solid #e94560',
            width: '100%',
            maxWidth: '700px',
            display: 'block',
          }}
        >
          {/* Terminal Header */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '20px',
            }}
          >
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ff5f57',
                marginRight: '8px',
                display: 'block',
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#ffbd2e',
                marginRight: '8px',
                display: 'block',
              }}
            />
            <div
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#28ca42',
                marginRight: '8px',
                display: 'block',
              }}
            />
          </div>

          {/* Terminal Content */}
          <div
            style={{
              fontSize: '18px',
              color: '#28ca42',
              marginBottom: '10px',
              display: 'block',
            }}
          >
            $ cargo add zfish
          </div>
          <div
            style={{
              fontSize: '16px',
              color: '#ffffff',
              display: 'block',
            }}
          >
            Added zfish v0.1.10 to Cargo.toml ✨
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            marginTop: '30px',
            textAlign: 'center',
            display: 'block',
          }}
        >
          <p
            style={{
              fontSize: '16px',
              color: '#a0a0a0',
              margin: '0',
              display: 'block',
            }}
          >
            Zero-dependency • High-performance • Beautiful CLI apps
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}