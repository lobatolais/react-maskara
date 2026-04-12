'use client'

import { withMask } from 'react-maskara'

export const WithMaskExample = () => {
  return (
    <form>
      <fieldset>
        <label
          htmlFor="with-mask"
          className="pb-2 inline-block text-sm font-medium text-stone-700"
        >
          Card number
        </label>
        <input
          {...withMask({}, { mask: '9999 9999 9999 9999' })}
          id="with-mask"
          placeholder="XXXX XXXX XXXX XXXX"
          type="tel"
          autoComplete="cc-number"
          className="px-3.5 py-2.5 flex w-full rounded-md border border-gray-200 bg-transparent text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </fieldset>
    </form>
  )
}
