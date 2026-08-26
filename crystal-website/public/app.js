const modules = {
  "config-bot": ["🤖 Configuração do Bot", "Configure nome, sobrenome, bio (até 3000 caracteres), imagem, banner e presença."],
  economia: ["💎 Economia", "Gerencie crystais, Daily (1–1000 por coleta), apostas e jogos."],
  sorteios: ["🎁 Sorteios", "Crie sorteios pelo dashboard com prêmio, vencedores, imagem, cargo e DM."],
  autorole: ["🎭 AutoRole", "Crie vários painéis; cada cargo aparece pelo próprio nome e funciona como toggle."],
  staff: ["🛡️ Staff & Permissões", "Configure Staff, Moderadores, Administradores e permissões do bot."],
  tickets: ["🎫 Tickets", "Configure painéis e atendimento da comunidade."],
  entradas: ["🚪 Entrada e Saída", "Configure título, descrição, imagem, thumbnail, rodapé e placeholders."],
  parcerias: ["🤝 Parcerias", "Configure o texto de parceria exibido pelo c!texto."],
  streaming: ["📺 Streaming", "Configure notificações de transmissões."],
  moderacao: ["🔨 Moderação", "Ferramentas de moderação da comunidade."],
  instagram: ["📸 Instagram", "Configure notificações do Instagram."],
  estatisticas: ["📊 Estatísticas", "Resumo da comunidade e atividade."]
};

function openModule(key){
  const m=modules[key]||["Crystal","Configuração"];
  document.getElementById("modal-content").innerHTML =
    `<span class="badge">${m[0]}</span><h2>${m[0]}</h2><p>${m[1]}</p>
     <p style="font-size:14px">Esta tela está preparada para ser conectada à API do bot Crystal. As ações reais serão executadas pelo backend após configurar o Discord OAuth2 e a API.</p>
     <button class="primary" onclick="closeModule()">Entendi</button>`;
  document.getElementById("modal").classList.remove("hidden");
}
function closeModule(){document.getElementById("modal").classList.add("hidden")}
function login(){
  alert("Configure o Discord OAuth2 no .env e implemente o callback /auth/callback para ativar o login real.");
}
fetch("/api/health").catch(()=>{});
