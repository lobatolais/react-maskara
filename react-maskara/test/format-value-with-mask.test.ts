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

  it('should return empty string for empty value', () => {
    const result = formatValueWithMask({
      mask: '999-999',
      value: '',
      cursorPosition: 0,
    })
    expect(result.maskedValue).toBe('')
    expect(result.newCursorPosition).toBe(0)
  })

  it('should throw when value is longer than mask', () => {
    expect(() =>
      formatValueWithMask({
        mask: '999',
        value: '12345',
        cursorPosition: 5,
      }),
    ).toThrow('Input value cannot be longer than mask')
  })

  it('should return partial masked value when value does not fill mask', () => {
    const result = formatValueWithMask({
      mask: '999-999',
      value: '123',
      cursorPosition: 3,
    })
    expect(result.maskedValue).toBe('123')
    expect(result.newCursorPosition).toBe(3)
  })

  it('should return empty string when all chars are invalid for mask', () => {
    const result = formatValueWithMask({
      mask: '999-999',
      value: 'abc',
      cursorPosition: 3,
    })
    expect(result.maskedValue).toBe('')
    expect(result.newCursorPosition).toBe(0)
  })

  it('should handle date mask correctly', () => {
    const result = formatValueWithMask({
      mask: '99/99/9999',
      value: '01012025',
      cursorPosition: 8,
    })
    expect(result.maskedValue).toBe('01/01/2025')
    expect(result.newCursorPosition).toBe(10)
  })

  it('should adjust cursor for leading literal in mask', () => {
    const result = formatValueWithMask({
      mask: '(999)',
      value: '123',
      cursorPosition: 3,
    })
    expect(result.maskedValue).toBe('(123')
    expect(result.newCursorPosition).toBe(4)
  })

  it('should return empty string when all chars invalid and mask starts with literal', () => {
    const result = formatValueWithMask({
      mask: '(999) 999-9999',
      value: 'abc',
      cursorPosition: 3,
    })
    expect(result.maskedValue).toBe('')
    expect(result.newCursorPosition).toBe(0)
  })

  it('should not output literal between two all-invalid runs', () => {
    const result = formatValueWithMask({
      mask: '999-999',
      value: 'abcdef',
      cursorPosition: 6,
    })
    expect(result.maskedValue).toBe('')
  })

  it('should keep cursor at 0 when no chars have been typed', () => {
    const result = formatValueWithMask({
      mask: '999-999',
      value: '1',
      cursorPosition: 0,
    })
    expect(result.maskedValue).toBe('1')
    expect(result.newCursorPosition).toBe(0)
  })

  it('should handle mask with only literal characters as separators', () => {
    const result = formatValueWithMask({
      mask: '9-9-9',
      value: '123',
      cursorPosition: 3,
    })
    expect(result.maskedValue).toBe('1-2-3')
    expect(result.newCursorPosition).toBe(5)
  })

  it('should not advance cursor past position when invalid char is before cursor', () => {
    const result = formatValueWithMask({
      mask: '999',
      value: 'a1',
      cursorPosition: 2,
    })
    expect(result.maskedValue).toBe('1')
    expect(result.newCursorPosition).toBe(1)
  })
})
