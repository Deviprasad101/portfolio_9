import React from 'react';

export default function ProjectCoverArt({ variant }) {
  if (variant === 'route-planner') {
    return (
      <div className="project-cover-canvas cover-route" aria-hidden="true">
        <svg
          viewBox="0 0 640 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="cover-svg"
        >
          <defs>
            <radialGradient id="routeGlow" cx="38%" cy="48%" r="62%">
              <stop offset="0%" stopColor="#D9531E" stopOpacity="0.34" />
              <stop offset="60%" stopColor="#8C2D08" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#121110" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="routePathGrad" x1="90" y1="300" x2="430" y2="95" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#F59E56" />
              <stop offset="55%" stopColor="#E05A22" />
              <stop offset="100%" stopColor="#F8F3EA" />
            </linearGradient>
          </defs>

          {/* Subtle Grid & Topographic Contours */}
          <rect width="640" height="400" fill="#171514" />
          <rect width="640" height="400" fill="url(#routeGlow)" />

          <g stroke="#F8F3EA" strokeOpacity="0.06" strokeWidth="1">
            <line x1="0" y1="80" x2="640" y2="80" />
            <line x1="0" y1="160" x2="640" y2="160" />
            <line x1="0" y1="240" x2="640" y2="240" />
            <line x1="0" y1="320" x2="640" y2="320" />
            <line x1="128" y1="0" x2="128" y2="400" />
            <line x1="256" y1="0" x2="256" y2="400" />
            <line x1="384" y1="0" x2="384" y2="400" />
            <line x1="512" y1="0" x2="512" y2="400" />
          </g>

          {/* Tirumala Hills Topographic Elevation Contours */}
          <g stroke="#E05A22" strokeOpacity="0.18" strokeWidth="1.2" fill="none">
            <path d="M-30 330 C90 270, 145 340, 250 250 C355 160, 420 205, 670 110" />
            <path d="M-20 285 C105 225, 165 290, 265 205 C365 120, 440 165, 665 70" />
            <path d="M20 370 C140 315, 200 355, 305 280 C410 205, 485 245, 670 165" />
            <ellipse cx="295" cy="175" rx="135" ry="72" transform="rotate(-18 295 175)" strokeOpacity="0.14" />
            <ellipse cx="295" cy="175" rx="82" ry="40" transform="rotate(-18 295 175)" strokeOpacity="0.22" />
          </g>

          {/* OSRM Multi-Stop Route Path */}
          <path
            d="M106 296 C158 286, 178 222, 238 214 C298 206, 316 132, 394 114"
            stroke="#E05A22"
            strokeOpacity="0.3"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M106 296 C158 286, 178 222, 238 214 C298 206, 316 132, 394 114"
            stroke="url(#routePathGrad)"
            strokeWidth="3.2"
            strokeLinecap="round"
            strokeDasharray="6 6"
          />

          {/* Waypoint Nodes */}
          <g>
            <circle cx="106" cy="296" r="11" fill="#E05A22" fillOpacity="0.22" />
            <circle cx="106" cy="296" r="5" fill="#F8F3EA" stroke="#E05A22" strokeWidth="2.5" />
            <rect x="64" y="314" width="92" height="22" rx="5" fill="#211E1C" stroke="#F8F3EA" strokeOpacity="0.14" />
            <text x="110" y="329" textAnchor="middle" fill="#F8F3EA" fontSize="10" fontFamily="JetBrains Mono, monospace">
              01 · ALIPIRI
            </text>
          </g>

          <g>
            <circle cx="238" cy="214" r="12" fill="#E05A22" fillOpacity="0.25" />
            <circle cx="238" cy="214" r="5.5" fill="#E05A22" stroke="#F8F3EA" strokeWidth="2" />
            <rect x="182" y="232" width="112" height="22" rx="5" fill="#211E1C" stroke="#E05A22" strokeOpacity="0.4" />
            <text x="238" y="247" textAnchor="middle" fill="#F8F3EA" fontSize="10" fontFamily="JetBrains Mono, monospace">
              02 · KAPILA TEERTH
            </text>
          </g>

          <g>
            <circle cx="394" cy="114" r="16" fill="#E05A22" fillOpacity="0.28" />
            <circle cx="394" cy="114" r="6.5" fill="#F8F3EA" stroke="#E05A22" strokeWidth="3" />
            <rect x="336" y="72" width="116" height="24" rx="6" fill="#D9531E" />
            <text x="394" y="88" textAnchor="middle" fill="#FFF9F2" fontSize="10.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
              03 · TIRUMALA
            </text>
          </g>

          {/* Floating QR Check-in Verification Card */}
          <g transform="translate(432, 176)">
            <rect width="166" height="176" rx="14" fill="#1E1B19" stroke="#F8F3EA" strokeOpacity="0.14" />
            <rect x="14" y="14" width="138" height="22" rx="5" fill="#D9531E" fillOpacity="0.16" />
            <circle cx="26" cy="25" r="3.5" fill="#F59E56" />
            <text x="36" y="29" fill="#F59E56" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
              QR CHECK-IN PASS
            </text>

            {/* Stylized Crisp QR Matrix */}
            <g transform="translate(41, 48)" fill="#F8F3EA">
              <rect x="0" y="0" width="24" height="24" rx="3" fill="none" stroke="#F8F3EA" strokeWidth="3" />
              <rect x="6" y="6" width="12" height="12" rx="1" />
              <rect x="60" y="0" width="24" height="24" rx="3" fill="none" stroke="#F8F3EA" strokeWidth="3" />
              <rect x="66" y="6" width="12" height="12" rx="1" />
              <rect x="0" y="60" width="24" height="24" rx="3" fill="none" stroke="#F8F3EA" strokeWidth="3" />
              <rect x="6" y="66" width="12" height="12" rx="1" />

              <rect x="32" y="4" width="6" height="6" />
              <rect x="44" y="4" width="6" height="14" />
              <rect x="32" y="18" width="6" height="12" />
              <rect x="4" y="34" width="14" height="6" />
              <rect x="24" y="34" width="18" height="6" fill="#E05A22" />
              <rect x="48" y="34" width="12" height="12" fill="#E05A22" />
              <rect x="68" y="34" width="14" height="6" />
              <rect x="34" y="52" width="12" height="6" />
              <rect x="54" y="54" width="10" height="10" />
              <rect x="70" y="50" width="12" height="16" />
              <rect x="34" y="66" width="18" height="6" />
              <rect x="58" y="72" width="24" height="8" fill="#E05A22" />
            </g>

            <text x="83" y="154" textAnchor="middle" fill="#A89F94" fontSize="9.5" fontFamily="JetBrains Mono, monospace">
              TIER: STANDARD · 3 STOPS
            </text>
          </g>

          {/* Top Telemetry Strip */}
          <g transform="translate(28, 26)">
            <rect width="218" height="30" rx="7" fill="#201D1B" stroke="#F8F3EA" strokeOpacity="0.1" />
            <circle cx="16" cy="15" r="4" fill="#E05A22" />
            <text x="28" y="19" fill="#E7DFD3" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
              OSRM ROUTING · LEAFLET UI
            </text>
          </g>
        </svg>
      </div>
    );
  }

  return (
    <div className="project-cover-canvas cover-geohub" aria-hidden="true">
      <svg
        viewBox="0 0 640 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cover-svg"
      >
        <defs>
          <radialGradient id="hubGlow" cx="62%" cy="50%" r="60%">
            <stop offset="0%" stopColor="#D9531E" stopOpacity="0.34" />
            <stop offset="65%" stopColor="#7C2406" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#121110" stopOpacity="0" />
          </radialGradient>
        </defs>

        <rect width="640" height="400" fill="#161514" />
        <rect width="640" height="400" fill="url(#hubGlow)" />

        {/* Subtle Coordinate Grid */}
        <g stroke="#F8F3EA" strokeOpacity="0.05" strokeWidth="1">
          <line x1="0" y1="100" x2="640" y2="100" />
          <line x1="0" y1="200" x2="640" y2="200" />
          <line x1="0" y1="300" x2="640" y2="300" />
          <line x1="160" y1="0" x2="160" y2="400" />
          <line x1="320" y1="0" x2="320" y2="400" />
          <line x1="480" y1="0" x2="480" y2="400" />
        </g>

        {/* Left: Cesium 3D Orbital Wireframe Globe */}
        <g transform="translate(155, 212)">
          <circle cx="0" cy="0" r="102" fill="#1C1917" fillOpacity="0.7" stroke="#F8F3EA" strokeOpacity="0.18" strokeWidth="1.4" />
          <ellipse cx="0" cy="0" rx="102" ry="38" stroke="#E05A22" strokeOpacity="0.45" strokeWidth="1.3" />
          <ellipse cx="0" cy="0" rx="102" ry="72" stroke="#F8F3EA" strokeOpacity="0.12" strokeWidth="1" />
          <ellipse cx="0" cy="0" rx="42" ry="102" stroke="#F8F3EA" strokeOpacity="0.15" strokeWidth="1.1" />
          <ellipse cx="0" cy="0" rx="78" ry="102" stroke="#E05A22" strokeOpacity="0.28" strokeWidth="1.1" />
          <line x1="-114" y1="0" x2="114" y2="0" stroke="#F8F3EA" strokeOpacity="0.14" strokeDasharray="3 4" />
          <line x1="0" y1="-114" x2="0" y2="114" stroke="#F8F3EA" strokeOpacity="0.14" strokeDasharray="3 4" />

          {/* Spatial Bounding Tile Highlight on Globe */}
          <polygon
            points="-18,-32 34,-18 22,24 -30,10"
            fill="#E05A22"
            fillOpacity="0.28"
            stroke="#F59E56"
            strokeWidth="1.6"
          />
          <circle cx="8" cy="-4" r="4" fill="#FFF9F2" />
        </g>

        {/* Right: Stacked Isometric Spatial Catalog Layers */}
        <g transform="translate(308, 78)">
          {/* Layer 4 (Bottom): PostGIS Spatial DB */}
          <g transform="translate(0, 174)">
            <polygon
              points="145,0 290,46 145,92 0,46"
              fill="#1E1B19"
              stroke="#F8F3EA"
              strokeOpacity="0.2"
              strokeWidth="1.4"
            />
            <text x="145" y="50" textAnchor="middle" fill="#BEB5A9" fontSize="10" fontFamily="JetBrains Mono, monospace">
              POSTGIS · GEOSERVER
            </text>
          </g>

          {/* Layer 3: Raster & Ortho GDAL */}
          <g transform="translate(0, 118)">
            <polygon
              points="145,0 290,46 145,92 0,46"
              fill="#251E1B"
              fillOpacity="0.92"
              stroke="#E05A22"
              strokeOpacity="0.38"
              strokeWidth="1.4"
            />
            <text x="145" y="50" textAnchor="middle" fill="#E8DFD3" fontSize="10" fontFamily="JetBrains Mono, monospace">
              RASTERS &amp; ORTHO · GDAL
            </text>
          </g>

          {/* Layer 2: LAS Point Cloud PDAL */}
          <g transform="translate(0, 62)">
            <polygon
              points="145,0 290,46 145,92 0,46"
              fill="#2E2019"
              fillOpacity="0.92"
              stroke="#E05A22"
              strokeOpacity="0.65"
              strokeWidth="1.5"
            />
            {/* Point cloud dots */}
            <circle cx="95" cy="44" r="2" fill="#F59E56" />
            <circle cx="198" cy="48" r="2" fill="#F59E56" />
            <circle cx="145" cy="26" r="2" fill="#F59E56" />
            <text x="145" y="50" textAnchor="middle" fill="#F8F3EA" fontSize="10" fontFamily="JetBrains Mono, monospace">
              LAS POINT CLOUD · PDAL
            </text>
          </g>

          {/* Layer 1 (Top): 3D Tiles Cesium */}
          <g transform="translate(0, 6)">
            <polygon
              points="145,0 290,46 145,92 0,46"
              fill="#D9531E"
              fillOpacity="0.26"
              stroke="#F59E56"
              strokeWidth="1.8"
            />
            <text x="145" y="50" textAnchor="middle" fill="#FFF9F2" fontSize="10.5" fontWeight="600" fontFamily="JetBrains Mono, monospace">
              3D TILES &amp; WMS / WFS
            </text>
          </g>
        </g>

        {/* Top Telemetry Strip */}
        <g transform="translate(28, 26)">
          <rect width="248" height="30" rx="7" fill="#201D1B" stroke="#F8F3EA" strokeOpacity="0.1" />
          <circle cx="16" cy="15" r="4" fill="#F59E56" />
          <text x="28" y="19" fill="#E7DFD3" fontSize="10.5" fontFamily="JetBrains Mono, monospace">
            CESIUM 3D · OGC WMS / WFS
          </text>
        </g>
      </svg>
    </div>
  );
}

