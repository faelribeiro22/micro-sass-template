import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('deve renderizar o input', () => {
    render(<Input />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDefined()
  })

  it('deve renderizar com label', () => {
    render(<Input label="Nome" />)
    expect(screen.getByText('Nome')).toBeDefined()
  })

  it('deve mostrar asterisco quando required=true', () => {
    render(<Input label="Email" required />)
    expect(screen.getByText('*')).toBeDefined()
  })

  it('deve mostrar mensagem de erro', () => {
    render(<Input error="Campo obrigatório" />)
    expect(screen.getByText('Campo obrigatório')).toBeDefined()
  })

  it('deve aplicar estilo de erro quando error é fornecido', () => {
    render(<Input error="Erro" />)
    const input = screen.getByRole('textbox')
    expect(input.className).toContain('border-red-500')
  })

  it('deve aplicar className customizado', () => {
    render(<Input className="custom-class" />)
    const input = screen.getByRole('textbox')
    expect(input.className).toContain('custom-class')
  })

  it('deve aceitar placeholder', () => {
    render(<Input placeholder="Digite aqui..." />)
    const input = screen.getByPlaceholderText('Digite aqui...')
    expect(input).toBeDefined()
  })

  it('deve aceitar type diferente', () => {
    render(<Input type="email" />)
    const input = screen.getByRole('textbox')
    expect(input).toHaveProperty('type', 'email')
  })

  it('deve aceitar type password', () => {
    render(<Input type="password" data-testid="password-input" />)
    const input = screen.getByTestId('password-input')
    expect(input).toHaveProperty('type', 'password')
  })

  it('deve aceitar value controlado', () => {
    render(<Input value="Teste" onChange={() => {}} />)
    const input = screen.getByRole('textbox') as HTMLInputElement
    expect(input.value).toBe('Teste')
  })
})
