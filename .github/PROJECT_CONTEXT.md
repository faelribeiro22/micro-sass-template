# Contexto do Projeto - MicroSaaS Template

## 📋 Visão Geral do Projeto

**Nome:** MicroSaaS Template  
**Propósito:** Template completo para desenvolvimento rápido de aplicações SaaS  
**Stack Principal:** TanStack Start + TypeScript + PostgreSQL  
**Idioma:** Português (pt-BR)  
**Repositório:** faelribeiro22/micro-sass-template

## 🎯 Objetivos e Filosofia

### Objetivos Principais
1. **Prototipagem Rápida** - Permitir desenvolvimento de MVPs em horas, não dias
2. **Autenticação Pronta** - Sistema completo de auth sem configuração adicional
3. **Type-Safety Total** - TypeScript em todo o stack (frontend, backend, database)
4. **Produção-Ready** - Código pronto para deploy sem modificações

### Filosofia de Design
- **Convenção sobre Configuração** - Padrões sensatos pré-configurados
- **Componentes Reutilizáveis** - DRY (Don't Repeat Yourself)
- **Documentação Clara** - Código auto-explicativo e bem documentado
- **Developer Experience** - Foco em produtividade e facilidade de uso

## 🏗️ Arquitetura Técnica

### Stack Completo

#### Frontend
- **Framework:** TanStack Start (React-based, Full-stack)
- **Roteamento:** TanStack Router (File-based routing)
- **Styling:** Tailwind CSS v4
- **Ícones:** Lucide React
- **Notificações:** React Hot Toast
- **Dev Tools:** React DevTools, Router DevTools

#### Backend
- **Runtime:** Node.js 18+
- **Build Tool:** Vite
- **Server:** Nitro (via TanStack Start)

#### Database
- **SGBD:** PostgreSQL 14+
- **ORM:** Drizzle ORM
- **Migrations:** Drizzle Kit

#### Autenticação
- **Biblioteca:** Better Auth
- **Métodos:** Email/Password (OAuth pronto para adicionar)
- **Sessões:** Database-backed sessions
- **Segurança:** Bcrypt para hashing, CSRF protection

### Estrutura de Diretórios

```
src/
├── components/          # Componentes React
│   ├── auth/           # Autenticação (LoginForm, SignupForm)
│   ├── layout/         # Layout (Header, Footer, Navigation)
│   └── ui/             # Componentes base (Button, Input, Card)
├── db/                 # Database
│   ├── schema.ts       # Schema Drizzle (users, sessions, accounts, verification_tokens)
│   └── index.ts        # DB client
├── lib/                # Utilities
│   ├── auth-client.ts  # Better Auth client-side
│   └── utils.ts        # Helper functions (cn, formatDate, formatCurrency)
├── routes/             # File-based routing
│   ├── api/           # API routes
│   ├── __root.tsx     # Root layout
│   ├── index.tsx      # Landing page
│   ├── login.tsx      # Login page
│   ├── signup.tsx     # Signup page
│   └── dashboard.tsx  # Protected dashboard
└── auth.ts            # Better Auth server config
```

## 🎨 Padrões de Código

### Convenções de Nomenclatura

1. **Arquivos:**
   - Componentes: PascalCase (`Button.tsx`, `LoginForm.tsx`)
   - Utilitários: camelCase (`auth-client.ts`, `utils.ts`)
   - Rotas: kebab-case ou flat (`login.tsx`, `dashboard.tsx`)

2. **Variáveis e Funções:**
   - camelCase para variáveis e funções (`userName`, `handleSubmit`)
   - PascalCase para componentes React (`LoginForm`, `Button`)
   - SCREAMING_SNAKE_CASE para constantes (`DATABASE_URL`, `MAX_RETRIES`)

3. **CSS Classes:**
   - Tailwind utility classes
   - Ordenação: layout → spacing → typography → visual → animations

### Padrões de Componentes

```tsx
// ✅ Padrão Preferido
import { ComponentProps } from 'react';

interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'default' | 'secondary' | 'outline';
  isLoading?: boolean;
}

export function Button({ variant = 'default', isLoading, children, ...props }: ButtonProps) {
  return (
    <button className={cn(baseStyles, variants[variant])} {...props}>
      {isLoading ? <Spinner /> : children}
    </button>
  );
}
```

### Padrões de Rotas

```tsx
// ✅ Rota Padrão
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/rota')({
  component: MinhaPage,
});

function MinhaPage() {
  return <div>Conteúdo</div>;
}

// ✅ Rota de API
export const Route = createFileRoute('/api/endpoint')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        return json({ data: 'response' });
      },
    },
  },
});
```

### Padrões de Database

```typescript
// ✅ Schema Drizzle
export const tableName = pgTable('table_name', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

## 🔐 Segurança

### Práticas Implementadas

1. **Autenticação:**
   - Passwords hasheados com bcrypt
   - Sessions com expiração
   - CSRF tokens
   - Email verification ready

2. **Variáveis de Ambiente:**
   - Nunca commitar `.env`
   - Sempre usar `.env.example` como template
   - Secrets gerados com `openssl rand -base64 32`

3. **Database:**
   - Prepared statements (via Drizzle)
   - Foreign keys com cascade delete
   - Timestamps em todas as tabelas

## 📦 Dependências Principais

### Produção
```json
{
  "@tanstack/react-start": "^1.132.0",
  "@tanstack/react-router": "^1.132.0",
  "better-auth": "latest",
  "drizzle-orm": "latest",
  "postgres": "latest",
  "react": "^19.2.0",
  "react-hot-toast": "latest",
  "tailwindcss": "^4.0.6",
  "lucide-react": "latest",
  "zod": "latest"
}
```

### Desenvolvimento
```json
{
  "drizzle-kit": "latest",
  "typescript": "^5.7.2",
  "vite": "^7.1.7",
  "vitest": "^3.0.5"
}
```

## 🚀 Scripts NPM

```json
{
  "dev": "vite dev --port 3000",           // Desenvolvimento
  "build": "vite build",                   // Build produção
  "serve": "vite preview",                 // Preview build
  "test": "vitest run",                    // Testes
  "db:generate": "drizzle-kit generate",   // Gerar migrations
  "db:migrate": "drizzle-kit migrate",     // Executar migrations
  "db:push": "drizzle-kit push",          // Sync schema
  "db:studio": "drizzle-kit studio"        // DB viewer
}
```

## 🎯 Casos de Uso Comuns

### 1. Adicionar Nova Página

1. Criar arquivo em `src/routes/nome-da-pagina.tsx`
2. Usar `createFileRoute('/nome-da-pagina')`
3. Adicionar link no `Layout.tsx` se necessário

### 2. Adicionar Novo Componente UI

1. Criar em `src/components/ui/NomeComponente.tsx`
2. Seguir padrão de props com `ComponentProps`
3. Usar `cn()` para classes condicionais
4. Exportar com nome (não default)

### 3. Adicionar Nova Tabela

1. Definir em `src/db/schema.ts`
2. Executar `npm run db:push`
3. Verificar no `npm run db:studio`

### 4. Adicionar API Endpoint

1. Criar em `src/routes/api/nome.ts`
2. Usar `server.handlers` com GET/POST/etc
3. Retornar `json()` do TanStack Start

## 🔧 Troubleshooting

### Problemas Comuns

1. **Imports com `~` não funcionam**
   - Verificar `tsconfig.json` → `paths` → `"~/*": ["./src/*"]`
   - Reiniciar TypeScript server

2. **Erro de conexão com banco**
   - Verificar PostgreSQL rodando
   - Confirmar `DATABASE_URL` no `.env`
   - Testar conexão: `psql $DATABASE_URL`

3. **Tailwind classes não aplicam**
   - Verificar sintaxe Tailwind v4 (use `bg-linear-to-r` não `bg-gradient-to-r`)
   - Rebuild: `npm run build`

4. **Auth não funciona**
   - Verificar `BETTER_AUTH_SECRET` configurado
   - Verificar `BETTER_AUTH_URL` correto
   - Checar tabelas criadas no banco

## 📝 Convenções de Commit

Usar Conventional Commits:

```
feat: adiciona nova funcionalidade
fix: corrige bug
docs: atualiza documentação
style: formatação, missing semi colons, etc
refactor: refatoração de código
test: adiciona testes
chore: atualiza dependências, config, etc
```

## 🎨 Design System

### Cores Principais
- Primary: Blue 600 (#2563eb)
- Secondary: Cyan 500 (#06b6d4)
- Success: Green 600
- Danger: Red 600
- Gray scale: Gray 50-900

### Componentes UI Disponíveis

1. **Button:** default, secondary, outline, ghost, danger
2. **Input:** com label, error, required
3. **Card:** com Header, Title, Content

### Espaçamentos
- Usar escala do Tailwind: 4, 6, 8, 12, 16, 24, 32
- Gap entre elementos: 4 ou 6
- Padding em cards: 6
- Margin entre seções: 8 ou 12

## 🌐 Internacionalização

**Atual:** Português (pt-BR)  
**Formatos:**
- Data: `dd/MM/yyyy` ou `dd de MMMM de yyyy`
- Moeda: `R$ 1.234,56`
- Números: `1.234,56`

**Funções utilitárias:**
- `formatDate(date)` - Formata datas
- `formatCurrency(amount)` - Formata valores monetários

## 🚢 Deploy

### Plataformas Recomendadas (em ordem)

1. **Vercel** (Recomendado)
   - Deploy automático
   - Edge functions
   - PostgreSQL via Neon/Supabase

2. **Railway**
   - PostgreSQL incluído
   - Deploy simples
   - Pricing justo

3. **Render**
   - Free tier generoso
   - PostgreSQL incluído

### Variáveis de Ambiente para Deploy

```env
DATABASE_URL=postgresql://...
BETTER_AUTH_SECRET=xxx
BETTER_AUTH_URL=https://seu-dominio.com
NODE_ENV=production
```

## 📚 Recursos Educacionais

### Documentação Oficial
- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [Better Auth](https://www.better-auth.com/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Tailwind CSS](https://tailwindcss.com/)

### Tutoriais e Guias
- Ver `QUICKSTART.md` para início rápido
- Ver `README.md` para documentação completa

## 🤖 Guidelines para IA

### Ao Gerar Código

1. **Sempre:**
   - Usar TypeScript com tipos explícitos
   - Seguir padrões de código estabelecidos
   - Adicionar comentários em português quando necessário
   - Usar componentes UI existentes quando possível
   - Manter consistência com código existente

2. **Nunca:**
   - Usar `any` sem justificativa
   - Criar componentes duplicados
   - Ignorar validações de tipo
   - Commitar secrets ou `.env`
   - Usar bibliotecas não listadas sem consultar

3. **Preferências:**
   - Named exports > default exports
   - Functional components > class components
   - Composition > inheritance
   - Server components quando possível
   - Type inference quando óbvio

### Ao Responder Perguntas

1. **Contexto:**
   - Sempre considerar a stack do projeto
   - Referenciar arquivos/código existente
   - Fornecer exemplos práticos do projeto

2. **Formato:**
   - Explicações em português
   - Código comentado quando complexo
   - Links para documentação oficial quando relevante

3. **Exemplos:**
   - Usar código real do projeto
   - Mostrar antes/depois em mudanças
   - Incluir comandos completos para execução

## 📊 Métricas e Objetivos

### Performance
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Lighthouse Score: > 90

### Code Quality
- TypeScript strict mode: ON
- Test coverage: > 70% (objetivo)
- Zero linting errors

### Developer Experience
- Setup time: < 10 minutos
- Hot reload: < 1 segundo
- Build time: < 30 segundos

## 🔄 Roadmap e Evoluções

### Próximas Implementações Planejadas

1. **Curto Prazo:**
   - [ ] Testes unitários completos
   - [ ] OAuth providers (GitHub, Google)
   - [ ] Email verification
   - [ ] Password reset

2. **Médio Prazo:**
   - [ ] Stripe integration
   - [ ] Email system (Resend)
   - [ ] File upload (S3/Cloudinary)
   - [ ] Dark mode

3. **Longo Prazo:**
   - [ ] Multi-tenancy
   - [ ] Admin dashboard
   - [ ] Analytics integration
   - [ ] i18n support

## 🆘 Quando em Dúvida

1. Verificar código existente em `src/`
2. Consultar `README.md` e `QUICKSTART.md`
3. Checar documentação oficial das libs
4. Seguir padrões já estabelecidos no projeto
5. Priorizar simplicidade e manutenibilidade

---

**Última atualização:** Novembro 2025  
**Versão do Template:** 1.0.0  
**Mantido por:** [@faelribeiro22](https://github.com/faelribeiro22)
