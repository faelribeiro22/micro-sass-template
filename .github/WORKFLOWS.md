# 🤖 GitHub Actions - CI/CD

Este projeto usa GitHub Actions para automação de CI/CD, incluindo atualização automática de dependências.

## 📋 Workflows Disponíveis

### 1. 🔄 Atualização Automática de Dependências

**Arquivo:** `.github/workflows/update-dependencies.yml`

**Quando executa:**
- ⏰ Automaticamente toda segunda-feira às 9h UTC (6h BRT)
- 🔘 Manualmente via GitHub Actions interface

**O que faz:**

1. ✅ Verifica atualizações disponíveis com `npm-check-updates`
2. 📦 Instala as dependências atualizadas
3. 🔨 Compila o projeto (`npm run build`)
4. 🧪 Executa os testes (`npm test`)
5. 🔍 Valida tipos TypeScript
6. 🔀 Cria Pull Request automaticamente se tudo passar

**Funcionalidades:**

- ✅ Valida build antes de criar PR
- ✅ Executa testes automaticamente
- ✅ Verifica tipos TypeScript
- ✅ Gera resumo detalhado das mudanças
- ✅ Cria PR com labels e assignees
- ✅ Upload de artefatos (package.json, updates.json)

**Como executar manualmente:**

1. Acesse: `Actions` → `Atualização Automática de Dependências`
2. Clique em `Run workflow`
3. Selecione a branch `main`
4. Clique em `Run workflow`

### 2. ✅ CI - Build e Testes

**Arquivo:** `.github/workflows/ci.yml`

**Quando executa:**
- 📤 Push para branches `main` ou `develop`
- 🔀 Pull Requests para `main` ou `develop`

**Jobs:**

#### 🔍 Lint e Type Check
- Verifica tipos TypeScript
- Valida código

#### 🔨 Build
- Compila o projeto
- Gera artefatos de build
- Upload para análise (7 dias de retenção)

#### 🧪 Testes
- Executa suite de testes
- Gera relatório de cobertura

#### 🔒 Auditoria de Segurança
- `npm audit` para vulnerabilidades
- Gera relatório no summary
- Não bloqueia CI (continue-on-error)

#### ✅ Validação Completa
- Consolida resultados de todos os jobs
- Gera resumo no GitHub

## 🎯 Status Badges

Adicione ao README.md:

```markdown
![CI](https://github.com/faelribeiro22/micro-sass-template/actions/workflows/ci.yml/badge.svg)
![Dependencies](https://github.com/faelribeiro22/micro-sass-template/actions/workflows/update-dependencies.yml/badge.svg)
```

## 🔧 Configuração

### Permissões Necessárias

Os workflows precisam das seguintes permissões:

```yaml
permissions:
  contents: write        # Para criar commits
  pull-requests: write   # Para criar PRs
```

Estas já estão configuradas nos workflows.

### Secrets Necessários

**Nenhum secret adicional necessário!** Os workflows usam o `GITHUB_TOKEN` padrão.

### Personalização

#### Mudar Horário de Atualização

Edite `.github/workflows/update-dependencies.yml`:

```yaml
schedule:
  # Formato: minuto hora dia-do-mês mês dia-da-semana
  - cron: '0 9 * * 1'  # Segunda às 9h UTC
  
  # Exemplos:
  # '0 0 * * *'   - Todo dia à meia-noite
  # '0 9 * * 5'   - Sexta-feira às 9h
  # '0 0 1 * *'   - Primeiro dia do mês
```

#### Mudar Assignee do PR

Edite `.github/workflows/update-dependencies.yml`:

```yaml
assignees: seu-usuario-github
```

#### Desabilitar Workflow

Adicione ao início do arquivo:

```yaml
on:
  workflow_dispatch:  # Apenas manual
  # schedule:         # Comentar para desabilitar automático
  #   - cron: '0 9 * * 1'
```

## 📊 Visualizar Execuções

1. Acesse: `https://github.com/faelribeiro22/micro-sass-template/actions`
2. Selecione o workflow desejado
3. Veja histórico de execuções

## 🐛 Troubleshooting

### Workflow não executa automaticamente

**Problema:** Schedule não dispara

**Soluções:**
1. Verificar se o repositório está ativo (precisa ter atividade recente)
2. Verificar se Actions está habilitado: Settings → Actions → General
3. Branch default deve ser `main`

### Build falha no workflow

**Problema:** `npm run build` falha

**Debug:**
1. Ver logs completos na aba Actions
2. Baixar artefatos se disponíveis
3. Reproduzir localmente:
   ```bash
   npm ci
   npm run build
   ```

### Testes falham

**Problema:** `npm test` falha

**Debug:**
```bash
npm ci
npm test
```

### PR não é criado

**Problema:** Workflow executa mas não cria PR

**Possíveis causas:**
1. Não há atualizações disponíveis
2. Permissões insuficientes
3. Branch `deps/auto-update` já existe

**Solução:**
```bash
# Deletar branch existente
git push origin --delete deps/auto-update
```

## 🔐 Segurança

### Audit Automático

O workflow de CI executa `npm audit` automaticamente:

```yaml
- name: 🔒 NPM Audit
  run: npm audit --audit-level=moderate
  continue-on-error: true
```

### Dependabot (Opcional)

Para complementar, você pode habilitar Dependabot:

Crie `.github/dependabot.yml`:

```yaml
version: 2
updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
      interval: "weekly"
    open-pull-requests-limit: 10
```

## 📈 Próximas Melhorias

- [ ] Code coverage reporting
- [ ] Deploy automático para staging
- [ ] Testes E2E
- [ ] Performance benchmarks
- [ ] Renovate bot como alternativa
- [ ] Semantic release

## 💡 Boas Práticas

### Revisar PRs Automáticas

1. ✅ **Sempre revisar** antes de fazer merge
2. ✅ **Testar localmente** mudanças críticas
3. ✅ **Ler changelogs** das dependências atualizadas
4. ✅ **Verificar breaking changes**

### Manter Workflows Atualizados

1. Atualizar actions regularmente:
   - `actions/checkout@v4` → última versão
   - `actions/setup-node@v4` → última versão
   - `peter-evans/create-pull-request@v6` → última versão

2. Revisar configurações trimestralmente

### Monitorar Execuções

1. Configurar notificações de falhas
2. Revisar workflow runs semanalmente
3. Investigar falhas recorrentes

## 📚 Recursos

- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [npm-check-updates](https://github.com/raineorshine/npm-check-updates)
- [Create Pull Request Action](https://github.com/peter-evans/create-pull-request)
- [Workflow Syntax](https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions)

## 🤝 Contribuindo

Para adicionar novos workflows:

1. Criar arquivo em `.github/workflows/`
2. Usar nome descritivo: `nome-do-workflow.yml`
3. Documentar neste arquivo
4. Testar com `workflow_dispatch` primeiro
5. Criar PR para revisão

---

**Última Atualização:** Novembro 2025  
**Mantido por:** [@faelribeiro22](https://github.com/faelribeiro22)
