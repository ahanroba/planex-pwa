const fs = require('fs');
const pkgPath = './package.json';
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
if (!pkg.scripts) pkg.scripts = {};
pkg.scripts['remotion:studio'] = 'remotion studio src/remotion/index.ts';
pkg.scripts['remotion:render'] = 'remotion render src/remotion/index.ts PlanExWebPromo out/promo.mp4';
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2));
console.log('package.json updated');
