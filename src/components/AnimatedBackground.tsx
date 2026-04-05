import '../styles/AnimatedBackground.css';

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      
      <svg className="particle-grid" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Animated circles */}
        <circle cx="100" cy="100" r="3" className="particle particle-1" filter="url(#glow)" />
        <circle cx="300" cy="150" r="2" className="particle particle-2" filter="url(#glow)" />
        <circle cx="500" cy="100" r="2.5" className="particle particle-3" filter="url(#glow)" />
        <circle cx="700" cy="200" r="2" className="particle particle-4" filter="url(#glow)" />
        <circle cx="900" cy="120" r="2.5" className="particle particle-5" filter="url(#glow)" />
        
        <circle cx="150" cy="500" r="2" className="particle particle-6" filter="url(#glow)" />
        <circle cx="400" cy="550" r="2.5" className="particle particle-7" filter="url(#glow)" />
        <circle cx="650" cy="520" r="2" className="particle particle-8" filter="url(#glow)" />
        <circle cx="850" cy="600" r="2.5" className="particle particle-9" filter="url(#glow)" />
        <circle cx="1000" cy="480" r="2" className="particle particle-10" filter="url(#glow)" />
        
        {/* Animated lines */}
        <line x1="100" y1="100" x2="300" y2="150" className="connecting-line line-1" />
        <line x1="300" y1="150" x2="500" y2="100" className="connecting-line line-2" />
        <line x1="500" y1="100" x2="700" y2="200" className="connecting-line line-3" />
        <line x1="700" y1="200" x2="900" y2="120" className="connecting-line line-4" />
        
        <line x1="150" y1="500" x2="400" y2="550" className="connecting-line line-5" />
        <line x1="400" y1="550" x2="650" y2="520" className="connecting-line line-6" />
        <line x1="650" y1="520" x2="850" y2="600" className="connecting-line line-7" />
        <line x1="850" y1="600" x2="1000" y2="480" className="connecting-line line-8" />
      </svg>
    </div>
  );
}
