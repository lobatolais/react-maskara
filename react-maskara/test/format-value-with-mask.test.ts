import { describe, it, expect } from 'vitest'
import { formatValueWithMask } from '../src/utils/format-value-with-mask.js'

describe('format value with mask', () => {
  it('should handle numeric masks', () => {
    const result = formatValueWithMask({
      mask: '999-999',
      value: '123456',
      cursorPosition: 6,
    })
    expect(result.maskedValue).toBe('123-456')
    expect(result.newCursorPosition).toBe(7)
  })

  it('should handle alphabetic masks', () => {
    const result = formatValueWithMask({
      mask: 'aaa-aaa',
      value: 'abcdef',
      cursorPosition: 6,
    })
    expect(result.maskedValue).toBe('abc-def')
    expect(result.newCursorPosition).toBe(7)
  })

  it('should handle alphanumeric masks', () => {
    const result = formatValueWithMask({
      mask: '***-***',
      value: 'abc123',
      cursorPosition: 6,
    })
    expect(result.maskedValue).toBe('abc-123')
    expect(result.newCursorPosition).toBe(7)
  })

  it('should handle input with invalid characters', () => {
    const result = formatValueWithMask({
      mask: '999-999',
      value: '12a34b',
      cursorPosition: 6,
    })
    expect(result.maskedValue).toBe('123-4')
    expect(result.newCursorPosition).toBe(5)
  })

  it('should handle cursor position correctly when adding mask characters', () => {
    const result = formatValueWithMask({
      mask: '(999) 999-9999',
      value: '1234567890',
      cursorPosition: 6,
    })
    expect(result.maskedValue).toBe('(123) 456-7890')
    expect(result.newCursorPosition).toBe(9)
  })
})
