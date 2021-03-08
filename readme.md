# @kaliber/theming
Provides convenient, nestable theming for you React components.

## Motivation
`@kaliber/theming` helps you build themable components, which automatically adapt to the theme they're used in. Nestable theming is traditionally a hairy CSS problem, which React's Context solves very elegantly.

## Installation

```
yarn add @kaliber/theming
```

## Usage

To use theming in your components, wrap your app in the `ThemesProvider` component. You pass an object with all themes to its `themes` prop. If you use CSS modules, all you have to do is:

```jsx
import brand from '/themes/brand.css'
import contrast from '/themes/contrast.css'

const themes = { brand, contrast }

<ThemesProvider {...{ themes }} default={themes.brand}>
  <App />
</ThemesProvider>
```

Apply the styles in your components using the `useTheme()` hook. This hook gives you the current theme's style object, which you can then use alongside your regular styles:

```jsx
function Component({ children }) {
  const theme = useTheme()
  
  return (
    <div 
      className={cx(styles.component, theme.backgroundColor, theme.color)} 
      {...{ children }} 
    />
  )
}
```

To change the theme, you can use the `ThemeProvider` component. Simply pass it the new theme, and all children will use this theme instead. To make this even more effortless, you can define your own `Theme` components, which provide a hardcoded theme.

```jsx
function ThemeBrand({ children }) { 
  const themes = useThemes()
  return <ThemeProvider theme={themes.brand} {...{ children }} />
}

<ThemeBrand>
  <Component/>
</ThemeBrand>
```

### A note on working with Higgins and `@kaliber/build`'s `colorSchemes` convention
If you have are running a project with React components embedded in your PHP pages, there's a chance you're already using `colorSchemes`, adhering to `@kaliber/build`'s colorScheme naming convention. It's possible to have this library interop with those styles, by defining a legacy default theme, which is implemented using these `colorScheme` classes:

```js
const themes = {
  default: defaultTheme,
  brand: brandTheme,
  contrast: contrastTheme,
  legacy: {
    textColor: 'colorScheme-textColor',
    accentColor: 'colorScheme-accentColor',
    focusColor: 'colorScheme-focusColor',
    backgroundColor: 'colorScheme-backgroundColor',
  }
}
```

```jsx
import { themes } from '/themes'

<ThemesProvider {...{ themes }} default={themes.legacy}>
  <App />
</ThemesProvider>
```

If you'd like your themed components to use another `colorScheme` than the default one you can wrap your component in a `div` with the relevant `colorScheme` class, just make sure not to nest those divs because there be dragons (it'll cause problems).

*👉 To keep things simple, you should probably also avoid providing the legacy theme to a ThemeProvider. It'll work, but it could lead to strange situations where you can switch themes, but not colorSchemes (because you cannot nest those).*

## Example
*👉 For a more complete example, check the example directory in the Github repo.*

`themes/contrast.css`
```css
.color {
  color: var(--color-gray-100);
} 

.accentColor {
  color: var(--color-shocking-pink);
}

.focusColor {
  &:hover,
  &:focus {
    color: var(--color-shocking-pink);
  }
}

.backgroundColor {
  background-color: var(--color-gray-900);
}
```

`themes/index.js`
```js
import brand from './brand.css'
import contrast from './contrast.css'

export const themes = {
  brand,
  contrast
}
```

`components/Theme.js`
```jsx
import { useThemes, ThemeProvider } from '@kaliber/theming'

export function ThemeBrand({ children }) {
  const themes = useThemes()
  return <ThemeProvider theme={themes.brand} {...{ children }} />
}

export function ThemeContrast({ children }) {
  const themes = useThemes()
  return <ThemeProvider theme={themes.contrast} {...{ children }} />
}
```

`components/Component.js`
```jsx
import { useTheme } from '/components/Theme'

function Component() {
  const theme = useTheme()
  return (
    <div className={cx(theme.backgroundColor, theme.color)}>
      This is a themed component
    </div>
  )
}
```

`App.js`
```jsx
import { themes } from '/themes'
export default function AppWithProviders() {
  return (
    <ThemesProvider default={themes.legacy} {...{ themes }}>
      <App />
    </ThemesProvider>
  )
}
```

# Reference

## `ThemesProvider`
Wrap this around your `App`. This enables the `useThemes` hook. This automatically wraps your `App` in a `ThemeProvider`, using the default theme you provide.

| Props | |
| --- | --- |
| `themes` (required) | An object with all available themes. |
| `default` (required) | The default theme (from the same object). |

## `useThemes`
Returns the object with the available `themes`.

## `ThemeProvider`
Wrap this around a subtree, to render all children in the theme passed to the `theme` prop.

| Props | |
| --- | --- |
| `theme` (required) | One of the available `theme` objects in `themes`. Use the `useThemes` hook to get a reference to the `themes` object. |

## `useTheme`
Returns the current `theme` object.

---

![](https://media.giphy.com/media/fijWs8UqXA9KQwrqLz/giphy.gif)

## Disclaimer
The usage of `@kaliber/theming` is build around the use of CSS modules. That being said, this library does not explicitly reference CSS modules, so you might be able to adjust it to a styling library of your choice.

This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.