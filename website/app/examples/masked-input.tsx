import { MaskedInputExample } from './masked-input-example'

export const MaskedInputSection = () => {
  return (
    <section className="space-y-5">
      <div className="space-y-1.5">
        <h3 className="text-base font-semibold text-stone-800">MaskedInput</h3>
        <p className="text-sm text-stone-600 leading-relaxed">
          A ready-to-use, unstyled component that wraps a native{' '}
          <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
            {'<input>'}
          </code>{' '}
          and applies masking on every keystroke. Best for standalone inputs
          where you don&apos;t need a form library. Accepts all standard HTML
          input attributes alongside the{' '}
          <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
            mask
          </code>{' '}
          prop.
        </p>
      </div>

      <MaskedInputExample />

      <pre className="block border-gray-300/60 border px-3.5 py-2.5 rounded-md shadow-xs font-mono text-sm overflow-x-auto bg-stone-50 text-stone-800 leading-relaxed">{`import { MaskedInput } from "react-maskara"

export const Form = () => {
  return (
    <form>
      <MaskedInput
        mask="99/99/9999"
        placeholder="dd/mm/yyyy"
        id="date"
        name="date"
      />
    </form>
  )
}`}</pre>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-stone-700">Props</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden">
            <thead className="bg-stone-50 text-stone-600 text-left">
              <tr>
                <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                  Prop
                </th>
                <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                  Type
                </th>
                <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                  Required
                </th>
                <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-100 last:border-0">
                <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                  mask
                </td>
                <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                  string
                </td>
                <td className="px-3 py-2.5 text-stone-600">Yes</td>
                <td className="px-3 py-2.5 text-stone-600">
                  The mask pattern string. See{' '}
                  <a
                    href="#mask-patterns"
                    className="underline underline-offset-2"
                  >
                    Mask Patterns
                  </a>{' '}
                  for syntax.
                </td>
              </tr>
              <tr className="border-b border-gray-100 last:border-0">
                <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                  ref
                </td>
                <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                  Ref&lt;HTMLInputElement&gt;
                </td>
                <td className="px-3 py-2.5 text-stone-600">No</td>
                <td className="px-3 py-2.5 text-stone-600">
                  Forwarded to the underlying{' '}
                  <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                    {'<input>'}
                  </code>{' '}
                  element via{' '}
                  <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                    useImperativeHandle
                  </code>
                  .
                </td>
              </tr>
              <tr className="border-b border-gray-100 last:border-0">
                <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                  ...props
                </td>
                <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                  InputHTMLAttributes
                </td>
                <td className="px-3 py-2.5 text-stone-600">No</td>
                <td className="px-3 py-2.5 text-stone-600">
                  All standard HTML input attributes (
                  <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                    id
                  </code>
                  ,{' '}
                  <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                    name
                  </code>
                  ,{' '}
                  <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                    placeholder
                  </code>
                  ,{' '}
                  <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                    type
                  </code>
                  ,{' '}
                  <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                    className
                  </code>
                  , etc.).{' '}
                  <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                    maxLength
                  </code>{' '}
                  is set automatically to match the mask length.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
