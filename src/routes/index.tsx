import { createFileRoute, Link } from '@tanstack/react-router'
import { Zap, Shield, Rocket, Database, Lock, Gauge } from 'lucide-react'
import { Button } from '~/components/ui/Button'
import { Card, CardContent, CardHeader, CardTitle } from '~/components/ui/Card'

export const Route = createFileRoute('/')({ component: App })

function App() {
  const features = [
    {
      icon: <Zap className="w-12 h-12 text-blue-500" />,
      title: 'Prototipagem Rápida',
      description:
        'Comece a desenvolver seu produto em minutos com componentes pré-construídos e rotas configuradas.',
    },
    {
      icon: <Lock className="w-12 h-12 text-blue-500" />,
      title: 'Autenticação Integrada',
      description:
        'Sistema de autenticação completo com Better Auth, incluindo login, registro e sessões seguras.',
    },
    {
      icon: <Database className="w-12 h-12 text-blue-500" />,
      title: 'Banco de Dados Pronto',
      description:
        'Drizzle ORM configurado com PostgreSQL para gerenciamento de dados type-safe e eficiente.',
    },
    {
      icon: <Shield className="w-12 h-12 text-blue-500" />,
      title: 'Type-Safe',
      description:
        'TypeScript em todo o stack, do banco de dados ao frontend, para máxima segurança de tipos.',
    },
    {
      icon: <Gauge className="w-12 h-12 text-blue-500" />,
      title: 'Performance Otimizada',
      description:
        'SSR, streaming e otimizações automáticas com TanStack Start para aplicações ultra-rápidas.',
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-500" />,
      title: 'Deploy Simples',
      description:
        'Pronto para deploy em qualquer plataforma que suporte Node.js ou edge functions.',
    },
  ]

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-900 via-slate-800 to-slate-900">
      <section className="relative py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Template <span className="bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">MicroSaaS</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
            Desenvolva e lance seu SaaS em tempo recorde
          </p>
          <p className="text-lg text-gray-500 max-w-3xl mx-auto mb-8">
            Template completo com autenticação, banco de dados, componentes UI e deploy simplificado.
            Tudo pronto para você começar a desenvolver seu produto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/signup">
              <Button size="lg">
                Começar Agora
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg">
                Fazer Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{feature.icon}</div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
