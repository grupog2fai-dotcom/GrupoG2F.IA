const fs = require('fs');
const files = [
  'About.tsx', 'FAQ.tsx', 'Hero.tsx', 'HowItWorks.tsx',
  'LeadForm.tsx', 'Navbar.tsx', 'Pricing.tsx', 'Services.tsx', 'Testimonials.tsx'
];
files.forEach(f => {
  const path = `src/components/${f}`;
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/ease: \[0\.16, 1, 0\.3, 1\]/g, 'ease: [0.16, 1, 0.3, 1] as [number, number, number, number]');
  fs.writeFileSync(path, content);
  console.log(`Updated ${f}`);
});
