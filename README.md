# vertical-margin

> Add a Vertical Margin for use between components

[![NPM](https://img.shields.io/npm/v/vertical-margin.svg)](https://www.npmjs.com/package/vertical-margin) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save vertical-margin
```

## Usage

```jsx
import React from 'react'

import { Header, Footer } from '../otherComponent'

import { VerticalMargin } from 'vertical-margin'

class Example extends Component {
  render() {
    return (
	<Header />
	<VerticalMargin margin={5} />
	<Footer />
    )
  }
}
```

## License

MIT © [KodeyThomas](https://github.com/KodeyThomas)
