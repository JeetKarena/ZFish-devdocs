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
          padding: '30px',
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '25px',
          }}
        >
          <span
            style={{
              fontSize: '64px',
              marginRight: '15px',
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
                fontSize: '42px',
                fontWeight: 'bold',
                color: '#e94560',
                margin: '0',
                lineHeight: '1.2',
              }}
            >
              ZFish
            </h1>
            <p
              style={{
                fontSize: '16px',
                color: '#a0a0a0',
                margin: '0',
                marginTop: '3px',
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
            maxWidth: '600px',
            marginBottom: '30px',
          }}
        >
          <h2
            style={{
              fontSize: '28px',
              color: '#ffffff',
              margin: '0 0 15px 0',
              lineHeight: '1.3',
            }}
          >
            {title}
          </h2>
          <p
            style={{
              fontSize: '18px',
              color: '#cccccc',
              margin: '0',
              lineHeight: '1.4',
            }}
          >
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            marginBottom: '25px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '15px',
              borderRadius: '8px',
              border: '1px solid #e94560',
              minWidth: '120px',
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>🎨</div>
            <div style={{ fontSize: '14px', color: '#ffffff', textAlign: 'center' }}>Colors</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '15px',
              borderRadius: '8px',
              border: '1px solid #e94560',
              minWidth: '120px',
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📊</div>
            <div style={{ fontSize: '14px', color: '#ffffff', textAlign: 'center' }}>Progress</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '15px',
              borderRadius: '8px',
              border: '1px solid #e94560',
              minWidth: '120px',
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>📋</div>
            <div style={{ fontSize: '14px', color: '#ffffff', textAlign: 'center' }}>Tables</div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              background: 'rgba(0, 0, 0, 0.6)',
              padding: '15px',
              borderRadius: '8px',
              border: '1px solid #e94560',
              minWidth: '120px',
            }}
          >
            <div style={{ fontSize: '24px', marginBottom: '8px' }}>❓</div>
            <div style={{ fontSize: '14px', color: '#ffffff', textAlign: 'center' }}>Prompts</div>
          </div>
        </div>

        {/* Footer */}
        <div
          style={{
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: '14px',
              color: '#a0a0a0',
              margin: '0',
            }}
          >
            Zero-dependency • High-performance • Beautiful CLI apps
          </p>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    },
  );
}