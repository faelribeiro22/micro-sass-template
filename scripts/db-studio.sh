#!/bin/bash

# Script para executar db:studio dentro da rede Docker
# Necessário no WSL2 quando a porta do PostgreSQL não é exposta corretamente

echo "🔄 Executando drizzle-kit studio dentro da rede Docker..."

docker run --rm -it \
  --network micro-sass_microsaas-network \
  -v "$(pwd)":/app \
  -w /app \
  -p 4983:4983 \
  -e DATABASE_URL="postgresql://microsaas_user:microsaas_password@postgres:5432/microsaas" \
  node:20-alpine \
  sh -c "npm install --silent && npm run db:studio"
