**react-maskara** is a lightweight React library for easily applying customizable input masks to input fields. Easily format user input for phone numbers, dates, credit cards, and more with intuitive syntax.

## Install

To use **react-maskara**, your project must be running [React 19](https://react.dev/blog/2024/12/05/react-19). Ensure your project is using the correct React version before proceeding.

```bash
npm install react-maskara
```

## Usage

### MaskedInput

`MaskedInput` is a ready-to-use, unstyled component that applies masking directly to an input field. It's ideal for standalone use or in simple forms where you don't need complex form management.

```typescript
import { MaskedInput } from "react-maskara"

export const Form = () => {
  return (
    <form>
      <label htmlFor="card">Card</label>
      <MaskedInput
        mask="9999 9999 9999 9999"
        id="card"
        name="card"
        type="tel"
        autoComplete="cc-number"
        placeholder="XXXX XXXX XXXX XXXX"
      />
      <button>Save</button>
    </form>
  )
}
```

### withMask

`withMask` is a utility function that adds masking capabilities to existing input elements. It's particularly useful when working with form libraries like react-hook-form or Formik, or when you need more control over the input element.

```typescript
import { withMask } from "react-maskara"
import { useForm } from "react-hook-form"

export const Form = () => {
  const { register, handleSubmit } = useForm<{ card: string }>()

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))}>
      <label htmlFor="card">Card</label>
      <input
        {...withMask(register("card"), { mask: "9999 9999 9999 9999" })}
        id="card"
        name="card"
        type="tel"
        autoComplete="cc-number"
        placeholder="XXXX XXXX XXXX XXXX"
      />
      <button>Save</button>
    </form>
  )
}
```

## Mask Patterns

Masks can be defined as strings. The following characters will define mask format:

| Character | Allowed input |
| :-------: | :-----------: |
|     9     |      0-9      |
|     a     |   a-z, A-Z    |
|    \*     | 0-9, a-z, A-Z |

Any other character will be considered as a literal character in the mask.
