import '../styles/AnimatedBackground.css';

export default function AnimatedBackground() {
  return (
    <div className="animated-background">
      <div className="background-blob blob-1"></div>
      <div className="background-blob blob-2"></div>
      <div className="background-blob blob-3"></div>
      
      {/* Falling Leaves */}
      <div className="falling-leaves">
        <svg className="leaf leaf-1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 Q30,40 50,80 Q70,40 50,10" fill="#6B9E4C" opacity="0.7"/>
          <path d="M50,20 Q40,45 50,75 Q60,45 50,20" fill="#8FD694" opacity="0.5"/>
        </svg>
        <svg className="leaf leaf-2" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 Q30,40 50,80 Q70,40 50,10" fill="#6B9E4C" opacity="0.6"/>
          <path d="M50,20 Q40,45 50,75 Q60,45 50,20" fill="#8FD694" opacity="0.45"/>
        </svg>
        <svg className="leaf leaf-3" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 Q30,40 50,80 Q70,40 50,10" fill="#3D5C2A" opacity="0.65"/>
          <path d="M50,20 Q40,45 50,75 Q60,45 50,20" fill="#6B9E4C" opacity="0.5"/>
        </svg>
        <svg className="leaf leaf-4" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 Q30,40 50,80 Q70,40 50,10" fill="#6B9E4C" opacity="0.7"/>
          <path d="M50,20 Q40,45 50,75 Q60,45 50,20" fill="#8FD694" opacity="0.55"/>
        </svg>
        <svg className="leaf leaf-5" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 Q30,40 50,80 Q70,40 50,10" fill="#3D5C2A" opacity="0.6"/>
          <path d="M50,20 Q40,45 50,75 Q60,45 50,20" fill="#6B9E4C" opacity="0.48"/>
        </svg>
        <svg className="leaf leaf-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M50,10 Q30,40 50,80 Q70,40 50,10" fill="#6B9E4C" opacity="0.65"/>
          <path d="M50,20 Q40,45 50,75 Q60,45 50,20" fill="#8FD694" opacity="0.5"/>
        </svg>
      </div>
      
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
