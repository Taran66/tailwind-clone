import React from "react";
import "prismjs"; // Import Prism.js for syntax highlighting
import "prismjs/themes/prism-tomorrow.css"; // Import the Prism.js theme you want

const CodeBlock = () => {
  return (
    <div className="bg-gray-900 p-4 rounded-md shadow-md">
      <pre className="language-js">
<code>
    {`
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
    `}
</code>
<code>
    {`
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
    `}
</code>
<code>
    {`
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
    `}
</code>

      </pre>
    </div>
  );
};

export default CodeBlock;
