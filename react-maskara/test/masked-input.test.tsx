// @vitest-environment jsdom
import { describe, it, expect, vi, afterEach } from 'vitest'
import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import { createRef } from 'react'
import { MaskedInput } from '../src/masked-input.js'

afterEach(cleanup)

describe('MaskedInput', () => {
  it('should render an input element', () => {
    render(<MaskedInput mask="999-999" />)
    expect(screen.getByRole('textbox')).toBeInstanceOf(HTMLInputElement)
  })

  it('should set maxLength from mask prop', () => {
    render(<MaskedInput mask="999-999" />)
    expect(screen.getByRole('textbox')).toHaveProperty('maxLength', 7)
  })

  it('should apply mask formatting on change', () => {
    render(<MaskedInput mask="999-999" />)
    const input = screen.getByRole('textbox') as HTMLInputElement

    fireEvent.change(input, { target: { value: '123456' } })

    expect(input.value).toBe('123-456')
  })

  it('should call onChange prop with the event', () => {
    const onChange = vi.fn()
    render(
      <MaskedInput
        mask="999-999"
        onChange={onChange}
      />,
    )
    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: '123456' } })

    expect(onChange).toHaveBeenCalledOnce()
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'change' }),
    )
  })

  it('should forward ref to the input element', () => {
    const ref = createRef<HTMLInputElement>()
    render(
      <MaskedInput
        mask="999-999"
        ref={ref}
      />,
    )

    expect(ref.current).toBeInstanceOf(HTMLInputElement)
  })

  it('should forward ref as callback ref', () => {
    const callbackRef = vi.fn()
    render(
      <MaskedInput
        mask="999-999"
        ref={callbackRef}
      />,
    )

    expect(callbackRef).toHaveBeenCalledWith(expect.any(HTMLInputElement))
  })

  it('should pass through standard input props', () => {
    render(
      <MaskedInput
        mask="999-999"
        placeholder="Enter number"
        aria-label="test input"
      />,
    )
    const input = screen.getByRole('textbox')

    expect(input).toHaveProperty('placeholder', 'Enter number')
    expect(input.getAttribute('aria-label')).toBe('test input')
  })
})
