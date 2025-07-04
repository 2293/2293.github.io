import React, { useEffect, useRef } from 'react';

const SageCell = ({ children, language, autoeval = true }) => {
  const code = children;
  const containerRef = useRef(null);

  useEffect(() => {
    const initializeCell = () => {
      if (window.sagecell && containerRef.current) {
        const container = containerRef.current;

        while (container.firstChild) {
          container.removeChild(container.firstChild);
        }

        const script = document.createElement('script');
        script.type = `text/x-${language}`;
        script.textContent = code.trim();
        container.appendChild(script);

        // Create a language list with the current language prioritized
        const orderedLanguages = [
          language,
          ...window.sagecell.allLanguages.filter(lang => lang !== language)
        ];

        window.sagecell.makeSagecell({
          inputLocation: container,
          outputLocation: container,
          languages: orderedLanguages, // Use the prioritized list
          autoeval: autoeval,
          evalButtonText: '运行',
          hide: autoeval ? ['code'] : [],
        });
      }
    };

    if (!window.sagecell) {
      const script = document.createElement('script');
      script.src = 'https://sagecell.sagemath.org/static/embedded_sagecell.js';
      script.async = true;
      document.body.appendChild(script);
      script.onload = () => setTimeout(initializeCell, 100);
    } else {
      setTimeout(initializeCell, 100);
    }
  }, [code, language, autoeval]);

  return <div ref={containerRef} />;
};

export default SageCell;