import React, { useEffect } from "react";

const AnimatedBackground = () => {
  useEffect(() => {
    // Create floating blobs
    const createBlobs = () => {
      const container = document.querySelector(".animated-bg-container");
      if (!container) return;

      for (let i = 0; i < 5; i++) {
        const blob = document.createElement("div");
        blob.className = "blob morph-bg";
        blob.style.position = "absolute";
        blob.style.width = Math.random() * 200 + 150 + "px";
        blob.style.height = blob.style.width;
        blob.style.left = Math.random() * 100 + "%";
        blob.style.top = Math.random() * 100 + "%";
        blob.style.opacity = Math.random() * 0.3 + 0.2;
        blob.style.zIndex = -1;
        container.appendChild(blob);
      }
    };

    createBlobs();
  }, []);

  return (
    <div
      className="animated-bg-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflow: "hidden",
        zIndex: -2,
        background: "linear-gradient(135deg, #0d0117 0%, #1a0033 100%)",
      }}
    />
  );
};

export default AnimatedBackground;
