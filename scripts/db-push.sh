#!/bin/bash

# Script para executar db:push dentro da rede Docker
# Necessário no WSL2 quando a porta do PostgreSQL não é exposta corretamente

echo "🔄 Executando drizzle-kit push dentro da rede Docker..."

docker run --rm \
  --network micro-sass_microsaas-network \
  -v "$(pwd)":/app \
  -w /app \
  -e DATABASE_URL="postgresql://microsaas_user:microsaas_password@postgres:5432/microsaas" \
  node:20-alpine \
  sh -c "npm install --silent && npm run db:push"
