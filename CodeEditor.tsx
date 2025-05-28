import React from 'react';
import CodeMirror from '@uiw/react-codemirror';
import { html } from '@codemirror/lang-html';
import { css } from '@codemirror/lang-css';
import { javascript } from '@codemirror/lang-javascript';

type Props = {
  code: string;
  setCode: (val: string) => void;
  lang: 'html' | 'css' | 'js';
};

const CodeEditor: React.FC<Props> = ({ code, setCode, lang }) => {
  const extensions = {
    html: [html()],
    css: [css()],
    js: [javascript()],
  }[lang];

  return (
    <CodeMirror
      value={code}
      height="200px"
      theme="light"
      extensions={extensions}
      onChange={(value) => setCode(value)}
    />
  );
};

export default CodeEditor;
