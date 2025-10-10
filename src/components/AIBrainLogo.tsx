const AIBrainLogo = () => {
  return (
    <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
      <div className="relative">
        <div className="w-48 h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 rounded-full transform rotate-12"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-white/10 rounded-full transform -rotate-6"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-32 h-32 text-white" viewBox="0 0 120 120" fill="none">
              <circle cx="60" cy="60" r="8" fill="currentColor" opacity="0.9">
                <animate attributeName="r" values="8;12;8" dur="3s" repeatCount="indefinite" />
              </circle>

              <circle cx="30" cy="30" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="90" cy="30" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="30" cy="90" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="90" cy="90" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="60" cy="20" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="60" cy="100" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="20" cy="60" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="100" cy="60" r="4" fill="currentColor" opacity="0.8" />

              <line x1="60" y1="60" x2="30" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
              </line>
              <line x1="60" y1="60" x2="90" y2="30" stroke="currentColor" strokeWidth="2" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.3s" repeatCount="indefinite" />
              </line>
              <line x1="60" y1="60" x2="30" y2="90" stroke="currentColor" strokeWidth="2" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.6s" repeatCount="indefinite" />
              </line>
              <line x1="60" y1="60" x2="90" y2="90" stroke="currentColor" strokeWidth="2" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="0.9s" repeatCount="indefinite" />
              </line>
              <line x1="60" y1="60" x2="60" y2="20" stroke="currentColor" strokeWidth="2" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.2s" repeatCount="indefinite" />
              </line>
              <line x1="60" y1="60" x2="60" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.5s" repeatCount="indefinite" />
              </line>
              <line x1="60" y1="60" x2="20" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="1.8s" repeatCount="indefinite" />
              </line>
              <line x1="60" y1="60" x2="100" y2="60" stroke="currentColor" strokeWidth="2" opacity="0.6">
                <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" begin="2.1s" repeatCount="indefinite" />
              </line>
            </svg>
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <span className="text-white text-2xl font-bold font-code tracking-wider">AI</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBrainLogo;
