import sharp from "sharp";

const width = 1200;
const height = 630;

const svg = `
<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${width}" height="${height}" fill="#141413"/>

  <!-- Subtle grid pattern -->
  <defs>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#1C1C1B" stroke-width="0.5"/>
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#grid)"/>

  <!-- Accent bar left -->
  <rect x="80" y="200" width="3" height="120" rx="1.5" fill="#C45D3E"/>

  <!-- Name -->
  <text x="100" y="248" font-family="monospace" font-size="52" font-weight="500" fill="#E8E8E8">
    Lucas <tspan fill="#C45D3E">Desfontaine</tspan>
  </text>

  <!-- Title -->
  <text x="100" y="300" font-family="monospace" font-size="22" fill="#888888" letter-spacing="1">
    DevSecOps &amp; Securite des Infrastructures
  </text>

  <!-- Dot accent -->
  <circle cx="100" cy="400" r="4" fill="#C45D3E"/>
  <text x="116" y="406" font-family="monospace" font-size="15" fill="#666666">
    lucasdesfontaine.dev
  </text>

  <!-- Corner accents -->
  <path d="M 1140 560 L 1140 590 L 1170 590" fill="none" stroke="#C45D3E" stroke-width="1.5" opacity="0.4"/>
  <path d="M 30 40 L 30 70 L 60 70" fill="none" stroke="#C45D3E" stroke-width="1.5" opacity="0.2" transform="rotate(180 45 55)"/>
</svg>
`;

await sharp(Buffer.from(svg)).png().toFile("public/og-image.png");
console.log("og-image.png generated (1200x630)");
