# Guia Rápido - MicroSaaS Template

## 🎯 Primeiros Passos

### 1. Configurar PostgreSQL Local

Se você não tem PostgreSQL instalado:

**Ubuntu/Debian:**
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

**macOS (com Homebrew):**
```bash
brew install postgresql@14
brew services start postgresql@14
```

**Windows:**
Baixe e instale de: https://www.postgresql.org/download/windows/

### 2. Criar Banco de Dados

```bash
# Acessar PostgreSQL
sudo -u postgres psql

# Criar banco de dados
CREATE DATABASE microsaas;

# Criar usuário (opcional)
CREATE USER microsaas_user WITH PASSWORD 'sua_senha';
GRANT ALL PRIVILEGES ON DATABASE microsaas TO microsaas_user;

# Sair
\q
```

### 3. Configurar Ambiente

Edite o arquivo `.env`:

```env
DATABASE_URL=postgresql://postgres:sua_senha@localhost:5432/microsaas
BETTER_AUTH_SECRET=$(openssl rand -base64 32)
BETTER_AUTH_URL=http://localhost:3000
```

### 4. Inicializar Projeto

```bash
# Instalar dependências
npm install

# Sincronizar banco de dados
npm run db:push

# Iniciar desenvolvimento
npm run dev
```

## 🔨 Desenvolvimento

### Adicionar Nova Rota

1. Criar arquivo em `src/routes/`:
```tsx
// src/routes/nova-rota.tsx
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/nova-rota')({
  component: NovaRotaPage,
});

function NovaRotaPage() {
  return <div>Nova Rota</div>;
}
```

### Criar Novo Componente

```tsx
// src/components/MeuComponente.tsx
import { Button } from '~/components/ui/Button';

export function MeuComponente() {
  return <Button>Clique aqui</Button>;
}
```

### Adicionar Tabela no Banco

1. Editar `src/db/schema.ts`:
```typescript
export const minhaTabela = pgTable('minha_tabela', {
  id: uuid('id').primaryKey().defaultRandom(),
  nome: text('nome').notNull(),
  createdAt: timestamp('created_at').defaultNow(),
});
```

2. Sincronizar:
```bash
npm run db:push
```

## 🐛 Troubleshooting

### Erro de conexão com banco de dados

Verifique se:
- PostgreSQL está rodando: `sudo systemctl status postgresql`
- DATABASE_URL está correta no `.env`
- Banco de dados existe: `psql -l`

### Erro ao importar módulos

Execute:
```bash
rm -rf node_modules package-lock.json
npm install
```

### Porta 3000 em uso

Altere a porta no script dev do `package.json`:
```json
"dev": "vite dev --port 3001"
```

## 📝 Comandos Úteis

```bash
# Ver banco de dados no Drizzle Studio
npm run db:studio

# Gerar tipos do banco
npm run db:generate

# Build para produção
npm run build

# Testar build de produção
npm run serve

# Executar testes
npm test
```

## 🚀 Deploy Rápido

### Vercel (Recomendado)

1. Instalar CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Adicionar variáveis de ambiente no dashboard da Vercel

### Railway

1. Instalar CLI:
```bash
npm i -g @railway/cli
```

2. Deploy:
```bash
railway login
railway init
railway up
```

## 💡 Dicas

- Use `npm run db:studio` para visualizar/editar dados
- Componentes UI em `src/components/ui/` são reutilizáveis
- Better Auth suporta OAuth facilmente
- TanStack Router tem cache automático de rotas
- Use Server Functions para lógica backend

## 📚 Recursos Adicionais

- [TanStack Start Docs](https://tanstack.com/start)
- [Better Auth Docs](https://www.better-auth.com/)
- [Drizzle ORM Docs](https://orm.drizzle.team/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
