import React from 'react';
import CodeBlock from '@theme-original/CodeBlock';
import SageCell from '@site/src/components/Sagecell';

const sageLanguages = ['sage', 'gap', 'gp', 'html', 'macaulay2', 'maxima', 'octave', 'python', 'r', 'singular'];

const getProps = (props) => {
  const { className = '', metastring = '' } = props;
  const language = className.replace(/language-/, '');

  // Default to true. Set to false only if autoeval=false or autoeval=0 is found.
  const autoeval = !/autoeval\s*=\s*(false|0)/.test(metastring);

  return { ...props, language, autoeval };
};

export default function CodeBlockWrapper(props) {
  const { language, autoeval, ...rest } = getProps(props);

  if (sageLanguages.includes(language)) {
    return <SageCell language={language} autoeval={autoeval}>{props.children}</SageCell>;
  }

  return <CodeBlock {...rest} />;
}