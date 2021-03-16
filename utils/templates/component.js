module.exports = (componentName) => ({
  content: `import React from 'react';

  import * as s from './styles'
  import { I${componentName}Props } from './types';

const ${componentName}: React.FC<I${componentName}Props> = ({ ...rest }) => (
  <s.Container data-testid="${componentName}" {...rest}>${componentName}</s.Container>
);

export default ${componentName};

`,
  extension: `.tsx`,
});
