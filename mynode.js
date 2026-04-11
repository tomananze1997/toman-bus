const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
const dotenv = require('dotenv').config({ path: '.env' });

// Public canonical URL (SEO). Optional SITE_URL in .env / Vercel; default matches production.
const siteUrl = JSON.stringify(
  (process.env.SITE_URL && process.env.SITE_URL.trim()) || 'https://www.toman-bus.si'
);

const envFile = `import { IEnvironment } from '@interfaces';

export const environment: IEnvironment = {
  REDIRECT_LINK: '${process.env.REDIRECT_LINK ?? ''}',
  EMAIL_SERVICE_ID: '${process.env.EMAIL_SERVICE_ID ?? ''}',
  EMAIL_TEMPLATE_ID: '${process.env.EMAIL_TEMPLATE_ID ?? ''}',
  EMAIL_PUBLIC_KEY: '${process.env.EMAIL_PUBLIC_KEY ?? ''}',
  siteUrl: ${siteUrl}
};
`;
const targetPath = path.join(__dirname, './src/app/environments/environments.ts');
fs.writeFile(targetPath, envFile, (err) => {
  if (err) {
    console.error(err);
    throw err;
  } else {
    console.log(successColor, `${checkSign} Successfully generated environment.ts`);
  }
});
