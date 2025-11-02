import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('deve renderizar o botão com texto', () => {
    render(<Button>Clique aqui</Button>)
    expect(screen.getByText('Clique aqui')).toBeDefined()
  })

  it('deve aplicar variant default por padrão', () => {
    render(<Button>Botão</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('bg-blue-600')
  })

  it('deve aplicar variant secondary', () => {
    render(<Button variant="secondary">Botão</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('bg-gray-200')
  })

  it('deve aplicar variant outline', () => {
    render(<Button variant="outline">Botão</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('border')
  })

  it('deve aplicar variant ghost', () => {
    render(<Button variant="ghost">Botão</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('hover:bg-gray-100')
  })

  it('deve aplicar variant danger', () => {
    render(<Button variant="danger">Botão</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('bg-red-600')
  })

  it('deve desabilitar o botão quando disabled=true', () => {
    render(<Button disabled>Botão</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveProperty('disabled', true)
  })

  it('deve desabilitar o botão quando isLoading=true', () => {
    render(<Button isLoading>Botão</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveProperty('disabled', true)
  })

  it('deve mostrar texto de loading quando isLoading=true', () => {
    render(<Button isLoading>Botão</Button>)
    expect(screen.getByText('Carregando...')).toBeDefined()
  })

  it('deve aplicar className customizado', () => {
    render(<Button className="custom-class">Botão</Button>)
    const button = screen.getByRole('button')
    expect(button.className).toContain('custom-class')
  })

  it('deve chamar onClick quando clicado', () => {
    let clicked = false
    const handleClick = () => {
      clicked = true
    }
    render(<Button onClick={handleClick}>Botão</Button>)
    const button = screen.getByRole('button')
    button.click()
    expect(clicked).toBe(true)
  })

  it('não deve chamar onClick quando desabilitado', () => {
    let clicked = false
    const handleClick = () => {
      clicked = true
    }
    render(
      <Button disabled onClick={handleClick}>
        Botão
      </Button>,
    )
    const button = screen.getByRole('button')
    button.click()
    expect(clicked).toBe(false)
  })
})
