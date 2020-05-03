# external-link

[![NPM](https://img.shields.io/npm/v/external-link.svg)](https://www.npmjs.com/package/external-link) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install ilama007/external-link
```

## Usage

### Example #1 (Minimal config)

```jsx
import React from 'react'

import ExternalLink from "@ilama007/external-link";
import "@ilama007/external-link/dist/index.css";

return (
    <p>
      Visit{' '}
      <ExternalLink
        externalURL='http://www.google.com'
        messageBody='You are going away from this website. Do you want to continue?'
        classNameLink='deerfield-external-link'
      >
        GOOGLE HOMEPAGE
      </ExternalLink>{' '}
      for more
    </p>
  )
}

export default App

export default ExampleApp
```

## Usage

### Example #2 (Using all the available PROPS)

```jsx
import React from 'react';

import ExternalLink from '@ilama007/external-link';
import '@ilama007/external-link/dist/index.css';

const App = () => {
  const onOpen = (returnData) => {
    console.log(returnData);
  };
  const onOkClick = (returnData) => {
    console.log(returnData);
  };
  const onCancelClick = (returnData) => {
    console.log(returnData);
  };

  /**
   * 
    url: required
    messageBody: required
    messageTitle: optional
    buttonOkTitle: optional
    buttonCancelTitle: optional
    onOpenHandler: optional
    onOkHandler: optional
    onCancelHandler: optional
    classNameLink: optional
    classNameOverlay: optional
   */
  const externalLinkProps = {
    externalURL: 'http://www.microsoft.com',
    messageBody: 'You are navigating away. Proceed?',
    messageTitle: 'Deerfield Agency',
    buttonOkTitle: 'Yes',
    buttonCancelTitle: 'No',
    onOpenHandler: onOpen,
    onOkHandler: onOkClick,
    onCancelHandler: onCancelClick,
    classNameLink: 'deerfield-external-link',
    classNameOverlay: 'deerfield-external-link-modal'
  };

  return (
    <p>
      Check out agency website at{' '}
      <ExternalLink {...externalLinkProps}>Deerfield Agency</ExternalLink>
    </p>
  );
};

export default App;
```

## License

MIT © [ilama007](https://github.com/ilama007)
