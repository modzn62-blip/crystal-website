# Crystal Dashboard 💎

Dashboard completo da Crystal, preparado para hospedagem.

## Rodar localmente

```bash
npm install
npm start
```

Abra `http://localhost:3000`.

## Produção

O projeto serve o dashboard pelo Node/Express. Configure as variáveis do `.env`
e conecte o backend/API real do bot.

### Domínio

Depois de hospedar:
1. Adicione `crystal.com` na hospedagem.
2. Aponte os registros DNS do domínio para a hospedagem.
3. Ative HTTPS/SSL.
4. Configure o Redirect URI do Discord OAuth2 como:
   `https://crystal.com/auth/callback`

O site então poderá abrir em `https://crystal.com/`.

## Importante

Este ZIP é a base funcional do dashboard. O login real do Discord, persistência
em banco e ações do bot precisam ser ligados ao backend/API da Crystal antes de
serem usados em produção.
