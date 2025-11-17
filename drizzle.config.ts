import { defineConfig } from 'drizzle-kit';
import { readFileSync } from 'fs';
import { join } from 'path';

// Carregar .env manualmente
const envFile = join(process.cwd(), '.env');
try {
  const envContent = readFileSync(envFile, 'utf-8');
  envContent.split('\n').forEach((line) => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const [, key, value] = match;
      process.env[key.trim()] = value.trim();
    }
  });
} catch {
  console.warn('⚠️ Arquivo .env não encontrado, usando variáveis de ambiente do sistema');
}

export default defineConfig({
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL || '',
  },
});
