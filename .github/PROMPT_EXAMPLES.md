# 💡 Exemplos de Prompts Úteis para o MicroSaaS Template

Este arquivo contém exemplos de prompts que funcionam bem com este template, considerando sua arquitetura e padrões.

## 🎨 Componentes UI

### Criar Novo Componente

```
Crie um componente Modal reutilizável em src/components/ui/Modal.tsx 
seguindo o padrão dos outros componentes UI do projeto. 
Deve ter props: isOpen, onClose, title, children
```

```
Adicione um componente Select dropdown em src/components/ui/Select.tsx
com suporte a label, error e options como array de {value, label}
```

### Customizar Componente Existente

```
Adicione uma variante "link" ao componente Button
que tenha aparência de link mas funcionalidade de botão
```

```
Atualize o componente Input para suportar um ícone à esquerda
mantendo a compatibilidade com o código existente
```

## 🛣️ Rotas e Navegação

### Criar Novas Páginas

```
Crie uma página de perfil do usuário em /profile
que mostre nome, email e data de criação da conta
usando os componentes UI existentes
```

```
Adicione uma página de configurações em /settings
com tabs para perfil, segurança e notificações
```

### Rotas Protegidas

```
Crie uma rota protegida /admin/users
que só pode ser acessada por usuários autenticados
e redireciona para /login se não autenticado
```

### API Endpoints

```
Crie um endpoint API em /api/users/[id]
que retorna os dados do usuário usando Drizzle ORM
```

```
Adicione um endpoint POST em /api/posts
para criar novos posts no banco de dados
```

## 🗄️ Database

### Criar Tabelas

```
Adicione uma tabela 'posts' ao schema do banco
com campos: id, title, content, userId, createdAt, updatedAt
e relacionamento com users
```

```
Crie uma tabela 'subscriptions' para planos de assinatura
com campos: id, userId, planId, status, startDate, endDate
```

### Queries

```
Crie uma função em src/lib/db-queries.ts
para buscar posts de um usuário com paginação
usando Drizzle ORM
```

```
Adicione uma query para buscar usuários ativos
nos últimos 30 dias
```

## 🔐 Autenticação

### OAuth

```
Configure OAuth do GitHub no Better Auth
incluindo variáveis de ambiente e botão de login
```

```
Adicione login com Google mantendo o mesmo
padrão visual do formulário de email/senha
```

### Proteção de Rotas

```
Crie um middleware para proteger todas as rotas
que começam com /dashboard
```

### Reset de Senha

```
Implemente fluxo completo de reset de senha:
- Página de solicitação
- Email com token
- Página de nova senha
```

## 🎨 Estilo e UI

### Temas

```
Adicione suporte a dark mode usando Tailwind
com toggle no header da aplicação
```

### Animações

```
Adicione animações suaves nos componentes Card
usando Tailwind transitions
```

### Responsividade

```
Verifique e corrija a responsividade da página dashboard
para telas mobile (< 768px)
```

## 📧 Features Comuns

### Sistema de Email

```
Configure integração com Resend para enviar
emails de boas-vindas após registro
```

### Upload de Arquivos

```
Adicione upload de avatar do usuário
usando Cloudinary ou similar
```

### Pagamentos

```
Configure Stripe para planos de assinatura
com checkout e webhook
```

### Notificações

```
Crie um sistema de notificações in-app
usando toast para feedback imediato
```

## 🧪 Testes

### Unit Tests

```
Crie testes unitários para os componentes
Button e Input usando Vitest
```

### Integration Tests

```
Adicione teste de integração para o fluxo
completo de login/registro
```

## 🚀 Deploy e DevOps

### Configuração

```
Configure GitHub Actions para CI/CD
com testes e deploy automático na Vercel
```

### Environment

```
Documente todas as variáveis de ambiente
necessárias para deploy em produção
```

### Migrations

```
Converta o projeto para usar migrations
do Drizzle ao invés de db:push
```

## 📊 Analytics e Monitoramento

### Analytics

```
Integre PostHog para analytics
rastreando pageviews e eventos customizados
```

### Error Tracking

```
Configure Sentry para rastreamento de erros
em produção
```

## 🔧 Refatoração

### Performance

```
Analise e otimize a performance da página inicial
usando React.lazy e code splitting
```

### Type Safety

```
Revise todos os arquivos em src/routes
e adicione tipos faltantes
```

### Clean Code

```
Refatore src/components/auth/LoginForm.tsx
extraindo lógica de validação para um hook customizado
```

## 📝 Documentação

### API Docs

```
Gere documentação OpenAPI para todos
os endpoints em /api
```

### Component Docs

```
Crie documentação Storybook para
os componentes UI
```

## 🎯 Exemplos Completos

### Feature Completa

```
Implemente feature completa de "Posts":
1. Tabela no banco (posts)
2. CRUD API endpoints
3. Páginas de listagem e criação
4. Componentes de card de post
5. Proteção de rotas
6. Validação com Zod
```

### Módulo Admin

```
Crie módulo admin completo:
1. Rota /admin
2. Listagem de usuários
3. Estatísticas (total users, posts, etc)
4. Gráficos com recharts
5. Proteção por role
```

## 🤔 Troubleshooting

### Debug

```
Estou recebendo erro "Cannot find module '~/components/ui/Button'"
O que pode estar errado?
```

```
O TypeScript está reclamando de tipos em Better Auth
Como resolver?
```

### Performance

```
A página dashboard está lenta para carregar
Como posso otimizar?
```

## 💡 Dicas de Prompts Eficazes

### ✅ Bons Prompts

- Específicos: "Crie componente X em src/path com props Y e Z"
- Contextualizados: "Seguindo o padrão de Button.tsx, crie..."
- Completos: "Inclua tipagem TypeScript, validação e testes"

### ❌ Prompts a Evitar

- Vagos: "Crie um componente"
- Sem contexto: "Adicione autenticação" (já existe)
- Sem path: "Faça uma página de perfil" (onde?)

## 🎓 Aprendizado

### Entender Padrões

```
Explique como funciona o sistema de rotas
file-based do TanStack Router neste projeto
```

```
Como o Better Auth gerencia sessões
neste template?
```

### Best Practices

```
Quais são as melhores práticas para
organizar Server Functions no TanStack Start?
```

```
Como devo estruturar queries complexas
com Drizzle ORM?
```

---

## 📚 Recursos Adicionais

Sempre consulte:
- `.github/PROJECT_CONTEXT.md` - Contexto completo
- `README.md` - Documentação
- `QUICKSTART.md` - Guia rápido

**Dica:** Copie e adapte estes prompts às suas necessidades específicas!
