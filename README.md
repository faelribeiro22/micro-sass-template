# 🚀 MicroSaaS TemplateWelcome to your new TanStack app! 



Template completo e moderno para desenvolvimento rápido de aplicações SaaS usando **TanStack Start**, com autenticação, banco de dados e componentes UI prontos para uso.# Getting Started



## ✨ CaracterísticasTo run this application:



- 🔐 **Autenticação Completa** - Sistema de login/registro com [Better Auth](https://www.better-auth.com/)```bash

- 🗄️ **Banco de Dados Type-Safe** - PostgreSQL + [Drizzle ORM](https://orm.drizzle.team/)npm install

- ⚡ **TanStack Start** - Framework full-stack com SSR, streaming e roteamento avançadonpm run start

- 🎨 **Tailwind CSS** - Estilização moderna e responsiva```

- 📝 **TypeScript** - Type-safety completo em todo o stack

- 🧩 **Componentes UI** - Componentes reutilizáveis pré-construídos# Building For Production

- 🔥 **Hot Module Replacement** - Desenvolvimento ultra-rápido com Vite

- 📱 **Responsivo** - Design mobile-firstTo build this application for production:



## 📋 Pré-requisitos```bash

npm run build

- Node.js 18+ ```

- PostgreSQL 14+

- npm ou yarn## Testing



## 🚀 ComeçandoThis project uses [Vitest](https://vitest.dev/) for testing. You can run the tests with:



### 1. Clone o repositório```bash

npm run test

\`\`\`bash```

git clone <seu-repo>

cd micro-sass## Styling

\`\`\`

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling.

### 2. Instale as dependências



\`\`\`bash

npm install

\`\`\`## Routing

This project uses [TanStack Router](https://tanstack.com/router). The initial setup is a file based router. Which means that the routes are managed as files in `src/routes`.

### 3. Configure as variáveis de ambiente

### Adding A Route

Copie o arquivo `.env.example` para `.env` e configure suas variáveis:

To add a new route to your application just add another a new file in the `./src/routes` directory.

\`\`\`bash

cp .env.example .envTanStack will automatically generate the content of the route file for you.

\`\`\`

Now that you have two routes you can use a `Link` component to navigate between them.

Edite o arquivo `.env` com suas configurações:

### Adding Links

\`\`\`env

DATABASE_URL=postgresql://user:password@localhost:5432/microsaasTo use SPA (Single Page Application) navigation you will need to import the `Link` component from `@tanstack/react-router`.

BETTER_AUTH_SECRET=your-secret-key-here

BETTER_AUTH_URL=http://localhost:3000```tsx

\`\`\`import { Link } from "@tanstack/react-router";

```

### 4. Configure o banco de dados

Then anywhere in your JSX you can use it like so:

Execute as migrações do banco de dados:

```tsx

\`\`\`bash<Link to="/about">About</Link>

npm run db:push```

\`\`\`

This will create a link that will navigate to the `/about` route.

### 5. Inicie o servidor de desenvolvimento

More information on the `Link` component can be found in the [Link documentation](https://tanstack.com/router/v1/docs/framework/react/api/router/linkComponent).

\`\`\`bash

npm run dev### Using A Layout

\`\`\`

In the File Based Routing setup the layout is located in `src/routes/__root.tsx`. Anything you add to the root route will appear in all the routes. The route content will appear in the JSX where you use the `<Outlet />` component.

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

Here is an example layout that includes a header:

## 📁 Estrutura do Projeto

```tsx

\`\`\`import { Outlet, createRootRoute } from '@tanstack/react-router'

src/import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

├── components/          # Componentes React reutilizáveis

│   ├── auth/           # Componentes de autenticaçãoimport { Link } from "@tanstack/react-router";

│   ├── layout/         # Componentes de layout

│   └── ui/             # Componentes UI básicosexport const Route = createRootRoute({

├── db/                 # Configuração do banco de dados  component: () => (

│   ├── schema.ts       # Schema do Drizzle ORM    <>

│   └── index.ts        # Cliente do banco de dados      <header>

├── lib/                # Utilitários e helpers        <nav>

│   ├── auth-client.ts  # Cliente de autenticação          <Link to="/">Home</Link>

│   └── utils.ts        # Funções utilitárias          <Link to="/about">About</Link>

├── routes/             # Rotas do TanStack Router        </nav>

│   ├── api/           # Rotas de API      </header>

│   ├── __root.tsx     # Layout raiz      <Outlet />

│   ├── index.tsx      # Página inicial      <TanStackRouterDevtools />

│   ├── login.tsx      # Página de login    </>

│   ├── signup.tsx     # Página de registro  ),

│   └── dashboard.tsx  # Dashboard protegido})

└── auth.ts            # Configuração do Better Auth```

\`\`\`

The `<TanStackRouterDevtools />` component is not required so you can remove it if you don't want it in your layout.

## 🛠️ Scripts Disponíveis

More information on layouts can be found in the [Layouts documentation](https://tanstack.com/router/latest/docs/framework/react/guide/routing-concepts#layouts).

- `npm run dev` - Inicia o servidor de desenvolvimento

- `npm run build` - Compila para produção

- `npm run serve` - Serve a build de produção## Data Fetching

- `npm test` - Executa os testes

- `npm run db:generate` - Gera migrações do banco de dadosThere are multiple ways to fetch data in your application. You can use TanStack Query to fetch data from a server. But you can also use the `loader` functionality built into TanStack Router to load the data for a route before it's rendered.

- `npm run db:migrate` - Executa migrações

- `npm run db:push` - Sincroniza schema com o banco de dadosFor example:

- `npm run db:studio` - Abre o Drizzle Studio

```tsx

## 🔐 Autenticaçãoconst peopleRoute = createRoute({

  getParentRoute: () => rootRoute,

O template usa **Better Auth** para autenticação, com suporte para:  path: "/people",

  loader: async () => {

- ✅ Email e senha    const response = await fetch("https://swapi.dev/api/people");

- ✅ Sessões seguras    return response.json() as Promise<{

- ✅ Proteção de rotas      results: {

- 🔜 OAuth (GitHub, Google, etc.) - fácil de adicionar        name: string;

      }[];

### Adicionar Provedores OAuth    }>;

  },

Para adicionar OAuth, edite `src/auth.ts`:  component: () => {

    const data = peopleRoute.useLoaderData();

\`\`\`typescript    return (

socialProviders: {      <ul>

  github: {        {data.results.map((person) => (

    clientId: process.env.GITHUB_CLIENT_ID || '',          <li key={person.name}>{person.name}</li>

    clientSecret: process.env.GITHUB_CLIENT_SECRET || '',        ))}

  },      </ul>

}    );

\`\`\`  },

});

## 🗄️ Banco de Dados```



O template usa **Drizzle ORM** com PostgreSQL. O schema está definido em `src/db/schema.ts`.Loaders simplify your data fetching logic dramatically. Check out more information in the [Loader documentation](https://tanstack.com/router/latest/docs/framework/react/guide/data-loading#loader-parameters).



### Adicionar novas tabelas### React-Query



1. Edite `src/db/schema.ts`:React-Query is an excellent addition or alternative to route loading and integrating it into you application is a breeze.



\`\`\`typescriptFirst add your dependencies:

export const posts = pgTable('posts', {

  id: uuid('id').primaryKey().defaultRandom(),```bash

  title: text('title').notNull(),npm install @tanstack/react-query @tanstack/react-query-devtools

  content: text('content'),```

  userId: uuid('user_id').references(() => users.id),

  createdAt: timestamp('created_at').defaultNow(),Next we'll need to create a query client and provider. We recommend putting those in `main.tsx`.

});

\`\`\````tsx

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

2. Sincronize com o banco de dados:

// ...

\`\`\`bash

npm run db:pushconst queryClient = new QueryClient();

\`\`\`

// ...

## 🎨 Componentes UI

if (!rootElement.innerHTML) {

O template inclui componentes UI básicos em `src/components/ui/`:  const root = ReactDOM.createRoot(rootElement);



- `Button` - Botão com variantes e estados de loading  root.render(

- `Input` - Input com label e mensagens de erro    <QueryClientProvider client={queryClient}>

- `Card` - Card com header, title e content      <RouterProvider router={router} />

    </QueryClientProvider>

### Exemplo de uso:  );

}

\`\`\`tsx```

import { Button } from '~/components/ui/Button';

import { Input } from '~/components/ui/Input';You can also add TanStack Query Devtools to the root route (optional).

import { Card, CardHeader, CardTitle, CardContent } from '~/components/ui/Card';

```tsx

function MyComponent() {import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

  return (

    <Card>const rootRoute = createRootRoute({

      <CardHeader>  component: () => (

        <CardTitle>Meu Card</CardTitle>    <>

      </CardHeader>      <Outlet />

      <CardContent>      <ReactQueryDevtools buttonPosition="top-right" />

        <Input label="Nome" placeholder="Digite seu nome" />      <TanStackRouterDevtools />

        <Button>Enviar</Button>    </>

      </CardContent>  ),

    </Card>});

  );```

}

\`\`\`Now you can use `useQuery` to fetch your data.



## 🚀 Deploy```tsx

import { useQuery } from "@tanstack/react-query";

### Vercel

import "./App.css";

1. Instale a CLI da Vercel:

function App() {

\`\`\`bash  const { data } = useQuery({

npm install -g vercel    queryKey: ["people"],

\`\`\`    queryFn: () =>

      fetch("https://swapi.dev/api/people")

2. Deploy:        .then((res) => res.json())

        .then((data) => data.results as { name: string }[]),

\`\`\`bash    initialData: [],

vercel  });

\`\`\`

  return (

### Outras Plataformas    <div>

      <ul>

O template funciona em qualquer plataforma que suporte Node.js:        {data.map((person) => (

          <li key={person.name}>{person.name}</li>

- Railway        ))}

- Render      </ul>

- Fly.io    </div>

- AWS  );

- Digital Ocean}



## 📚 Recursos e Documentaçãoexport default App;

```

- [TanStack Start](https://tanstack.com/start) - Framework

- [TanStack Router](https://tanstack.com/router) - RoteamentoYou can find out everything you need to know on how to use React-Query in the [React-Query documentation](https://tanstack.com/query/latest/docs/framework/react/overview).

- [Better Auth](https://www.better-auth.com/) - Autenticação

- [Drizzle ORM](https://orm.drizzle.team/) - ORM## State Management

- [Tailwind CSS](https://tailwindcss.com/) - CSS

- [Lucide Icons](https://lucide.dev/) - ÍconesAnother common requirement for React applications is state management. There are many options for state management in React. TanStack Store provides a great starting point for your project.



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
