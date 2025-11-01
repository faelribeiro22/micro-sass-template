# MicroSaaS Template - Copilot Instructions

## 📚 Contexto do Projeto

**IMPORTANTE:** Antes de responder qualquer pergunta ou gerar código, consulte `.github/PROJECT_CONTEXT.md` para entender completamente a arquitetura, padrões e filosofia do projeto.

## 🎯 Regras Fundamentais

### 1. Idioma
- **Toda comunicação em Português (pt-BR)**
- Código e comentários em português quando necessário
- Documentação sempre em português

### 2. Stack Tecnológico (NÃO DESVIAR)
- **Frontend:** TanStack Start + React + TypeScript
- **Styling:** Tailwind CSS v4
- **Database:** PostgreSQL + Drizzle ORM
- **Auth:** Better Auth
- **Não sugerir alternativas** a menos que explicitamente solicitado

### 3. Padrões de Código
- **TypeScript strict mode** - sempre tipado
- **Named exports** - preferir sobre default exports
- **Functional components** - sem class components
- **Composition** - preferir sobre inheritance
- Consultar `PROJECT_CONTEXT.md` para padrões detalhados

### 4. Estrutura de Arquivos
```
src/
├── components/ui/      - Componentes base (Button, Input, Card)
├── components/auth/    - Autenticação (LoginForm, SignupForm)
├── components/layout/  - Layout (Layout, Header)
├── db/                 - Database (schema, client)
├── lib/                - Utilities (auth-client, utils)
├── routes/             - File-based routing
└── auth.ts             - Auth config
```

### 5. Imports
- **Usar alias `~/*`** para imports internos: `import { Button } from '~/components/ui/Button'`
- **Nunca usar** caminhos relativos longos: `../../components/ui/Button`

### 6. Componentes UI
- **Sempre usar componentes existentes** em `src/components/ui/`
- **Não reinventar** - Button, Input, Card já existem
- **Seguir padrão** ao criar novos componentes

## 🚨 Erros Comuns a Evitar

### ❌ NÃO FAZER:
```tsx
// Imports relativos profundos
import { Button } from '../../../components/ui/Button';

// Default exports
export default function MyComponent() {}

// Any sem justificativa
const data: any = {};

// Componentes duplicados
export function CustomButton() {} // Button já existe!

// Classes Tailwind v3
className="bg-gradient-to-r" // Usar bg-linear-to-r (v4)
```

### ✅ FAZER:
```tsx
// Alias imports
import { Button } from '~/components/ui/Button';

// Named exports
export function MyComponent() {}

// Tipos explícitos
const data: User = {};

// Reutilizar componentes
import { Button } from '~/components/ui/Button';

// Classes Tailwind v4
className="bg-linear-to-r"
```

## 🎨 Componentes Disponíveis

Sempre verificar antes de criar novos:

### UI Components
- `Button` - variants: default, secondary, outline, ghost, danger
- `Input` - com label, error, required
- `Card`, `CardHeader`, `CardTitle`, `CardContent`

### Auth Components
- `LoginForm` - formulário de login completo
- `SignupForm` - formulário de registro completo

### Layout
- `Layout` - layout principal com navegação

### Utils
- `cn()` - combinar classes CSS
- `formatDate()` - formatar datas pt-BR
- `formatCurrency()` - formatar moeda R$

## 🛣️ Rotas TanStack Router

### Criar Nova Rota
```tsx
// src/routes/nova-rota.tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/nova-rota')({
  component: NovaRotaPage,
});

function NovaRotaPage() {
  return <div>Conteúdo</div>;
}
```

### Criar Rota de API
```tsx
// src/routes/api/endpoint.ts
import { createFileRoute } from '@tanstack/react-router';
import { json } from '@tanstack/react-start';

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

## 🗄️ Database com Drizzle

### Adicionar Nova Tabela
```typescript
// src/db/schema.ts
export const nomeTabela = pgTable('nome_tabela', {
  id: uuid('id').primaryKey().defaultRandom(),
  nome: text('nome').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull(),
});
```

Depois: `npm run db:push`

## 🔐 Autenticação

- **Client-side:** `import { useSession, signIn, signOut } from '~/lib/auth-client'`
- **Server-side:** `import { auth } from '~/auth'`
- **Proteger rotas:** usar `beforeLoad` no Route

## 📝 Ao Gerar Código

1. **Verificar** se componente/função já existe
2. **Seguir** padrões estabelecidos
3. **Usar** TypeScript com tipos explícitos
4. **Comentar** código complexo em português
5. **Testar** mentalmente o código antes de sugerir

## 🎯 Ao Responder Perguntas

1. **Contextualizar** com a stack do projeto
2. **Exemplos práticos** usando código existente
3. **Comandos completos** prontos para executar
4. **Links** para docs oficiais quando relevante
5. **Português** sempre, código pode ter termos em inglês

## 🚀 Scripts Comuns

```bash
npm run dev          # Desenvolvimento
npm run build        # Build produção
npm run db:push      # Sync database
npm run db:studio    # Visual DB
npm test            # Testes
```

## 📚 Documentação

- `README.md` - Documentação completa
- `QUICKSTART.md` - Guia rápido
- `.github/PROJECT_CONTEXT.md` - Contexto detalhado (CONSULTAR SEMPRE)

## 🤖 Checklist Antes de Responder

- [ ] Li o PROJECT_CONTEXT.md?
- [ ] Entendi o contexto da pergunta?
- [ ] Verifiquei código/componentes existentes?
- [ ] Minha resposta está em português?
- [ ] Segui os padrões do projeto?
- [ ] Forneci exemplos práticos?
- [ ] Inclui comandos completos se necessário?

---

**Template:** MicroSaaS v1.0.0  
**Stack:** TanStack Start + TypeScript + PostgreSQL  
**Idioma:** Português (pt-BR)
