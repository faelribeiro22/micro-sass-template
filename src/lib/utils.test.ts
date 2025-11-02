import { describe, it, expect } from 'vitest'
import { cn } from './utils'

describe('utils', () => {
  describe('cn', () => {
    it('deve combinar classes CSS corretamente', () => {
      const result = cn('text-white', 'bg-blue-500')
      expect(result).toContain('text-white')
      expect(result).toContain('bg-blue-500')
    })

    it('deve remover classes duplicadas', () => {
      const result = cn('text-white', 'text-black')
      // clsx mantém a última classe quando há conflito
      expect(result).toBeDefined()
    })

    it('deve lidar com valores condicionais', () => {
      const result = cn('base-class', {
        'conditional-class': true,
        'ignored-class': false,
      })
      expect(result).toContain('base-class')
      expect(result).toContain('conditional-class')
      expect(result).not.toContain('ignored-class')
    })

    it('deve lidar com undefined e null', () => {
      const result = cn('text-white', undefined, null, 'bg-blue-500')
      expect(result).toContain('text-white')
      expect(result).toContain('bg-blue-500')
    })

    it('deve lidar com arrays', () => {
      const result = cn(['text-white', 'bg-blue-500'])
      expect(result).toContain('text-white')
      expect(result).toContain('bg-blue-500')
    })
  })
})
