# 🐳 Docker Setup - PostgreSQL

Instruções para usar PostgreSQL com Docker no projeto.

## 📋 Pré-requisitos

- Docker instalado
- Docker Compose instalado

### Instalar Docker

**Ubuntu/Debian:**
```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

**macOS:**
```bash
brew install --cask docker
```

**Windows:**
Baixe Docker Desktop de: https://www.docker.com/products/docker-desktop

## 🚀 Início Rápido

### 1. Iniciar PostgreSQL

```bash
docker-compose up -d
```

Isso iniciará:
- **PostgreSQL** na porta `5432`
- **PgAdmin** na porta `5050` (opcional, para gerenciamento visual)

### 2. Verificar Status

```bash
docker-compose ps
```

Você deve ver:
```
NAME                    STATUS              PORTS
microsaas-postgres      Up                  0.0.0.0:5432->5432/tcp
microsaas-pgadmin       Up                  0.0.0.0:5050->80/tcp
```

### 3. Sincronizar Banco de Dados

```bash
npm run db:push
```

### 4. Verificar Conexão

```bash
docker-compose exec postgres psql -U microsaas_user -d microsaas -c "SELECT version();"
```

## 🛠️ Comandos Úteis

### Iniciar Containers

```bash
# Iniciar em background
docker-compose up -d

# Iniciar e ver logs
docker-compose up
```

### Parar Containers

```bash
# Parar containers
docker-compose stop

# Parar e remover containers
docker-compose down

# Parar e remover containers + volumes (CUIDADO: apaga dados!)
docker-compose down -v
```

### Ver Logs

```bash
# Todos os serviços
docker-compose logs -f

# Apenas PostgreSQL
docker-compose logs -f postgres

# Últimas 100 linhas
docker-compose logs --tail=100 -f
```

### Acessar PostgreSQL CLI

```bash
# Via docker-compose
docker-compose exec postgres psql -U microsaas_user -d microsaas

# Via docker diretamente
docker exec -it microsaas-postgres psql -U microsaas_user -d microsaas
```

### Backup do Banco

```bash
# Criar backup
docker-compose exec postgres pg_dump -U microsaas_user microsaas > backup_$(date +%Y%m%d_%H%M%S).sql

# Restaurar backup
docker-compose exec -T postgres psql -U microsaas_user -d microsaas < backup.sql
```

### Resetar Banco de Dados

```bash
# Parar containers
docker-compose down

# Remover volumes (apaga dados!)
docker volume rm micro-sass_postgres_data

# Iniciar novamente
docker-compose up -d

# Recriar schema
npm run db:push
```

## 🎨 PgAdmin (Interface Visual)

### Acessar PgAdmin

1. Abra o navegador em: http://localhost:5050
2. Login:
   - Email: `admin@microsaas.local`
   - Senha: `admin`

### Conectar ao PostgreSQL

1. Clique em "Add New Server"
2. Aba **General**:
   - Nome: `MicroSaaS Local`
3. Aba **Connection**:
   - Host: `postgres` (nome do container)
   - Port: `5432`
   - Database: `microsaas`
   - Username: `microsaas_user`
   - Password: `microsaas_password`
4. Salvar

Agora você pode navegar pelas tabelas, executar queries, etc.

## 📊 Drizzle Studio

Além do PgAdmin, você pode usar o Drizzle Studio:

```bash
npm run db:studio
```

Acesse: http://localhost:4983

## ⚙️ Configurações Avançadas

### Mudar Porta do PostgreSQL

Edite `docker-compose.yml`:

```yaml
ports:
  - "5433:5432"  # Usar porta 5433 ao invés de 5432
```

Atualize `.env`:
```env
DATABASE_URL=postgresql://microsaas_user:microsaas_password@localhost:5433/microsaas
```

### Desabilitar PgAdmin

Comente ou remova o serviço `pgadmin` do `docker-compose.yml`:

```yaml
# pgadmin:
#   image: dpage/pgadmin4:latest
#   ...
```

### Mudar Credenciais

Edite `docker-compose.yml`:

```yaml
environment:
  POSTGRES_USER: seu_usuario
  POSTGRES_PASSWORD: sua_senha
  POSTGRES_DB: seu_banco
```

Atualize `.env`:
```env
DATABASE_URL=postgresql://seu_usuario:sua_senha@localhost:5432/seu_banco
```

### Persistência de Dados

Os dados são automaticamente persistidos em Docker volumes:
- `postgres_data` - Dados do PostgreSQL
- `pgadmin_data` - Configurações do PgAdmin

Para listar volumes:
```bash
docker volume ls | grep micro-sass
```

## 🐛 Troubleshooting

### Porta 5432 já está em uso

**Erro:** `Bind for 0.0.0.0:5432 failed: port is already allocated`

**Solução 1:** Parar PostgreSQL local
```bash
# Ubuntu/Debian
sudo systemctl stop postgresql

# macOS
brew services stop postgresql
```

**Solução 2:** Mudar porta no docker-compose.yml
```yaml
ports:
  - "5433:5432"
```

### Container não inicia

**Verificar logs:**
```bash
docker-compose logs postgres
```

**Recriar container:**
```bash
docker-compose down
docker-compose up -d
```

### Conexão recusada

**Verificar se está rodando:**
```bash
docker-compose ps
```

**Verificar health:**
```bash
docker-compose exec postgres pg_isready -U microsaas_user
```

### Banco de dados não existe

**Criar manualmente:**
```bash
docker-compose exec postgres psql -U microsaas_user -c "CREATE DATABASE microsaas;"
```

### Permissões negadas

**Linux:** Adicionar usuário ao grupo docker
```bash
sudo usermod -aG docker $USER
newgrp docker
```

## 🔄 Workflow de Desenvolvimento

### Desenvolvimento Diário

```bash
# 1. Iniciar banco
docker-compose up -d

# 2. Iniciar aplicação
npm run dev

# 3. Trabalhar normalmente...

# 4. Parar ao fim do dia (opcional)
docker-compose stop
```

### Nova Feature com Schema Change

```bash
# 1. Editar src/db/schema.ts
# 2. Aplicar mudanças
npm run db:push

# 3. Verificar no Drizzle Studio
npm run db:studio
```

### Testar com Dados Limpos

```bash
# Reset completo
docker-compose down -v
docker-compose up -d
npm run db:push

# Popular com dados de teste
npm run db:seed  # (se tiver script de seed)
```

## 📝 Scripts NPM Úteis

Adicione ao `package.json`:

```json
{
  "scripts": {
    "docker:up": "docker-compose up -d",
    "docker:down": "docker-compose down",
    "docker:logs": "docker-compose logs -f",
    "docker:reset": "docker-compose down -v && docker-compose up -d && npm run db:push",
    "db:backup": "docker-compose exec postgres pg_dump -U microsaas_user microsaas > backup_$(date +%Y%m%d_%H%M%S).sql"
  }
}
```

Uso:
```bash
npm run docker:up      # Iniciar
npm run docker:down    # Parar
npm run docker:logs    # Ver logs
npm run docker:reset   # Reset completo
npm run db:backup      # Fazer backup
```

## 🔐 Segurança

### Desenvolvimento Local

As credenciais padrão são adequadas para desenvolvimento local.

### Produção

⚠️ **NUNCA use estas credenciais em produção!**

Para produção:
- Use PostgreSQL gerenciado (AWS RDS, Render, Railway, etc.)
- Gere senhas fortes
- Use variáveis de ambiente seguras
- Configure SSL/TLS
- Restrinja acesso por IP

## 📚 Recursos

- [Docker Docs](https://docs.docker.com/)
- [Docker Compose Docs](https://docs.docker.com/compose/)
- [PostgreSQL Docker Hub](https://hub.docker.com/_/postgres)
- [PgAdmin Docker Hub](https://hub.docker.com/r/dpage/pgadmin4)

---

**Criado para:** MicroSaaS Template v1.0.0  
**Última Atualização:** Novembro 2025
