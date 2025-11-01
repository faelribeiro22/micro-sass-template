# 🚀 MicroSaaS Template# 🚀 MicroSaaS TemplateWelcome to your new TanStack app! 



Template completo e moderno para desenvolvimento rápido de aplicações SaaS usando **TanStack Start**, com autenticação, banco de dados e componentes UI prontos para uso.



## ✨ CaracterísticasTemplate completo e moderno para desenvolvimento rápido de aplicações SaaS usando **TanStack Start**, com autenticação, banco de dados e componentes UI prontos para uso.# Getting Started



- 🔐 **Autenticação Completa** - Sistema de login/registro com [Better Auth](https://www.better-auth.com/)

- 🗄️ **Banco de Dados Type-Safe** - PostgreSQL + [Drizzle ORM](https://orm.drizzle.team/)

- ⚡ **TanStack Start** - Framework full-stack com SSR, streaming e roteamento avançado## ✨ CaracterísticasTo run this application:

- 🎨 **Tailwind CSS** - Estilização moderna e responsiva

- 📝 **TypeScript** - Type-safety completo em todo o stack

- 🧩 **Componentes UI** - Componentes reutilizáveis pré-construídos

- 🔥 **Hot Module Replacement** - Desenvolvimento ultra-rápido com Vite- 🔐 **Autenticação Completa** - Sistema de login/registro com [Better Auth](https://www.better-auth.com/)```bash

- 📱 **Responsivo** - Design mobile-first

- 🗄️ **Banco de Dados Type-Safe** - PostgreSQL + [Drizzle ORM](https://orm.drizzle.team/)npm install

## 📋 Pré-requisitos

- ⚡ **TanStack Start** - Framework full-stack com SSR, streaming e roteamento avançadonpm run start

- Node.js 18+ 

- PostgreSQL 14+- 🎨 **Tailwind CSS** - Estilização moderna e responsiva```

- npm ou yarn

- 📝 **TypeScript** - Type-safety completo em todo o stack

## 🚀 Começando

- 🧩 **Componentes UI** - Componentes reutilizáveis pré-construídos# Building For Production

### 1. Clone o repositório

- 🔥 **Hot Module Replacement** - Desenvolvimento ultra-rápido com Vite

```bash

git clone https://github.com/faelribeiro22/micro-sass-template.git- 📱 **Responsivo** - Design mobile-firstTo build this application for production:

cd micro-sass-template

```



### 2. Instale as dependências## 📋 Pré-requisitos```bash



```bashnpm run build

npm install

```- Node.js 18+ ```



### 3. Configure as variáveis de ambiente- PostgreSQL 14+



Copie o arquivo `.env.example` para `.env` e configure suas variáveis:- npm ou yarn## Testing



```bash

cp .env.example .env

```## 🚀 ComeçandoThis project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:



Edite o arquivo `.env` com suas configurações:



```env### 1. Clone o repositório```bash

DATABASE_URL=postgresql://user:password@localhost:5432/microsaas

BETTER_AUTH_SECRET=your-secret-key-herenpm run test

BETTER_AUTH_URL=http://localhost:3000

```\`\`\`bash```



> **Dica:** Para gerar um secret seguro, use: `openssl rand -base64 32`git clone <seu-repo>



### 4. Configure o banco de dadoscd micro-sass## Styling



Execute as migrações do banco de dados:\`\`\`



```bashThis project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

npm run db:push

```### 2. Instale as dependências



### 5. Inicie o servidor de desenvolvimento



```bash\`\`\`bash

npm run dev

```npm install



Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.\`\`\`## Routing



## 📁 Estrutura do ProjetoThis project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file based router. Which means that the routes are managed as files in `src/routes`.



```### 3. Configure as variáveis de ambiente

src/

├── components/          # Componentes React reutilizáveis### Adding A Route

│   ├── auth/           # Componentes de autenticação

│   │   ├── LoginForm.tsxCopie o arquivo `.env.example` para `.env` e configure suas variáveis:

│   │   └── SignupForm.tsx

│   ├── layout/         # Componentes de layoutTo add a new route to your application just add another a new file in the `./src/routes` directory.

│   │   └── Layout.tsx

│   └── ui/             # Componentes UI básicos\`\`\`bash

│       ├── Button.tsx

│       ├── Card.tsxcp .env.example .envTanStack will automatically generate the content of the route file for you.

│       └── Input.tsx

├── db/                 # Configuração do banco de dados\`\`\`

│   ├── schema.ts       # Schema do Drizzle ORM

│   └── index.ts        # Cliente do banco de dadosNow that you have two routes you can use a `Link` component to navigate between them.

├── lib/                # Utilitários e helpers

│   ├── auth-client.ts  # Cliente de autenticaçãoEdite o arquivo `.env` com suas configurações:

│   └── utils.ts        # Funções utilitárias

├── routes/             # Rotas do TanStack Router### Adding Links

│   ├── api/           # Rotas de API

│   │   └── auth/\`\`\`env

│   │       └── $.ts   # Handler de autenticação

│   ├── __root.tsx     # Layout raizDATABASE_URL=postgresql://user:password@localhost:5432/microsaasTo use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

│   ├── index.tsx      # Página inicial

│   ├── login.tsx      # Página de loginBETTER_AUTH_SECRET=your-secret-key-here

│   ├── signup.tsx     # Página de registro

│   └── dashboard.tsx  # Dashboard protegidoBETTER_AUTH_URL=http://localhost:3000```tsx

└── auth.ts            # Configuração do Better Auth

```\`\`\`import { Link } from "@tanstack/react-router";



## 🛠️ Scripts Disponíveis```



- `npm run dev` - Inicia o servidor de desenvolvimento### 4. Configure o banco de dados

- `npm run build` - Compila para produção

- `npm run serve` - Serve a build de produçãoThen anywhere in your JSX you can use it like so:

- `npm test` - Executa os testes

- `npm run db:generate` - Gera migrações do banco de dadosExecute as migrações do banco de dados:

- `npm run db:migrate` - Executa migrações

- `npm run db:push` - Sincroniza schema com o banco de dados```tsx

- `npm run db:studio` - Abre o Drizzle Studio

\`\`\`bash<Link to="/about">About</Link>

## 🔐 Autenticação

npm run db:push```

O template usa **Better Auth** para autenticação, com suporte para:

\`\`\`

- ✅ Email e senha

- ✅ Sessões segurasThis will create a link that will navigate to the `/about` route.

- ✅ Proteção de rotas

- 🔜 OAuth (GitHub, Google, etc.) - fácil de adicionar### 5. Inicie o servidor de desenvolvimento



### Adicionar Provedores OAuthMore information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).



Para adicionar OAuth, edite `src/auth.ts`:\`\`\`bash



```typescriptnpm run dev### Using A Layout

socialProviders: {

  github: {\`\`\`

    clientId: process.env.GITHUB_CLIENT_ID || '',

    clientSecret: process.env.GITHUB_CLIENT_SECRET || '',In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you use the `<Outlet />` component.

  },

  google: {Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

    clientId: process.env.GOOGLE_CLIENT_ID || '',

    clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',Here is an example layout that includes a header:

  },

}## 📁 Estrutura do Projeto

```

```tsx

Adicione as variáveis de ambiente correspondentes no arquivo `.env`.

\`\`\`import { Outlet, createRootRoute } from '@tanstack/react-router'

## 🗄️ Banco de Dados

src/import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

O template usa **Drizzle ORM** com PostgreSQL. O schema está definido em `src/db/schema.ts`.

├── components/          # Componentes React reutilizáveis

### Adicionar Novas Tabelas

│   ├── auth/           # Componentes de autenticaçãoimport { Link } from "@tanstack/react-router";

1. Edite `src/db/schema.ts`:

│   ├── layout/         # Componentes de layout

```typescript

export const posts = pgTable('posts', {│   └── ui/             # Componentes UI básicosexport const Route = createRootRoute({

  id: uuid('id').primaryKey().defaultRandom(),

  title: text('title').notNull(),├── db/                 # Configuração do banco de dados  component: () => (

  content: text('content'),

  userId: uuid('user_id').references(() => users.id, { onDelete: 'cascade' }),│   ├── schema.ts       # Schema do Drizzle ORM    <>

  createdAt: timestamp('created_at').defaultNow().notNull(),

  updatedAt: timestamp('updated_at').defaultNow().notNull(),│   └── index.ts        # Cliente do banco de dados      <header>

});

```├── lib/                # Utilitários e helpers        <nav>



2. Sincronize com o banco de dados:│   ├── auth-client.ts  # Cliente de autenticação          <Link to="/">Home</Link>



```bash│   └── utils.ts        # Funções utilitárias          <Link to="/about">About</Link>

npm run db:push

```├── routes/             # Rotas do TanStack Router        </nav>



### Visualizar Dados│   ├── api/           # Rotas de API      </header>



Use o Drizzle Studio para visualizar e editar dados:│   ├── __root.tsx     # Layout raiz      <Outlet />



```bash│   ├── index.tsx      # Página inicial      <TanStackRouterDevtools />

npm run db:studio

```│   ├── login.tsx      # Página de login    </>



Acesse [http://localhost:4983](http://localhost:4983) no navegador.│   ├── signup.tsx     # Página de registro  ),



## 🎨 Componentes UI│   └── dashboard.tsx  # Dashboard protegido})



O template inclui componentes UI básicos em `src/components/ui/`:└── auth.ts            # Configuração do Better Auth```



### Button\`\`\`



Botão com variantes e estados de loading.The `<TanStackRouterDevtools />` component is not required so you can remove it if you don't want it in your layout.



```tsx## 🛠️ Scripts Disponíveis

import { Button } from '~/components/ui/Button';

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

<Button>Clique aqui</Button>

<Button variant="secondary">Secundário</Button>- `npm run dev` - Inicia o servidor de desenvolvimento

<Button variant="outline">Outline</Button>

<Button variant="ghost">Ghost</Button>- `npm run build` - Compila para produção

<Button variant="danger">Perigo</Button>

<Button isLoading>Carregando...</Button>- `npm run serve` - Serve a build de produção## Data Fetching

```

- `npm test` - Executa os testes

### Input

- `npm run db:generate` - Gera migrações do banco de dadosThere are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

Input com label e mensagens de erro.

- `npm run db:migrate` - Executa migrações

```tsx

import { Input } from '~/components/ui/Input';- `npm run db:push` - Sincroniza schema com o banco de dadosFor example:



<Input - `npm run db:studio` - Abre o Drizzle Studio

  label="Email" 

  type="email"```tsx

  placeholder="seu@email.com"

  required## 🔐 Autenticaçãoconst peopleRoute = createRoute({

/>

<Input   getParentRoute: () => rootRoute,

  label="Senha"

  type="password"O template usa **Better Auth** para autenticação, com suporte para:  path: "/people",

  error="Senha muito curta"

/>  loader: async () => {

```

- ✅ Email e senha    const response = await fetch("https://swapi.dev/api/people");

### Card

- ✅ Sessões seguras    return response.json() as Promise<{

Card com header, title e content.

- ✅ Proteção de rotas      results: {

```tsx

import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/Card';- 🔜 OAuth (GitHub, Google, etc.) - fácil de adicionar        name: string;



<Card>      }[];

  <CardHeader>

    <CardTitle>Título do Card</CardTitle>### Adicionar Provedores OAuth    }>;

  </CardHeader>

  <CardContent>  },

    <p>Conteúdo do card...</p>

  </CardContent>Para adicionar OAuth, edite `src/auth.ts`:  component: () => {

</Card>

```    const data = peopleRoute.useLoaderData();



## 🛣️ Rotas\`\`\`typescript    return (



O projeto usa roteamento baseado em arquivos com **TanStack Router**.socialProviders: {      <ul>



### Adicionar Nova Rota  github: {        {data.results.map((person) => (



1. Crie um arquivo em `src/routes/`:    clientId: process.env.GITHUB_CLIENT_ID || '',          <li key={person.name}>{person.name}</li>



```tsx    clientSecret: process.env.GITHUB_CLIENT_SECRET || '',        ))}

// src/routes/sobre.tsx

import { createFileRoute } from '@tanstack/react-router';  },      </ul>



export const Route = createFileRoute('/sobre')({}    );

  component: SobrePage,

});\`\`\`  },



function SobrePage() {});

  return (

    <div>## 🗄️ Banco de Dados```

      <h1>Sobre Nós</h1>

      <p>Conteúdo da página sobre...</p>

    </div>

  );O template usa **Drizzle ORM** com PostgreSQL. O schema está definido em `src/db/schema.ts`.Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).

}

```



2. Use `Link` para navegar:### Adicionar novas tabelas### React-Query



```tsx

import { Link } from '@tanstack/react-router';

1. Edite `src/db/schema.ts`:React-Query is an excellent addition or alternative to route loading and integrating it into you application is a breeze.

<Link to="/sobre">Sobre</Link>

```



### Rotas Protegidas\`\`\`typescriptFirst add your dependencies:



Para proteger rotas, adicione validação no `beforeLoad`:export const posts = pgTable('posts', {



```tsx  id: uuid('id').primaryKey().defaultRandom(),```bash

export const Route = createFileRoute('/dashboard')({

  component: DashboardPage,  title: text('title').notNull(),npm install @tanstack/react-query @tanstack/react-query-devtools

  beforeLoad: async () => {

    const session = await getSession();  content: text('content'),```

    if (!session) {

      throw redirect({ to: '/login' });  userId: uuid('user_id').references(() => users.id),

    }

  },  createdAt: timestamp('created_at').defaultNow(),Next we'll need to create a query client and provider. We recommend putting those in `main.tsx`.

});

```});



## 🚀 Deploy\`\`\````tsx



### Vercel (Recomendado)import { QueryClient, QueryClientProvider } from "@tanstack/react-query";



1. Instale a CLI da Vercel:2. Sincronize com o banco de dados:



```bash// ...

npm i -g vercel

```\`\`\`bash



2. Faça o deploy:npm run db:pushconst queryClient = new QueryClient();



```bash\`\`\`

vercel

```// ...



3. Configure as variáveis de ambiente no dashboard da Vercel:## 🎨 Componentes UI

   - `DATABASE_URL`

   - `BETTER_AUTH_SECRET`if (!rootElement.innerHTML) {

   - `BETTER_AUTH_URL`

O template inclui componentes UI básicos em `src/components/ui/`:  const root = ReactDOM.createRoot(rootElement);

### Railway



1. Crie uma conta em [Railway](https://railway.app)

- `Button` - Botão com variantes e estados de loading  root.render(

2. Conecte seu repositório GitHub

- `Input` - Input com label e mensagens de erro    <QueryClientProvider client={queryClient}>

3. Configure as variáveis de ambiente

- `Card` - Card com header, title e content      <RouterProvider router={router} />

4. Railway detectará automaticamente o projeto Node.js

    </QueryClientProvider>

### Outras Plataformas

### Exemplo de uso:  );

O template funciona em qualquer plataforma que suporte Node.js:

}

- **Render** - Suporte nativo para Node.js

- **Fly.io** - Excelente para deploy global\`\`\`tsx```

- **AWS/GCP/Azure** - Plataformas enterprise

- **DigitalOcean App Platform** - Simples e diretoimport { Button } from '~/components/ui/Button';



## 🧪 Testesimport { Input } from '~/components/ui/Input';You can also add TanStack Query Devtools to the root route (optional).



O projeto usa **Vitest** para testes.import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/Card';



### Executar Testes```tsx



```bashfunction MyComponent() {import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

npm test

```  return (



### Adicionar Testes    <Card>const rootRoute = createRootRoute({



Crie arquivos `.test.ts` ou `.test.tsx`:      <CardHeader>  component: () => (



```typescript        <CardTitle>Meu Card</CardTitle>    <>

// src/lib/utils.test.ts

import { describe, it, expect } from 'vitest';      </CardHeader>      <Outlet />

import { cn } from './utils';

      <CardContent>      <ReactQueryDevtools buttonPosition="top-right" />

describe('cn', () => {

  it('deve combinar classes', () => {        <Input label="Nome" placeholder="Digite seu nome" />      <TanStackRouterDevtools />

    expect(cn('foo', 'bar')).toBe('foo bar');

  });        <Button>Enviar</Button>    </>

});

```      </CardContent>  ),



## 📚 Recursos e Documentação    </Card>});



- [TanStack Start](https://tanstack.com/start) - Framework  );```

- [TanStack Router](https://tanstack.com/router) - Roteamento

- [Better Auth](https://www.better-auth.com/) - Autenticação}

- [Drizzle ORM](https://orm.drizzle.team/) - ORM

- [Tailwind CSS](https://tailwindcss.com/) - CSS\`\`\`Now you can use `useQuery` to fetch your data.

- [Lucide Icons](https://lucide.dev/) - Ícones

- [Vitest](https://vitest.dev/) - Testes



## 🤝 Contribuindo## 🚀 Deploy```tsx



Contribuições são bem-vindas! Para contribuir:import { useQuery } from "@tanstack/react-query";



1. Faça um fork do projeto### Vercel

2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)

3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)import "./App.css";

4. Push para a branch (`git push origin feature/nova-feature`)

5. Abra um Pull Request1. Instale a CLI da Vercel:



## 📝 Licençafunction App() {



MIT © [Seu Nome]\`\`\`bash  const { data } = useQuery({



## 🎯 Próximos Passosnpm install -g vercel    queryKey: ["people"],



Após configurar o template, considere adicionar:\`\`\`    queryFn: () =>



- [ ] Testes unitários e de integração completos      fetch("https://swapi.dev/api/people")

- [ ] Integração com Stripe para pagamentos

- [ ] Sistema de emails (Resend, SendGrid, Postmark)2. Deploy:        .then((res) => res.json())

- [ ] Upload de arquivos (AWS S3, Cloudinary, UploadThing)

- [ ] Analytics (PostHog, Mixpanel, Plausible)        .then((data) => data.results as { name: string }[]),

- [ ] Monitoramento de erros (Sentry, LogRocket)

- [ ] CI/CD com GitHub Actions\`\`\`bash    initialData: [],

- [ ] Rate limiting e segurança

- [ ] Internacionalização (i18n)vercel  });

- [ ] Temas dark/light mode

\`\`\`

## 💡 Dicas

  return (

- Use `npm run db:studio` para visualizar e editar dados facilmente

- Componentes UI em `src/components/ui/` são totalmente customizáveis### Outras Plataformas    <div>

- Better Auth suporta múltiplos provedores OAuth facilmente

- TanStack Router tem cache automático de rotas para melhor performance      <ul>

- Use Server Functions para lógica backend type-safe

O template funciona em qualquer plataforma que suporte Node.js:        {data.map((person) => (

## 🐛 Solução de Problemas

          <li key={person.name}>{person.name}</li>

### Erro de conexão com banco de dados

- Railway        ))}

Verifique se:

- PostgreSQL está rodando: `sudo systemctl status postgresql`- Render      </ul>

- `DATABASE_URL` está correta no `.env`

- Banco de dados existe: `psql -l`- Fly.io    </div>



### Erros de TypeScript- AWS  );



Execute:- Digital Ocean}

```bash

npm run build

```

## 📚 Recursos e Documentaçãoexport default App;

Para ver todos os erros de tipo.

```

### Porta 3000 em uso

- [TanStack Start](https://tanstack.com/start) - Framework

Altere a porta no `package.json`:

```json- [TanStack Router](https://tanstack.com/router) - RoteamentoYou can find out everything you need to know on how to use React-Query in the [React-Query documentation](https://tanstack.com/query/latest/docs/framework/react/overview).

"dev": "vite dev --port 3001"

```- [Better Auth](https://www.better-auth.com/) - Autenticação



## 📞 Suporte- [Drizzle ORM](https://orm.drizzle.team/) - ORM## State Management



- Abra uma [issue](https://github.com/faelribeiro22/micro-sass-template/issues) para bugs- [Tailwind CSS](https://tailwindcss.com/) - CSS

- Use [Discussions](https://github.com/faelribeiro22/micro-sass-template/discussions) para dúvidas

- [Lucide Icons](https://lucide.dev/) - ÍconesAnother common requirement for React applications is state management. There are many options for state management in React. TanStack Store provides a great starting point for your project.

---



Desenvolvido com ❤️ usando TanStack Start

## 🤝 ContribuindoFirst you need to add TanStack Store as a dependency:



Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.```bash

npm install @tanstack/store

## 📝 Licença```



MITNow let's create a simple counter in the `src/App.tsx` file as a demonstration.



## 🎯 Próximos Passos```tsx

import { useStore } from "@tanstack/react-store";

Após configurar o template, considere adicionar:import { Store } from "@tanstack/store";

import "./App.css";

- [ ] Testes unitários e de integração

- [ ] Stripe para pagamentosconst countStore = new Store(0);

- [ ] Sistema de emails (Resend, SendGrid)

- [ ] Upload de arquivos (AWS S3, Cloudinary)function App() {

- [ ] Analytics (PostHog, Mixpanel)  const count = useStore(countStore);

- [ ] Monitoramento de erros (Sentry)  return (

- [ ] CI/CD (GitHub Actions)    <div>

      <button onClick={() => countStore.setState((n) => n + 1)}>

---        Increment - {count}

      </button>

Desenvolvido com ❤️ usando TanStack Start    </div>

  );
}

export default App;
```

One of the many nice features of TanStack Store is the ability to derive state from other state. That derived state will update when the base state updates.

Let's check this out by doubling the count using derived state.

```tsx
import { useStore } from "@tanstack/react-store";
import { Store, Derived } from "@tanstack/store";
import "./App.css";

const countStore = new Store(0);

const doubledStore = new Derived({
  fn: () => countStore.state * 2,
  deps: [countStore],
});
doubledStore.mount();

function App() {
  const count = useStore(countStore);
  const doubledCount = useStore(doubledStore);

  return (
    <div>
      <button onClick={() => countStore.setState((n) => n + 1)}>
        Increment - {count}
      </button>
      <div>Doubled - {doubledCount}</div>
    </div>
  );
}

export default App;
```

We use the `Derived` class to create a new store that is derived from another store. The `Derived` class has a `mount` method that will start the derived store updating.

Once we've created the derived store we can use it in the `App` component just like we would any other store using the `useStore` hook.

You can find out everything you need to know on how to use TanStack Store in the [TanStack Store documentation](https://tanstack.com/store/latest).

# Demo files

Files prefixed with `demo` can be safely deleted. They are there to provide a starting point for you to play around with the features you've installed.

# Learn More

You can learn more about all of the offerings from TanStack in the [TanStack documentation](https://tanstack.com).
