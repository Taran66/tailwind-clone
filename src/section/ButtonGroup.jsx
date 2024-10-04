import React, { useState } from 'react';

const ButtonGroup = () => {
  // State to track the ID of the currently clicked button
  const [activeButton, setActiveButton] = useState(null);

  // Handle button click
  const handleButtonClick = (id) => {
    setActiveButton(id); // Set the clicked button as the active one
  };

  // List of buttons with their unique ids
  const buttons = [
    { id: 1, label: "Sizing", svg: SizingSvg },
    { id: 2, label: "Colors", svg: ColorsSvg },
    { id: 3, label: "Typography", svg: TypographySvg },
    { id: 4, label: "Shadows", svg: ShadowsSvg },
  ];

  return (
    <div className="flex gap-16 ml-10">
      {buttons.map((button) => (
        <button
          key={button.id}
          onClick={() => handleButtonClick(button.id)}
          className={`group ${
            activeButton === button.id
              ? "text-sm font-semibold text-indigo-600 dark:text-indigo-400"
              : ""
          }`}
        >
          <button.svg
            className={`mb-6 ${
              activeButton !== button.id
                ? "text-slate-300 group-hover:text-slate-400 dark:text-slate-600 dark:group-hover:text-slate-500"
                : ""
            }`}
          />
          {button.label}
        </button>
      ))}
    </div>
  );
};

// SVG components (use the SVGs you provided)
const SizingSvg = ({ className }) => (
  <svg
    width="48"
    height="48"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <rect
      x="5"
      y="5"
      width="28"
      height="28"
      rx="4"
      fill="currentColor"
      fill-opacity=".1"
      stroke="currentColor"
      stroke-width="2"
    ></rect>
    <path
      d="M5 41h28M33 39v4M5 39v4M39 5h4M39 33h4M41 33V5"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
  </svg>
);

const ColorsSvg = ({ className }) => (
  <svg
    width="48"
    height="48"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M17.687 42.22 40.57 29.219a4 4 0 0 0 1.554-5.36L39 18"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    ></path>
    <path
      d="M27.477 7.121a1 1 0 1 0-.954 1.758l.954-1.758Zm5.209 3.966.477-.879-.477.88Zm1.555 5.515-.866-.5-.003.006.87.494ZM26.523 8.88l5.686 3.087.954-1.758-5.686-3.087-.954 1.758Zm6.849 7.23-12.616 22.21 1.738.987 12.617-22.21-1.74-.988Zm-1.163-4.143a3 3 0 0 1 1.166 4.136l1.732 1a5 5 0 0 0-1.944-6.894l-.954 1.758Z"
      fill="currentColor"
    ></path>
    <path
      d="M5 9a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v25a9 9 0 1 1-18 0V9Z"
      fill="currentColor"
      fill-opacity="0"
      stroke="currentColor"
      stroke-width="2"
    ></path>
    <circle
      cx="14"
      cy="34"
      r="3"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    ></circle>
  </svg>
);

const TypographySvg = ({ className }) => (
  <svg
    width="48"
    height="48"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M5 13a8 8 0 0 1 8-8h22a8 8 0 0 1 8 8v22a8 8 0 0 1-8 8H13a8 8 0 0 1-8-8V13Z"
      fill="currentColor"
      fill-opacity="0"
      stroke="currentColor"
      stroke-width="2"
    ></path>
    <path
      d="M15.5 25h9M13 31l5.145-12.748c.674-1.67 3.036-1.67 3.71 0L27 31"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    ></path>
    <path
      d="M31 13s2 0 2 1.833v18.334C33 35 31 35 31 35M35 13s-2 0-2 1.833v18.334C33 35 35 35 35 35M31 24h4"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    ></path>
  </svg>
);

const ShadowsSvg = ({ className }) => (
  <svg
    width="48"
    height="48"
    fill="none"
    aria-hidden="true"
    className={className}
  >
    <path
      d="M24 43c10.493 0 19-8.507 19-19S34.493 5 24 5m-4 .422C11.427 7.259 5 14.879 5 24c0 9.121 6.427 16.741 15 18.578"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    ></path>
    <path
      d="M24 42.819V5.181c0-.1.081-.181.181-.181C34.574 5 43 13.607 43 24c0 10.394-8.426 19-18.819 19a.181.181 0 0 1-.181-.181Z"
      fill="currentColor"
      fill-opacity="0"
      stroke="currentColor"
      stroke-width="2"
      stroke-linejoin="round"
    ></path>
    <path
      d="M28 10h3M28 14h7M28 18h10M28 22h11M28 26h10M28 30h9M28 34h7M28 38h3"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
    ></path>
  </svg>
);

export default ButtonGroup;
