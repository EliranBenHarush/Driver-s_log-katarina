const fs = require('fs');

const config = {
  apiKey:            process.env.FB_API_KEY,
  authDomain:        process.env.FB_AUTH_DOMAIN,
  projectId:         process.env.FB_PROJECT_ID,
  storageBucket:     process.env.FB_STORAGE_BUCKET,
  messagingSenderId: process.env.FB_SENDER_ID,
  appId:             process.env.FB_APP_ID
};

const missing = Object.entries(config).filter(([, v]) => !v).map(([k]) => k);
if (missing.length) {
  console.warn('Warning: missing env vars:', missing.join(', '));
}

fs.writeFileSync('firebase-config.js', `window.FIREBASE_CONFIG = ${JSON.stringify(config)};`);
console.log('firebase-config.js generated successfully');
