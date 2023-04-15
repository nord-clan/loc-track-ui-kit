import { css } from '@emotion/react';

export const GlobalStyles = css`
  @import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

  html {
    font-size: 16px;
  }

  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    border: none;

    text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;

    font-family: Rubik, sans-serif;
    font-weight: 400;

    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  }

  [tabindex='-1']:focus:not(:focus-visible) {
    outline: 0 !important;
  }

  abbr[title],
  abbr[data-original-title] {
    text-decoration: underline;
    text-decoration: underline dotted;
    cursor: help;
    text-decoration-skip-ink: none;
  }

  address {
    margin-bottom: 1rem;
    font-style: normal;
    line-height: inherit;
  }

  ol,
  ul {
    padding-left: 2rem;
  }

  ol,
  ul,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ol ol,
  ul ul,
  ol ul,
  ul ol {
    margin-bottom: 0;
  }

  dt {
    font-weight: 900;
  }

  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }

  blockquote {
    margin: 0 0 1rem;
  }

  b,
  strong {
    font-weight: 900;
  }

  a {
    text-decoration: none;
  }

  a:not([href]) {
    &,
    &:hover {
      color: inherit;
      text-decoration: none;
    }
  }

  figure {
    margin: 0 0 1rem;
  }

  img {
    vertical-align: middle;
  }

  svg {
    overflow: hidden;
    vertical-align: middle;
  }

  table {
    border-collapse: collapse;
  }

  th {
    text-align: inherit;
  }

  label {
    display: inline-block;
    margin-bottom: 0.5rem;
  }

  button {
    border-radius: 0;
  }

  button:focus {
    outline: none;
  }

  input,
  button,
  select,
  optgroup,
  textarea {
    background: transparent;
    border: none;
    outline: none;
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;

    border: 1px solid #333;
    background-color: #e5e5e5;
    border-radius: 6px;
    padding: 4px 10px;
    cursor: pointer;
  }

  hr {
    margin: 1rem 0;
    color: inherit;
    background-color: currentcolor;
    border: 0;
    opacity: 0.25;
  }

  hr:not([size]) {
    height: 1px;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  select {
    word-wrap: normal;
  }

  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }

  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }

  h2 {
    margin-top: 5px;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
  }

  input[type='date'],
  input[type='time'],
  input[type='datetime-local'],
  input[type='month'] {
    -webkit-appearance: textfield;
  }

  textarea {
    overflow: auto;
    resize: vertical;
  }

  fieldset {
    min-width: 0;
    padding: 0;
    margin: 0;
    border: 0;
  }

  progress {
    vertical-align: baseline;
  }

  ::-webkit-datetime-edit {
    overflow: visible;
    line-height: 0;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }

  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }

  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
  template {
    display: none;
  }

  main {
    display: block;
  }

  ::-webkit-scrollbar {
    width: 6px;
    height: 100%;
    background-color: #333;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgb(93 93 93);
    border-radius: 10px;
    box-shadow: inset 0 0 5px #444;
  }

  ::-webkit-scrollbar-track {
    background-color: transparent;
    border-radius: 10px;
    box-shadow: inset 0 0 1px #444;
  }
`;
