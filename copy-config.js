import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';

const configFiles = [
  '_redirects',
  '.htaccess', 
  'web.config'
];

configFiles.forEach(file => {
  const sourcePath = join('public', file);
  const destPath = join('dist', file);
  
  if (existsSync(sourcePath)) {
    try {
      copyFileSync(sourcePath, destPath);
      console.log(`✅ Copied ${file} to dist/`);
    } catch (error) {
      console.error(`❌ Failed to copy ${file}:`, error.message);
    }
  } else {
    console.warn(`⚠️  ${file} not found in public/`);
  }
}); 