import { MaskedInputSection } from './examples/masked-input'
import { WithMaskSection } from './examples/with-mask'

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto min-h-dvh flex flex-col items-center pt-16 pb-8 px-4 md:p-16">
      <header className="text-center mb-18">
        <h1 className="text-4xl font-bold mb-4 text-stone-800">
          react-maskara
        </h1>
        <h2 className="text-lg text-stone-600 mb-8">
          A lightweight, flexible input mask library for React
        </h2>
        <nav className="flex gap-4 justify-center">
          <a
            href="https://github.com/lobatolais/react-maskara"
            target="_blank"
            className="flex shadow-xs items-center justify-center gap-2 border-gray-300/60 border cursor-pointer rounded-md py-2 px-6 hover:bg-neutral-50 transition-all"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
                fill="currentColor"
                fillRule="evenodd"
                clipRule="evenodd"
              ></path>
            </svg>{' '}
            Github
          </a>
        </nav>
      </header>

      <main className="w-full space-y-12">
        <section className="space-y-2">
          <h3 className="text-lg font-semibold text-stone-800">Installation</h3>
          <pre className="block border-gray-300/60 border px-3.5 py-2.5 rounded-md shadow-xs font-mono text-sm overflow-x-auto bg-stone-50 text-stone-800 leading-relaxed">
            npm i react-maskara
          </pre>
          <p className="text-sm text-stone-500">Requires React 19 or later.</p>
        </section>

        <MaskedInputSection />
        <WithMaskSection />

        <section
          id="mask-patterns"
          className="space-y-5"
        >
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-stone-800">
              Mask Patterns
            </h3>
            <p className="text-sm text-stone-600 leading-relaxed">
              A mask is a string where certain characters define what the user
              can type and all other characters are treated as fixed separators
              that are inserted automatically.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden">
              <thead className="bg-stone-50 text-stone-600 text-left">
                <tr>
                  <th className="px-3 py-2.5 font-medium border-b border-gray-200 text-center w-24">
                    Character
                  </th>
                  <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                    Allowed input
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100 last:border-0">
                  <td className="px-3 py-2.5 text-stone-600 font-mono text-center">
                    9
                  </td>
                  <td className="px-3 py-2.5 text-stone-600">
                    Any digit — 0 through 9
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-0">
                  <td className="px-3 py-2.5 text-stone-600 font-mono text-center">
                    a
                  </td>
                  <td className="px-3 py-2.5 text-stone-600">
                    Any letter — a–z or A–Z
                  </td>
                </tr>
                <tr className="border-b border-gray-100 last:border-0">
                  <td className="px-3 py-2.5 text-stone-600 font-mono text-center">
                    *
                  </td>
                  <td className="px-3 py-2.5 text-stone-600">
                    Any alphanumeric character — 0–9, a–z, or A–Z
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm text-stone-600 leading-relaxed">
            Any character that is not{' '}
            <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
              9
            </code>
            ,{' '}
            <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
              a
            </code>
            , or{' '}
            <code className="font-mono text-xs bg-stone-100 px-1 py-0.5 rounded text-stone-700">
              *
            </code>{' '}
            is a literal separator. It is inserted into the input automatically
            when the user&apos;s cursor reaches that position — no need to type
            it manually.
          </p>

          <div className="space-y-2">
            <h4 className="text-sm font-medium text-stone-700">
              Common examples
            </h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-md overflow-hidden">
                <thead className="bg-stone-50 text-stone-600 text-left">
                  <tr>
                    <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                      Format
                    </th>
                    <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                      Mask
                    </th>
                    <th className="px-3 py-2.5 font-medium border-b border-gray-200">
                      Example output
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 last:border-0">
                    <td className="px-3 py-2.5 text-stone-600">Date</td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      99/99/9999
                    </td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      31/12/2025
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 last:border-0">
                    <td className="px-3 py-2.5 text-stone-600">Phone (US)</td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      (999) 999-9999
                    </td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      (555) 867-5309
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 last:border-0">
                    <td className="px-3 py-2.5 text-stone-600">Credit card</td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      9999 9999 9999 9999
                    </td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      4111 1111 1111 1111
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 last:border-0">
                    <td className="px-3 py-2.5 text-stone-600">SSN (US)</td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      999-99-9999
                    </td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      123-45-6789
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 last:border-0">
                    <td className="px-3 py-2.5 text-stone-600">
                      ZIP code (US)
                    </td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      99999
                    </td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      90210
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 last:border-0">
                    <td className="px-3 py-2.5 text-stone-600">Time</td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      99:99
                    </td>
                    <td className="px-3 py-2.5 text-stone-600 font-mono text-xs">
                      14:30
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-16 text-center">
        <a
          href="https://www.laisloba.com/"
          target="_blank"
          className="text-xs text-stone-400 hover:text-stone-600 transition-colors"
        >
          by Laís Lobato {':)'}
        </a>
      </footer>
    </div>
  )
}
