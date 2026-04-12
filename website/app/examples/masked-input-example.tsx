'use client'

import { MaskedInput } from 'react-maskara'

export const MaskedInputExample = () => {
  return (
    <form>
      <fieldset>
        <label
          htmlFor="masked-input"
          className="pb-2 inline-block text-sm font-medium text-stone-700"
        >
          Date of birth
        </label>
        <MaskedInput
          id="masked-input"
          placeholder="dd/mm/yyyy"
          mask="99/99/9999"
          className="px-3.5 py-2.5 flex w-full rounded-md border border-gray-200 bg-transparent text-base transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
        />
      </fieldset>
    </form>
  )
}
