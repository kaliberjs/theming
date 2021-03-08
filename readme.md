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
import { themes } from '/themes'

<ThemesProvider {...{ themes }} default={themes.brand}>
  <App />
</ThemesProvider>
```

Apply the styles in your components using the `useTheme()` hook. This hook gives you the current theme's style object, which you can then use alongside your regular styles:

```jsx
function ThemedComponent({ children }) {
  const theme = useTheme()
  
  return (
    <div 
      className={cx(styles.component, theme.backgroundColor, theme.color)} 
      {...{ children }} 
    />
  )
}
```

To switch the theme, you can use the `ThemeProvider` component. Simply pass it the new theme, and all children will use this theme instead. To make this extra comfortable to use, you can define your own `Theme` components, which hardcode the themes.

```jsx
function ThemeBrand({ children }) { 
  const themes = useThemes()
  return <ThemeProvider theme={themes.brand} {...{ children }} />
}

<ThemeBrand>
  <ThemedComponent/>
</ThemeBrand>
```

### Working with Higgins and `colorSchemes`
If you have a project where your React components are embedded within a Wordpress Higgins situation, you might already be using `colorSchemes` which adhere to `@kaliber/build`'s color scheme naming convention. It's possible to have this library interop with those styles, by defining a legacy default theme:

```js
const themes = {
  default: defaultTheme,
  brand: brandTheme,
  contrast: contrastTheme,
  legacy: {
    backgroundColor: 'colorScheme-backgroundColor',
    textColor: 'colorScheme-textColor',
    accentColor: 'colorScheme-accentColor'
  }
}
```

```jsx
import { themes } from '/themes'

<ThemesProvider {...{ themes }} default={themes.legacy}>
  <App />
</ThemesProvider>
```

You should avoid providinig the legacy theme to a ThemeProvider. This probably means you are nesting themes, which might cause trouble if your not using CSS modules.

## Example

`themes/contrastTheme.css`
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
import contrastTheme from '/themes/contrastTheme.css'
export const themes = {
  contrastTheme
}
```

`components/Theme.js`
```jsx
import { useThemes, ThemeProvider } from '@kaliber/theming'

export function ThemeContrast({ children }) {
  const themes = useThemes()
  return <ThemeProvider theme={themes.contrast} {...{ children }} />
}
```

`components/Component.js`
```jsx
import { useTheme } from '/components/theme/Theme'

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
Returns the object with the available `themes`

## `ThemeProvider`
Wrap this around a subtree, to render all children in the theme passed to the `theme` prop.

| Props | |
| --- | --- |
| `theme` (required) | An object containing one of the available `themes`. Use the `useThemes` hook to get a reference to the `themes` object. |

## `useTheme`
Returns the current `theme` object.

---

![](https://media.giphy.com/media/fijWs8UqXA9KQwrqLz/giphy.gif)

## Disclaimer
The usage of `@kaliber/theming` is build around the use of CSS modules. That being said, this library does not explicitly reference CSS modules, so you might be able to adjust it to a styling library of your choice.

This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.