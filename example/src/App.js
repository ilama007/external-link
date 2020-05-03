import React from 'react';

//To make it work from package
// import ExternalLink from '@ilama007/external-link'
// import '@ilama007/external-link/dist/index.css'

//For testing locally
import ExternalLink from 'external-link';
import 'external-link/dist/index.css';

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
    <div style={{ padding: 50, maxWidth: 800, margin: 'auto' }}>
      <div>
        <h2>Example #1</h2>
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
      </div>
      <hr />
      <div>
        <h2>Example #2(With all props and handlers)</h2>
        <p>
          Check out agency website at{' '}
          <ExternalLink {...externalLinkProps}>Deerfield Agency</ExternalLink>
        </p>
      </div>
      <hr />
    </div>
  );
};

export default App;
