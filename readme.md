# @kaliber/theming
Provides convenient, nestable theming for you React components.

## Motivation
`@kaliber/theming` helps you build themable components, which automatically adapt to the theme they're used in. Nestable theming is traditionally a hairy CSS problem, which React's Context solves very elegantly.

## Installation

```
yarn add @kaliber/theming
```

## Usage
Short example. If your library has multiple ways to use it, show the most used one and refer to `/example` for further examples.

`yourTheme.css`
```css
```

`Theme.js`
```jsx
import { hello } from 'library'

function Component() {
  return <div>{hello()}</div>
}
```

`Component.js`
```jsx
```

`App.js`
```jsx
```

# Reference

## `ThemesProvider`

## `useThemes`
## `ThemeProvider`
## `useTheme`

---

![](https://media.giphy.com/media/fijWs8UqXA9KQwrqLz/giphy.gif)

## Disclaimer
This library is intended for internal use, we provide __no__ support, use at your own risk. It does not import React, but expects it to be provided, which [@kaliber/build](https://kaliberjs.github.io/build/) can handle for you.

This library is not transpiled.