# 🤖 Guia para Agentes de IA - MicroSaaS Template

Este documento foi criado especificamente para agentes de IA (GitHub Copilot, Claude, ChatGPT, etc.) que precisam trabalhar neste projeto.

## 📋 Índice

- [Visão Geral do Projeto](#-visão-geral-do-projeto)
- [Stack Tecnológica](#-stack-tecnológica)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Padrões de Código](#-padrões-de-código)
- [Comandos Essenciais](#-comandos-essenciais)
- [Rotas e Navegação](#-rotas-e-navegação)
- [Database e Schema](#-database-e-schema)
- [Autenticação](#-autenticação)
- [Componentes UI](#-componentes-ui)
- [Testes](#-testes)
- [Boas Práticas](#-boas-práticas)
- [Troubleshooting](#-troubleshooting)

---

## 🎯 Visão Geral do Projeto

**Tipo:** Template para aplicações SaaS  
**Objetivo:** Prototipagem rápida de micro-SaaS com autenticação e banco de dados  
**Idioma:** Português (pt-BR) - Todo código e documentação  
**Status:** Produção-ready com CI/CD configurado

### Arquivos de Contexto Importantes

Leia SEMPRE antes de fazer mudanças:
- `.github/copilot-instructions.md` - Instruções específicas do Copilot
- `.github/PROJECT_CONTEXT.md` - Contexto completo do projeto
- `.github/ARCHITECTURE.md` - Arquitetura detalhada
- `QUICKSTART.md` - Guia rápido de início
- `README.md` - Documentação principal

---

## 🛠️ Stack Tecnológica

### Core (NÃO SUBSTITUIR)

```json
{
  "framework": "TanStack Start v1.132.0",
  "runtime": "Node.js >= 20.19.0",
  "language": "TypeScript 5.7.2 (strict mode)",
  "styling": "Tailwind CSS v4.0.6",
  "database": "PostgreSQL 14+ com Drizzle ORM",
  "auth": "Better Auth v1.3.28",
  "testing": "Vitest 3.0.5 + Testing Library",
  "build": "Vite 7.1.7"
}
```

### Versões Específicas Importantes

⚠️ **ATENÇÃO:** Estas versões são críticas:
- **Node.js:** >= 20.19.0 (Vite 7 requer)
- **Tailwind CSS:** v4.x (sintaxe diferente da v3)
- **React:** 19.2.0 (última versão)

---

## 📁 Estrutura do Projeto

```
micro-sass/
├── src/
│   ├── components/
│   │   ├── ui/              # Componentes base (Button, Input, Card)
│   │   ├── auth/            # LoginForm, SignupForm
│   │   └── layout/          # Layout, Header
│   ├── routes/              # File-based routing (TanStack Router)
│   │   ├── __root.tsx       # Layout raiz
│   │   ├── index.tsx        # Página inicial (/)
│   │   ├── login.tsx        # /login
│   │   ├── signup.tsx       # /signup
│   │   ├── dashboard.tsx    # /dashboard (protegida)
│   │   └── api/
│   │       └── auth/$.ts    # API de autenticação
│   ├── db/
│   │   ├── schema.ts        # Schema Drizzle (users, sessions, etc)
│   │   └── index.ts         # Database client
│   ├── lib/
│   │   ├── auth-client.ts   # Cliente de autenticação
│   │   └── utils.ts         # Utilitários (cn, etc)
│   ├── test/
│   │   └── setup.ts         # Setup de testes
│   ├── auth.ts              # Configuração Better Auth
│   ├── router.tsx           # Router config
│   └── styles.css           # Estilos globais
├── .github/
│   ├── workflows/           # CI/CD (ci.yml, update-dependencies.yml)
│   └── *.md                 # Documentação de contexto
├── docker-compose.yml       # PostgreSQL + PgAdmin
├── drizzle.config.ts        # Config Drizzle ORM
├── vite.config.ts           # Config Vite + Vitest
└── package.json             # Dependências
```

---

## 💻 Padrões de Código

### 1. Imports

✅ **SEMPRE use alias `~/`:**
```typescript
import { Button } from '~/components/ui/Button'
import { cn } from '~/lib/utils'
import { auth } from '~/auth'
```

❌ **NUNCA use caminhos relativos profundos:**
```typescript
import { Button } from '../../../components/ui/Button' // ❌ ERRADO
```

### 2. Exports

✅ **SEMPRE use named exports:**
```typescript
export function MyComponent() {} // ✅ CORRETO
```

❌ **NUNCA use default exports:**
```typescript
export default function MyComponent() {} // ❌ ERRADO
```

### 3. TypeScript

✅ **SEMPRE defina tipos explícitos:**
```typescript
type User = {
  id: string
  name: string
  email: string
}

function getUser(id: string): User {
  // ...
}
```

❌ **NUNCA use `any` sem justificativa:**
```typescript
const data: any = {} // ❌ ERRADO
```

### 4. Tailwind CSS v4

⚠️ **IMPORTANTE:** Tailwind v4 tem sintaxe diferente da v3!

✅ **Correto (v4):**
```tsx
<div className="bg-linear-to-r from-blue-500 to-purple-500" />
<div className="bg-linear-to-br from-zinc-800 to-black" />
```

❌ **Errado (v3):**
```tsx
<div className="bg-gradient-to-r from-blue-500 to-purple-500" /> // ❌
```

**Mudanças principais:**
- `bg-gradient-to-*` → `bg-linear-to-*`
- `bg-gradient-radial` → `bg-radial`

### 5. Componentes React

✅ **Padrão funcional com TypeScript:**
```typescript
type ButtonProps = {
  children: React.ReactNode
  variant?: 'default' | 'secondary'
  onClick?: () => void
}

export function Button({ children, variant = 'default', onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={cn('base-styles', variants[variant])}>
      {children}
    </button>
  )
}
```

---

## ⚡ Comandos Essenciais

### Desenvolvimento
```bash
npm run dev              # Inicia dev server (porta 3000)
npm run build            # Build produção
npm run serve            # Preview build
npm test                 # Roda testes (Vitest)
```

### Database
```bash
npm run db:push          # Sync schema com DB
npm run db:studio        # Drizzle Studio (visual DB)
npm run db:generate      # Gera migrations
npm run db:migrate       # Executa migrations
```

### Docker
```bash
npm run docker:up        # Inicia PostgreSQL + PgAdmin
npm run docker:down      # Para containers
npm run docker:logs      # Ver logs
npm run docker:reset     # Reset completo + db:push
```

### Validação
```bash
npx tsc --noEmit         # Type check
npm run build            # Valida build
```

---

## 🛣️ Rotas e Navegação

### File-Based Routing

O TanStack Router usa file-based routing:

```typescript
// src/routes/dashboard.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: DashboardPage,
})

function DashboardPage() {
  return <div>Dashboard</div>
}
```

### Rotas API

```typescript
// src/routes/api/endpoint.ts
import { createFileRoute } from '@tanstack/react-router'
import { json } from '@tanstack/react-start'

export const Route = createFileRoute('/api/endpoint')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        return json({ data: 'response' })
      },
      POST: async ({ request }) => {
        const body = await request.json()
        return json({ success: true })
      },
    },
  },
})
```

### Proteger Rotas

```typescript
export const Route = createFileRoute('/dashboard')({
  beforeLoad: async ({ context }) => {
    const session = await context.auth.getSession()
    if (!session) {
      throw redirect({ to: '/login' })
    }
  },
  component: DashboardPage,
})
```

---

## 🗄️ Database e Schema

### Schema Drizzle

```typescript
// src/db/schema.ts
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: uuid('id').primaryKey().defaultRandom(),
  name: text('name').notNull(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
})
```

### Queries

```typescript
import { db } from '~/db'
import { users } from '~/db/schema'
import { eq } from 'drizzle-orm'

// Select
const allUsers = await db.select().from(users)
const user = await db.select().from(users).where(eq(users.id, userId))

// Insert
await db.insert(users).values({ name: 'João', email: 'joao@example.com' })

// Update
await db.update(users).set({ name: 'João Silva' }).where(eq(users.id, userId))

// Delete
await db.delete(users).where(eq(users.id, userId))
```

---

## 🔐 Autenticação

### Client-Side

```typescript
import { useSession, signIn, signOut } from '~/lib/auth-client'

function MyComponent() {
  const { data: session } = useSession()
  
  if (!session) {
    return <button onClick={() => signIn.email({ email, password })}>Login</button>
  }
  
  return (
    <div>
      <p>Olá, {session.user.name}</p>
      <button onClick={() => signOut()}>Sair</button>
    </div>
  )
}
```

### Server-Side

```typescript
import { auth } from '~/auth'

export const Route = createFileRoute('/api/protected')({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const session = await auth.api.getSession({ headers: request.headers })
        
        if (!session) {
          return new Response('Unauthorized', { status: 401 })
        }
        
        return json({ user: session.user })
      },
    },
  },
})
```

---

## 🎨 Componentes UI

### Componentes Disponíveis

**SEMPRE verifique se o componente já existe antes de criar um novo!**

#### Button
```typescript
import { Button } from '~/components/ui/Button'

<Button variant="default">Clique aqui</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Perigo</Button>
<Button isLoading>Carregando...</Button>
```

#### Input
```typescript
import { Input } from '~/components/ui/Input'

<Input 
  label="Email"
  type="email"
  placeholder="seu@email.com"
  required
  error="Email inválido"
/>
```

#### Card
```typescript
import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/Card'

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
  </CardHeader>
  <CardContent>
    Conteúdo do card
  </CardContent>
</Card>
```

### Criar Novo Componente

Template:
```typescript
// src/components/ui/NovoComponente.tsx
import { cn } from '~/lib/utils'

type NovoComponenteProps = {
  children: React.ReactNode
  className?: string
}

export function NovoComponente({ children, className }: NovoComponenteProps) {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  )
}
```

---

## 🧪 Testes

### Configuração

- **Framework:** Vitest 3.0.5
- **Environment:** jsdom
- **Testing Library:** @testing-library/react
- **Setup:** `src/test/setup.ts`

### Criar Teste

```typescript
// src/components/ui/NovoComponente.test.tsx
import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { NovoComponente } from './NovoComponente'

describe('NovoComponente', () => {
  it('deve renderizar corretamente', () => {
    render(<NovoComponente>Teste</NovoComponente>)
    expect(screen.getByText('Teste')).toBeDefined()
  })
  
  it('deve aplicar className customizado', () => {
    render(<NovoComponente className="custom">Teste</NovoComponente>)
    const element = screen.getByText('Teste')
    expect(element.className).toContain('custom')
  })
})
```

### Executar Testes

```bash
npm test              # Roda todos os testes
npm test -- --watch   # Watch mode
npm test Button       # Roda testes específicos
```

---

## ✅ Boas Práticas

### 1. Antes de Adicionar Dependência

❓ Pergunte-se:
- A dependência já existe? (verifique `package.json`)
- É realmente necessária?
- Está mantida ativamente?
- Tem vulnerabilidades conhecidas?

```bash
# Verificar CVEs antes de instalar
npm audit
```

### 2. Antes de Criar Componente

🔍 Verifique:
- Componente similar já existe em `src/components/ui/`?
- Pode ser uma variante de componente existente?
- Seguiu o padrão do projeto?

### 3. Antes de Commitar

✅ Checklist:
```bash
# 1. Type check
npx tsc --noEmit

# 2. Testes
npm test

# 3. Build
npm run build

# 4. Lint (se aplicável)
# npm run lint
```

### 4. Mensagens de Commit

Use Conventional Commits:
```bash
feat: adiciona componente Modal
fix: corrige erro de validação no LoginForm
docs: atualiza README com novos comandos
test: adiciona testes para Button component
chore: atualiza dependências
refactor: reorganiza estrutura de pastas
style: corrige formatação do código
perf: melhora performance da query de usuários
```

### 5. Pull Requests

Sempre inclua:
- ✅ Descrição clara do que foi feito
- ✅ Por que foi necessário
- ✅ Como testar
- ✅ Screenshots (se mudança visual)
- ✅ Testes passando
- ✅ Build funcionando

---

## 🐛 Troubleshooting

### Erro: "Cannot find module '~/...'"

**Causa:** Alias `~` não configurado  
**Solução:** Já está configurado em `vite.config.ts` com `vite-tsconfig-paths`

### Erro: "document is not defined" nos testes

**Causa:** Environment do Vitest não configurado  
**Solução:** Já configurado em `vite.config.ts`:
```typescript
test: {
  environment: 'jsdom',
  setupFiles: './src/test/setup.ts',
}
```

### Erro: Tailwind classes não funcionam

**Causa:** Usando sintaxe v3 em projeto v4  
**Solução:** 
```tsx
// ❌ Errado (v3)
<div className="bg-gradient-to-r" />

// ✅ Correto (v4)
<div className="bg-linear-to-r" />
```

### Erro: "Vite requires Node.js version 20.19+"

**Causa:** Node.js desatualizado  
**Solução:**
```bash
# Verificar versão
node --version

# Deve ser >= 20.19.0
# Instale via nvm:
nvm install 20
nvm use 20
```

### Erro: PostgreSQL não conecta

**Causa:** Docker não está rodando ou variáveis de ambiente erradas  
**Solução:**
```bash
# 1. Verificar se Docker está rodando
docker ps

# 2. Iniciar containers
npm run docker:up

# 3. Verificar .env
# DATABASE_URL=postgresql://microsaas_user:microsaas_password@localhost:5432/microsaas

# 4. Sync schema
npm run db:push
```

### Erro de TypeScript em vite.config.ts

**Causa:** Import errado do defineConfig  
**Solução:**
```typescript
// ❌ Errado
import { defineConfig } from 'vite'

// ✅ Correto (quando tem test config)
import { defineConfig } from 'vitest/config'
```

---

## 🚀 Workflows e CI/CD

### GitHub Actions

O projeto tem 2 workflows automáticos:

1. **CI (ci.yml)** - Roda em push/PR:
   - TypeScript check
   - Build
   - Testes
   - Security audit

2. **Update Dependencies (update-dependencies.yml)** - Semanal:
   - Verifica atualizações
   - Valida build/testes
   - Cria PR automaticamente

### Permissões Necessárias

Se workflows falharem com erro de permissão:
1. Settings → Actions → General
2. Workflow permissions → "Read and write permissions"
3. ✅ "Allow GitHub Actions to create and approve pull requests"

---

## 📚 Recursos Adicionais

### Documentação Oficial

- [TanStack Start](https://tanstack.com/start)
- [TanStack Router](https://tanstack.com/router)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Better Auth](https://www.better-auth.com/)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Vitest](https://vitest.dev/)

### Documentação do Projeto

- `README.md` - Visão geral completa
- `QUICKSTART.md` - Início rápido (< 5 min)
- `DOCKER.md` - Guia do Docker
- `.github/PROJECT_CONTEXT.md` - Contexto completo
- `.github/ARCHITECTURE.md` - Decisões arquiteturais
- `.github/WORKFLOWS.md` - Guia dos workflows
- `.github/PROMPT_EXAMPLES.md` - Exemplos de prompts

---

## 🤝 Contribuindo

### Para Agentes de IA

Ao trabalhar neste projeto:

1. ✅ **SEMPRE leia** `.github/copilot-instructions.md` primeiro
2. ✅ **SEMPRE verifique** componentes/funções existentes antes de criar novos
3. ✅ **SEMPRE use** os padrões estabelecidos
4. ✅ **SEMPRE teste** antes de commitar
5. ✅ **SEMPRE documente** código complexo em português

### Não Fazer

❌ Sugerir mudança de stack tecnológica  
❌ Adicionar dependências sem necessidade  
❌ Usar caminhos relativos em vez de alias  
❌ Criar componentes duplicados  
❌ Ignorar padrões de código estabelecidos  
❌ Usar sintaxe Tailwind v3  

---

## 🎯 Checklist Rápido para Agentes

Antes de qualquer mudança, confirme:

- [ ] Li `.github/copilot-instructions.md`
- [ ] Entendi o contexto em `.github/PROJECT_CONTEXT.md`
- [ ] Verifiquei se o componente/função já existe
- [ ] Estou usando alias `~/` para imports
- [ ] Estou usando named exports
- [ ] Estou usando TypeScript com tipos explícitos
- [ ] Estou usando sintaxe Tailwind v4 (`bg-linear-to-*`)
- [ ] Meu código está em português (comentários/docs)
- [ ] Rodei `npx tsc --noEmit` (sem erros)
- [ ] Rodei `npm test` (todos passando)
- [ ] Rodei `npm run build` (build OK)

---

**Última Atualização:** Novembro 2025  
**Versão do Template:** 1.0.0  
**Mantido por:** [@faelribeiro22](https://github.com/faelribeiro22)

---

💡 **Dica Final:** Quando em dúvida, consulte os arquivos de contexto na pasta `.github/`. Eles contêm informações detalhadas sobre arquitetura, decisões técnicas e exemplos práticos.
