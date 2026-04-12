import { WithMaskExample } from './with-mask-example'

export const WithMaskSection = () => {
  return (
    <section className="space-y-5">
      <div className="space-y-1.5">
        <h3 className="text-lg font-semibold text-stone-800">withMask</h3>
        <p className="text-sm text-stone-600 leading-relaxed">
          A utility function that injects masking behavior into an existing
          input element by wrapping its{' '}
          <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
            ref
          </code>{' '}
          callback. Designed for use with form libraries like{' '}
          <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
            react-hook-form
          </code>{' '}
          or{' '}
          <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
            Formik
          </code>
          , where you spread registration props onto a native{' '}
          <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
            {'<input>'}
          </code>
          . It can also be used with an empty object for standalone inputs when
          you prefer not to use the{' '}
          <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
            MaskedInput
          </code>{' '}
          component.
        </p>
      </div>

      <WithMaskExample />

      <pre className="block border-gray-300/60 border px-3.5 py-2.5 rounded-md shadow-xs font-mono text-sm overflow-x-auto bg-stone-50 text-stone-800 leading-relaxed">{`import { withMask } from "react-maskara"
import { useForm } from "react-hook-form"

export const Form = () => {
  const { register, handleSubmit } = useForm()

  return (
    <form onSubmit={handleSubmit(console.log)}>
      <input
        {...withMask(register("card"), { mask: "9999 9999 9999 9999" })}
        placeholder="XXXX XXXX XXXX XXXX"
        type="tel"
        autoComplete="cc-number"
      />
    </form>
  )
}`}</pre>

      <p className="text-sm text-stone-600 leading-relaxed">
        Without a form library, pass an empty object as the first argument:
      </p>

      <pre className="block border-gray-300/60 border px-3.5 py-2.5 rounded-md shadow-xs font-mono text-sm overflow-x-auto bg-stone-50 text-stone-800 leading-relaxed">{`<input
  {...withMask({}, { mask: "(999) 999-9999" })}
  placeholder="(___) ___-____"
  type="tel"
/>`}</pre>

      <div className="space-y-2">
        <h4 className="text-sm font-medium text-stone-700">Parameters</h4>
        <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden">
          <thead className="bg-stone-50 text-stone-600 text-left">
            <tr>
              <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                Parameter
              </th>
              <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                Type
              </th>
              <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 last:border-0">
              <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                el
              </td>
              <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                {'{ ref?: RefCallback<HTMLInputElement> }'}
              </td>
              <td className="px-3 py-2.5 text-stone-600">
                The props object to extend. Typically the return value of{' '}
                <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                  register()
                </code>{' '}
                from a form library, or{' '}
                <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                  {'{}'}
                </code>{' '}
                for standalone use. The original{' '}
                <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
                  ref
                </code>{' '}
                callback, if present, is preserved and called after the mask ref
                runs.
              </td>
            </tr>
            <tr className="border-b border-gray-100 last:border-0">
              <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                options.mask
              </td>
              <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                string
              </td>
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
          </tbody>
        </table>
      </div>

      <p className="text-sm text-stone-600 leading-relaxed">
        Returns the same object type with the{' '}
        <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
          ref
        </code>{' '}
        replaced by a callback that attaches an{' '}
        <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
          input
        </code>{' '}
        event listener for masking and sets{' '}
        <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
          maxLength
        </code>{' '}
        to the mask length. The listener is cleaned up automatically when the
        element is unmounted.
      </p>
    </section>
  )
}
