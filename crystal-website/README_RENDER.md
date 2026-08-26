# Crystal Website — Render

## Deploy
1. Upload this project to a GitHub repository.
2. In Render: New -> Web Service.
3. Select the repository.
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Select the Free plan (if available).
7. Add OAuth/API secrets as Render Environment Variables.

The server reads `process.env.PORT`, so Render can assign the port.

Do NOT commit `.env` or Discord secrets to GitHub.
