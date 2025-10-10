const AIBrainLogo = () => {
  return (
    <div className="w-80 h-80 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/30">
      <div className="relative">
        <div className="w-48 h-48 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/20 rounded-full transform rotate-12"></div>
          <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-white/10 rounded-full transform -rotate-6"></div>

          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-32 h-32 text-white" viewBox="0 0 120 120" fill="none">
              {/* Layer 1 - Input nodes (left side) */}
              <circle cx="20" cy="35" r="4" fill="currentColor" opacity="0.85">
                <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx="20" cy="60" r="4" fill="currentColor" opacity="0.85">
                <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" begin="0.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="20" cy="85" r="4" fill="currentColor" opacity="0.85">
                <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" begin="1s" repeatCount="indefinite" />
              </circle>

              {/* Layer 2 - Hidden nodes */}
              <circle cx="45" cy="25" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="45" cy="50" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="45" cy="70" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="45" cy="95" r="4" fill="currentColor" opacity="0.8" />

              {/* Layer 3 - Hidden nodes */}
              <circle cx="75" cy="30" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="75" cy="55" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="75" cy="75" r="4" fill="currentColor" opacity="0.8" />
              <circle cx="75" cy="92" r="4" fill="currentColor" opacity="0.8" />

              {/* Layer 4 - Output nodes (right side) */}
              <circle cx="100" cy="50" r="4" fill="currentColor" opacity="0.85">
                <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" begin="1.5s" repeatCount="indefinite" />
              </circle>
              <circle cx="100" cy="75" r="4" fill="currentColor" opacity="0.85">
                <animate attributeName="opacity" values="0.85;1;0.85" dur="3s" begin="2s" repeatCount="indefinite" />
              </circle>

              {/* Connections Layer 1 to Layer 2 */}
              <line x1="20" y1="35" x2="45" y2="25" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" repeatCount="indefinite" />
              </line>
              <line x1="20" y1="35" x2="45" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <line x1="20" y1="60" x2="45" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="0.3s" repeatCount="indefinite" />
              </line>
              <line x1="20" y1="60" x2="45" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <line x1="20" y1="85" x2="45" y2="70" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="0.6s" repeatCount="indefinite" />
              </line>
              <line x1="20" y1="85" x2="45" y2="95" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />

              {/* Connections Layer 2 to Layer 3 */}
              <line x1="45" y1="25" x2="75" y2="30" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <line x1="45" y1="25" x2="75" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="0.9s" repeatCount="indefinite" />
              </line>
              <line x1="45" y1="50" x2="75" y2="55" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <line x1="45" y1="50" x2="75" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="1.2s" repeatCount="indefinite" />
              </line>
              <line x1="45" y1="70" x2="75" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <line x1="45" y1="95" x2="75" y2="92" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="1.5s" repeatCount="indefinite" />
              </line>

              {/* Connections Layer 3 to Layer 4 */}
              <line x1="75" y1="30" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="1.8s" repeatCount="indefinite" />
              </line>
              <line x1="75" y1="55" x2="100" y2="50" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <line x1="75" y1="55" x2="100" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
              <line x1="75" y1="75" x2="100" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.5">
                <animate attributeName="opacity" values="0.5;0.8;0.5" dur="2.5s" begin="2.1s" repeatCount="indefinite" />
              </line>
              <line x1="75" y1="92" x2="100" y2="75" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIBrainLogo;
