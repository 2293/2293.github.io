import React, { useEffect, useRef } from 'react';

// --- Global Sequential Execution Queue for SageCell ---

// Initialize the global queue and state if they don't exist.
if (!window.sageCellAutoEvalQueue) {
  window.sageCellAutoEvalQueue = [];
  window.isSageCellQueueRunning = false;
  window.sageCellQueueInterval = null;
}

// The single function responsible for processing the queue.
function processSageCellQueue() {
  // If the queue is already being processed, do nothing.
  if (window.isSageCellQueueRunning) return;

  // If the queue is empty, do nothing.
  if (window.sageCellAutoEvalQueue.length === 0) return;

  // Start the processor.
  window.isSageCellQueueRunning = true;

  window.sageCellQueueInterval = setInterval(() => {
    // If the queue is empty, stop the interval and reset the state.
    if (window.sageCellAutoEvalQueue.length === 0) {
      clearInterval(window.sageCellQueueInterval);
      window.isSageCellQueueRunning = false;
      return;
    }

    // Get the next action from the front of the queue and execute it.
    const nextAction = window.sageCellAutoEvalQueue.shift();
    if (nextAction) {
      nextAction();
    }
  }, 1500); // 1500ms delay between each execution
}

// --- The SageCell React Component ---

const SageCell = ({ children, language, autoeval = true }) => {
  const code = children;
  const inputRef = useRef(null);
  const outputRef = useRef(null);

  useEffect(() => {
    const initializeCell = () => {
      if (window.sagecell && inputRef.current && outputRef.current) {
        const inputContainer = inputRef.current;

        while (inputContainer.firstChild) {
          inputContainer.removeChild(inputContainer.firstChild);
        }

        const script = document.createElement('script');
        script.type = `text/x-${language}`;
        script.textContent = code.trim();
        inputContainer.appendChild(script);

        const orderedLanguages = [
          language,
          ...window.sagecell.allLanguages.filter(lang => lang !== language)
        ];

        window.sagecell.makeSagecell({
          inputLocation: inputRef.current,
          outputLocation: outputRef.current,
          languages: orderedLanguages,
          autoeval: false, // Always false to let our queue handle it
          evalButtonText: '运行',
          hide: autoeval ? ['code'] : [],
          linked: true,
          linkKey: '2293.fun' + language,
        });

        // If this cell needs to be auto-evaluated, add its click action to the global queue.
        if (autoeval) {
          const clickAction = () => {
            if (inputRef.current) {
              const runButton = inputRef.current.querySelector('.sagecell_evalButton');
              if (runButton) {
                runButton.click();
              }
            }
          };
          window.sageCellAutoEvalQueue.push(clickAction);
          // Attempt to start the queue processor.
          processSageCellQueue();
        }
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

  return (
    <div>
      <div ref={inputRef} />
      <div ref={outputRef} />
    </div>
  );
};

export default SageCell;
