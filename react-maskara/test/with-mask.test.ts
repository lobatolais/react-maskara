// @vitest-environment jsdom
import { describe, it, expect, vi } from 'vitest'
import type { RefCallback } from 'react'
import { withMask } from '../src/with-mask.js'

describe('withMask', () => {
  it('should set maxLength attribute on the input node', () => {
    const node = document.createElement('input')
    const el: { ref?: RefCallback<HTMLInputElement> } = {}

    const result = withMask(el, { mask: '999-999' })
    result.ref!(node)

    expect(node.getAttribute('maxLength')).toBe('7')
  })

  it('should format value on input event', () => {
    const node = document.createElement('input')
    const el: { ref?: RefCallback<HTMLInputElement> } = {}

    const result = withMask(el, { mask: '999-999' })
    result.ref!(node)

    node.value = '123456'
    node.dispatchEvent(new Event('input'))

    expect(node.value).toBe('123-456')
  })

  it('should call original ref callback with the node', () => {
    const node = document.createElement('input')
    const originalRef = vi.fn<RefCallback<HTMLInputElement>>()
    const el: { ref?: RefCallback<HTMLInputElement> } = { ref: originalRef }

    const result = withMask(el, { mask: '999-999' })
    result.ref!(node)

    expect(originalRef).toHaveBeenCalledWith(node)
  })

  it('should not throw when no original ref is provided', () => {
    const node = document.createElement('input')
    const el: { ref?: RefCallback<HTMLInputElement> } = {}

    const result = withMask(el, { mask: '999-999' })

    expect(() => result.ref!(node)).not.toThrow()
  })

  it('should remove input event listener on cleanup', () => {
    const node = document.createElement('input')
    const el: { ref?: RefCallback<HTMLInputElement> } = {}

    const result = withMask(el, { mask: '999-999' })
    const cleanup = result.ref!(node) as (() => void) | undefined

    cleanup?.()

    node.value = '123456'
    node.dispatchEvent(new Event('input'))

    // After cleanup, listener removed — value stays as set directly
    expect(node.value).toBe('123456')
  })

  it('should spread other props from original element', () => {
    const el = {
      ref: undefined,
      name: 'phone',
      id: 'phone-input',
    }

    const result = withMask(el, { mask: '999-999' })

    expect(result.name).toBe('phone')
    expect(result.id).toBe('phone-input')
  })

})
