import React from "react";

function EyeAnatomy() {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Eye Anatomy"
        src="https://sketchfab.com/models/18712e1fe1e544a197775b8a08da000d/embed"
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ width: "100%", height: "650px" }}
      />
      <p style={{ fontSize: 13, fontWeight: "normal", margin: 5, color: "#4A4A4A" }}>
        <a
          href="https://sketchfab.com/3d-models/eye-anatomy-18712e1fe1e544a197775b8a08da000d?utm_medium=embed&utm_campaign=share-popup&utm_content=18712e1fe1e544a197775b8a08da000d"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Eye Anatomy
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/medpixel?utm_medium=embed&utm_campaign=share-popup&utm_content=18712e1fe1e544a197775b8a08da000d"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          (MEDPIXEL)
        </a>
      </p>
    </div>
  );
}

export default EyeAnatomy;
