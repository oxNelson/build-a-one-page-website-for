import fs from 'node:fs';
import path from 'node:path';

const distDir = path.resolve('dist');
const routes = ['about', 'services', 'portfolio', 'contact'];

if (fs.existsSync(distDir)) {
  const distIndex = path.join(distDir, 'index.html');
  
  if (fs.existsSync(distIndex)) {
    const htmlContent = fs.readFileSync(distIndex, 'utf8');

    // 1. Create sub-route index.html files inside dist/
    for (const route of routes) {
      const routeDir = path.join(distDir, route);
      fs.mkdirSync(routeDir, { recursive: true });
      fs.writeFileSync(path.join(routeDir, 'index.html'), htmlContent, 'utf8');
      console.log(`[postbuild] Generated dist/${route}/index.html`);
    }

    // 2. Also sync to root for static preview servers that serve workspace root directly
    const assetsDist = path.join(distDir, 'assets');
    const assetsRoot = path.resolve('assets');
    if (fs.existsSync(assetsDist)) {
      fs.mkdirSync(assetsRoot, { recursive: true });
      for (const file of fs.readdirSync(assetsDist)) {
        fs.copyFileSync(path.join(assetsDist, file), path.join(assetsRoot, file));
      }
      console.log(`[postbuild] Synced dist/assets to root assets/`);
    }

    // Also generate root sub-routes for direct navigation preview
    for (const route of routes) {
      const rootRouteDir = path.resolve(route);
      fs.mkdirSync(rootRouteDir, { recursive: true });
      fs.writeFileSync(path.join(rootRouteDir, 'index.html'), htmlContent, 'utf8');
      console.log(`[postbuild] Generated root ${route}/index.html`);
    }

    // Copy dist/index.html to root index.html for static preview serving
    fs.copyFileSync(distIndex, path.resolve('index.html'));
    console.log(`[postbuild] Synced dist/index.html to root index.html`);
  }
}
