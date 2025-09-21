# Pump.fun AutoMod Bot

This repository provides tools to moderate spam on pump.fun.

## Features
- **Userscript**: Hides spam client-side (for personal browsing).
- **Moderator Bot**: Puppeteer-based automation that logs in with moderator credentials and deletes spam.

## Setup

### Userscript
1. Install Tampermonkey in your browser.
2. Add the `userscript/pumpfun-antispam.user.js` script.

### Moderator Bot
1. Copy `.env.example` to `.env` and fill in credentials.
2. Run:

```bash
cd moderator-bot
npm install
node bot.js
```

## Disclaimer
⚠️ Use the moderator bot **only if you have official moderator privileges**. Unauthorized use may violate pump.fun’s Terms of Service.
