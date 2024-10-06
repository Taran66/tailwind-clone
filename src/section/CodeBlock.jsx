// CodeBlock.jsx
import React, { useEffect } from "react";
import Prism from "prismjs"; // Import Prism for syntax highlighting
import "prismjs/themes/prism-tomorrow.css"; // Import Prism theme
import 'prismjs/plugins/line-numbers/prism-line-numbers';
import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
import parse from 'html-react-parser';

const CodeBlock = ({ activeButtonId }) => {
  const featureCode = [
    {
      id: 1,
      code: `
<div class="space-y-4">
  <div class="w-96 bg-white shadow rounded">
    w-96
  </div>
  <div class="w-80 bg-white shadow rounded">
    w-80
  </div>
  <div class="w-72 bg-white shadow rounded">
    w-72
  </div>
  <div class="w-64 bg-white shadow rounded">
    w-64
  </div>
  <div class="w-60 bg-white shadow rounded">
    w-60
  </div>
  <div class="w-56 bg-white shadow rounded">
    w-56
  </div>
  <div class="w-52 bg-white shadow rounded">
    w-52
  </div>
  <div class="w-48 bg-white shadow rounded">
    w-48
  </div>
</div>
      `,
    },
    {
      id: 2,
      code: `
<div class="grid grid-cols-10 gap-2">
  <div class="bg-sky-50 aspect-square"></div>
  <div class="bg-sky-100 aspect-square"></div>
  <div class="bg-sky-200 aspect-square"></div>
  <div class="bg-sky-300 aspect-square"></div>
  <div class="bg-sky-400 aspect-square"></div>
  <div class="bg-sky-500 aspect-square"></div>
  <div class="bg-sky-600 aspect-square"></div>
  <div class="bg-sky-700 aspect-square"></div>
  <div class="bg-sky-800 aspect-square"></div>
  <div class="bg-sky-900 aspect-square"></div>
</div>
<div class="grid grid-cols-10 gap-2">
  <div class="bg-blue-50 aspect-square"></div>
  <div class="bg-blue-100 aspect-square"></div>
  <div class="bg-blue-200 aspect-square"></div>
  <div class="bg-blue-300 aspect-square"></div>
  <div class="bg-blue-400 aspect-square"></div>
  <div class="bg-blue-500 aspect-square"></div>
  <div class="bg-blue-600 aspect-square"></div>
  <div class="bg-blue-700 aspect-square"></div>
  <div class="bg-blue-800 aspect-square"></div>
  <div class="bg-blue-900 aspect-square"></div>
</div>
<div class="grid grid-cols-10 gap-2">
  <div class="bg-indigo-50 aspect-square"></div>
  <div class="bg-indigo-100 aspect-square"></div>
  <div class="bg-indigo-200 aspect-square"></div>
  <div class="bg-indigo-300 aspect-square"></div>
  <div class="bg-indigo-400 aspect-square"></div>
  <div class="bg-indigo-500 aspect-square"></div>
  <div class="bg-indigo-600 aspect-square"></div>
  <div class="bg-indigo-700 aspect-square"></div>
  <div class="bg-indigo-800 aspect-square"></div>
  <div class="bg-indigo-900 aspect-square"></div>
</div>
<div class="grid grid-cols-10 gap-2">
  <div class="bg-violet-50 aspect-square"></div>
  <div class="bg-violet-100 aspect-square"></div>
  <div class="bg-violet-200 aspect-square"></div>
  <div class="bg-violet-300 aspect-square"></div>
  <div class="bg-violet-400 aspect-square"></div>
  <div class="bg-violet-500 aspect-square"></div>
  <div class="bg-violet-600 aspect-square"></div>
  <div class="bg-violet-700 aspect-square"></div>
  <div class="bg-violet-800 aspect-square"></div>
  <div class="bg-violet-900 aspect-square"></div>
</div>
      `,
    },
    {
      id: 3,
      code: `
<div class="space-y-5">
  <div class="p-3 bg-white shadow rounded-lg">
    <h3 class="text-xs border-b">font-sans</h3>
    <p class="font-sans">
      The quick brown fox jumps over the lazy dog.
    </p>
  </div>
  <div class="p-3 bg-white shadow rounded-lg">
    <h3 class="text-xs border-b">font-serif</h3>
    <p class="font-serif">
      The quick brown fox jumps over the lazy dog.
    </p>
  </div>
  <div class="p-3 bg-white shadow rounded-lg">
    <h3 class="text-xs border-b">font-mono</h3>
    <p class="font-mono">
      The quick brown fox jumps over the lazy dog.
    </p>
  </div>
</div>
      `,
    },
    {
      id: 4,
      code: `
<div class="grid grid-cols-2 gap-6">
  <div class="shadow-sm bg-white rounded-lg">
    shadow-sm
  </div>
  <div class="shadow bg-white rounded-lg">
    shadow
  </div>
  <div class="shadow-md bg-white rounded-lg">
    shadow-md
  </div>
  <div class="shadow-lg bg-white rounded-lg">
    shadow-lg
  </div>
  <div class="shadow-xl bg-white rounded-lg">
    shadow-xl
  </div>
  <div class="shadow-2xl bg-white rounded-lg">
    shadow-2xl
  </div>
</div>

      `,
    },
  ];

  // Find the code that matches the activeButtonId
  // const selectedFeature = featureCode.find(
  //   (feature) => feature.id === activeButtonId
  // );

  // useEffect(() => {
  //   // Highlight all code blocks after rendering
  //   Prism.highlightAll();
  // }, [selectedFeature]);

  const selectedFeature = featureCode.find(
    (feature) => feature.id === activeButtonId
  ) || featureCode[0];

  useEffect(() => {
    Prism.highlightAll();
  }, [selectedFeature]);

  return (
  
  <div>
    <div className="mt-8 h-96 w-[500px] overflow-auto ">
      {selectedFeature ? (
        <pre className="language-javascript line-numbers">
          <code className="language-javascript">{selectedFeature.code.trim()}</code>
          
        </pre>
        
      ) : (
        <pre className="language-javascript line-numbers">
          <code className="language-javascript">
            {featureCode[0].code.trim()}
          </code>
          
        </pre>
      )}
      
    </div>
    {parse(selectedFeature.code)}
  </div>
    
  );
};

export default CodeBlock;
