# ⚠️ Problema: PostgreSQL no Docker Desktop + WSL2

## 🐛 Sintoma

Ao executar `npm run db:push`, você recebe o erro:

```
PostgresError: autenticação do tipo senha falhou para o usuário "microsaas_user"
```

Ou ao verificar as portas do container:

```bash
docker ps
# PORTS mostra: 5432/tcp (sem mapeamento para o host)

docker port microsaas-postgres
# (vazio - nenhuma porta mapeada)
```

## 🔍 Causa Raiz

O **Docker Desktop no WSL2** às vezes não expõe corretamente as portas dos containers para o host do WSL2, mesmo quando configurado corretamente no `docker-compose.yml` com `ports: - "5432:5432"`.

Isso faz com que o PostgreSQL seja acessível apenas:
- Dentro do próprio container (conexões locais)
- Entre containers na mesma rede Docker
- ❌ **NÃO acessível** do host WSL2 via `localhost:5432`

## ✅ Solução

Use o comando `db:push:docker` que executa o Drizzle dentro de um container temporário na mesma rede do PostgreSQL:

```bash
npm run db:push:docker
```

Este comando:
1. Cria um container Node.js temporário
2. Conecta-o à rede `micro-sass_microsaas-network`
3. Monta o projeto como volume
4. Executa `drizzle-kit push` usando `postgres` como hostname (nome do serviço)
5. Remove o container automaticamente após a execução

## 🔧 Comandos Atualizados

### Antes (não funciona no WSL2):
```bash
npm run db:push        # ❌ Erro de autenticação
npm run db:studio      # ❌ Erro de autenticação
npm run docker:reset   # ❌ Erro no db:push
```

### Agora (funciona):
```bash
npm run db:push:docker    # ✅ Push schema dentro da rede Docker
npm run db:studio:docker  # ✅ Drizzle Studio dentro da rede Docker
npm run docker:reset      # ✅ Atualizado para usar db:push:docker
```

## 🛠️ Scripts Manuais

### Push Schema
```bash
./scripts/db-push.sh
```

### Drizzle Studio
```bash
./scripts/db-studio.sh
```

### Comando completo (db:push)
```bash
docker run --rm \
  --network micro-sass_microsaas-network \
  -v "$(pwd)":/app \
  -w /app \
  -e DATABASE_URL="postgresql://microsaas_user:microsaas_password@postgres:5432/microsaas" \
  node:20-alpine \
  sh -c "npm install --silent && npm run db:push"
```

### Comando completo (db:studio)
```bash
docker run --rm -it \
  --network micro-sass_microsaas-network \
  -v "$(pwd)":/app \
  -w /app \
  -p 4983:4983 \
  -e DATABASE_URL="postgresql://microsaas_user:microsaas_password@postgres:5432/microsaas" \
  node:20-alpine \
  sh -c "npm install --silent && npm run db:studio"
```

## 📝 Alternativas

### 1. Usar Docker Desktop no Windows diretamente

Em vez de WSL2, execute o projeto diretamente no Windows. As portas geralmente são expostas corretamente.

### 2. Instalar PostgreSQL no WSL2

```bash
# Ubuntu/Debian
sudo apt update
sudo apt install postgresql postgresql-contrib

# Configurar para usar em vez do Docker
```

### 3. Usar `host.docker.internal` (pode não funcionar)

```env
DATABASE_URL=postgresql://user:pass@host.docker.internal:5432/db
```

### 4. Network Mode Host (Linux puro, não WSL2)

```yaml
# docker-compose.yml
services:
  postgres:
    network_mode: "host"
```

⚠️ Não funciona no Docker Desktop/WSL2!

## 🔍 Diagnóstico

### Verificar se porta está exposta:

```bash
docker port microsaas-postgres
# Saída esperada: 5432/tcp -> 0.0.0.0:5432
# Saída problemática: (vazio)
```

### Testar conectividade do host:

```bash
timeout 3 bash -c 'cat < /dev/null > /dev/tcp/localhost/5432'
# Sucesso: porta acessível
# Timeout: porta não acessível
```

### Verificar rede interna Docker:

```bash
docker exec microsaas-postgres psql -U microsaas_user -d microsaas -c "SELECT 1;"
# Se funciona: PostgreSQL OK, problema é no mapeamento de portas
```

## 📚 Referências

- [Docker Desktop WSL 2 backend - Known Issues](https://docs.docker.com/desktop/wsl/#known-issues)
- [Docker port mapping in WSL2](https://github.com/docker/for-win/issues/6736)
- [Drizzle Kit CLI Reference](https://orm.drizzle.team/kit-docs/overview)

## 🎯 Resumo

**Problema:** Docker Desktop no WSL2 não expõe porta 5432  
**Solução:** Execute Drizzle dentro de container na rede Docker  
**Comando:** `npm run db:push:docker`

---

**Data:** Novembro 2025  
**Status:** Solução funcionando ✅
