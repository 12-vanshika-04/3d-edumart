import React from "react";

function Modelheart() {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Beating-heart"
        src="https://sketchfab.com/models/d9845afb1ee64ad094adc96320c67d98/embed"
        frameBorder="0"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        style={{ width: "100%", height: "650px" }}
      />
      <p style={{ fontSize: 13, fontWeight: "normal", margin: 5, color: "#4A4A4A" }}>
        <a
          href="https://sketchfab.com/3d-models/beating-heart-d9845afb1ee64ad094adc96320c67d98?utm_medium=embed&utm_campaign=share-popup&utm_content=d9845afb1ee64ad094adc96320c67d98"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          Beating-heart
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/jalmer?utm_medium=embed&utm_campaign=share-popup&utm_content=d9845afb1ee64ad094adc96320c67d98"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          jalmer
        </a>
      </p>
    </div>
  );
}

export default Modelheart;
