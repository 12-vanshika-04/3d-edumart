import React from "react";

function SkyFromEarth() {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="The sky from the center of the earth"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        src="https://sketchfab.com/models/17cf917d160645b6a57a09c420ed647d/embed"
        style={{ width: "100%", height: "650px" }}
      />
      <p style={{ fontSize: 13, fontWeight: "normal", margin: 5, color: "#4A4A4A" }}>
        <a
          href="https://sketchfab.com/3d-models/the-sky-from-the-center-of-the-earth-17cf917d160645b6a57a09c420ed647d?utm_medium=embed&utm_campaign=share-popup&utm_content=17cf917d160645b6a57a09c420ed647d"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          The sky from the center of the earth
        </a>{" "}
        by{" "}
        <a
          href="https://sketchfab.com/commonfactory?utm_medium=embed&utm_campaign=share-popup&utm_content=17cf917d160645b6a57a09c420ed647d"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
          commonfactory
        </a>{" "}
        {" "}
        <a
          href="https://sketchfab.com?utm_medium=embed&utm_campaign=share-popup&utm_content=17cf917d160645b6a57a09c420ed647d"
          target="_blank"
          rel="nofollow"
          style={{ fontWeight: "bold", color: "#1CAAD9" }}
        >
        </a>
      </p>
    </div>
  );
}

export default SkyFromEarth;
