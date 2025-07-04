import React from 'react';
// Import the original MDXComponents
import MDXComponents from '@theme-original/MDXComponents';
import SageCell from '@site/src/components/Sagecell';
import CodeBlock from '@theme/CodeBlock';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "SageCell" tag to our component
  SageCell,
  // Map the "CodeBlock" tag to our component
  CodeBlock,
};
