# SmartStep Mobile App

This folder documents the installable mobile version of SmartStep. The working
PWA assets live in `public/mobile-app`; the root `public/sw.js` controls the
complete React app so navigation remains reliable when connectivity drops.

## Android installation

1. Open the deployed SmartStep HTTPS address in Chrome.
2. Open the browser menu and choose **Install app** or **Add to Home screen**.
3. Confirm **Install**. SmartStep then launches in its own full-screen window.

## iPhone installation

1. Open the deployed SmartStep HTTPS address in Safari.
2. Tap **Share**.
3. Choose **Add to Home Screen**, then tap **Add**.

## Important

PWA installation requires an HTTPS deployment (localhost is allowed during
development). App Store distribution or standalone `.apk` / `.ipa` files need
a later Capacitor wrapper plus Android/iOS signing certificates.
