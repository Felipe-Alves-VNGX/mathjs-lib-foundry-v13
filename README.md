# Math.js Bridge (Foundry v13)

## Objetivo
Este módulo carrega a biblioteca [math.js](https://mathjs.org/) no navegador do Foundry VTT e expõe a variável global `window.math` para que outros módulos e sistemas possam utilizá-la.

## Compatibilidade
- **Versão mínima do Foundry VTT**: 12
- **Versão verificada**: 13

## Instalação manual
1. Baixe ou clone este repositório.
2. Copie a pasta `_mathjs-bridge` para o diretório `Data/modules/` da sua instalação do Foundry VTT, mantendo o nome da pasta.
3. Inicie o Foundry VTT, abra o mundo desejado e acesse **Configuration and Setup → Manage Modules**.
4. Ative o módulo **Math.js Bridge (Foundry v13)** e recarregue o mundo se solicitado.

## Teste rápido
Após ativar o módulo, abra o console do navegador (F12) dentro do Foundry VTT e execute:

```js
console.log(math.pi);
console.log(math.sqrt(16));
```

Você deverá ver o valor de π e o resultado da raiz quadrada de 16.

## Substituição do stub
Para uso em produção, substitua o conteúdo de `math.min.js` pelo build oficial de browser da math.js (arquivo único), disponível em <https://mathjs.org/download.html>. Não é necessário alterar o `shim.js`.

## Possíveis conflitos
Se outro módulo definir `window.math`, o último script carregado prevalecerá. Certifique-se de ativar apenas um módulo que exponha essa variável global para evitar comportamentos inesperados.

## Atualizando a compatibilidade
Ao testar este módulo em novas versões do Foundry VTT, ajuste o campo `compatibility.verified` em `module.json` para refletir a versão mais recente com a qual você confirmou o funcionamento.

## Suporte
- Página oficial do math.js: <https://mathjs.org>
- Repositório deste módulo: <https://mathjs.org>

Contribuições são bem-vindas!
