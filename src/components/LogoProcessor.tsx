import { useEffect, useState } from "react";
import { removeBackground, loadImage } from "@/utils/removeBackground";
import logoImage from "@/assets/ai-with-aimee-logo-refreshed.png";

const LogoProcessor = () => {
  const [status, setStatus] = useState<string>("Loading...");
  const [processedUrl, setProcessedUrl] = useState<string>("");

  useEffect(() => {
    const processLogo = async () => {
      try {
        setStatus("Fetching logo image...");
        
        // Fetch the logo image
        const response = await fetch(logoImage);
        const blob = await response.blob();
        
        setStatus("Loading image...");
        const img = await loadImage(blob);
        
        setStatus("Removing background... (this may take a minute)");
        const transparentBlob = await removeBackground(img);
        
        setStatus("Background removed successfully!");
        const url = URL.createObjectURL(transparentBlob);
        setProcessedUrl(url);
        
        // Auto-download the processed image
        const link = document.createElement('a');
        link.href = url;
        link.download = 'ai-with-aimee-logo-transparent.png';
        link.click();
        
        setStatus("✅ Download started! Check your downloads folder.");
      } catch (error) {
        console.error("Error processing logo:", error);
        setStatus(`❌ Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    processLogo();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="max-w-2xl w-full bg-white/10 backdrop-blur-lg rounded-lg p-8 shadow-xl">
        <h1 className="text-3xl font-bold text-white mb-4">Logo Background Removal</h1>
        <p className="text-lg text-white/80 mb-6">{status}</p>
        
        {processedUrl && (
          <div className="space-y-4">
            <div className="bg-white/5 p-4 rounded-lg">
              <h2 className="text-xl text-white mb-2">Preview:</h2>
              <img 
                src={processedUrl} 
                alt="Transparent logo" 
                className="w-full max-w-md mx-auto"
                style={{ background: 'repeating-conic-gradient(#808080 0% 25%, transparent 0% 50%) 50% / 20px 20px' }}
              />
            </div>
            
            <div className="text-sm text-white/60">
              <p>✓ Background removed</p>
              <p>✓ Transparent PNG created</p>
              <p>✓ File downloaded automatically</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogoProcessor;
