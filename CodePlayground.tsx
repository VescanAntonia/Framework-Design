import React, { useEffect, useState } from 'react';
import CodeEditor from './CodeEditor';

type Props = {
  html: string;
  css: string;
  js: string;
};

export const CodePlayground: React.FC<Props> = ({ html, css, js }) => {
  const [activeTab, setActiveTab] = useState<'html' | 'css' | 'js'>('html');
  const [htmlCode, setHtmlCode] = useState(html);
  const [cssCode, setCssCode] = useState(css);
  const [jsCode, setJsCode] = useState(js);
  const [srcDoc, setSrcDoc] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullCode = `
        <html>
          <head><style>${cssCode}</style></head>
          <body>
            ${htmlCode}
            <script>
            ${jsCode}
            <\/script>
          </body>
        </html>`;
      setSrcDoc(fullCode);
    }, 250);
    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);


  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>, language: 'html' | 'css' | 'js') => {
  const file = event.target.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    const text = e.target?.result;
    if (typeof text === 'string') {
      switch(language) {
        case 'html': setHtmlCode(text); break;
        case 'css': setCssCode(text); break;
        case 'js': setJsCode(text); break;
      }
    }
  };
  reader.readAsText(file);
};

const handleSaveCode = () => {
  const downloadFile = (content: string, filename: string, type: string) => {
    const blob = new Blob([content], { type });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(url);
  };

  downloadFile(htmlCode, 'index.html', 'text/html');
  downloadFile(cssCode, 'style.css', 'text/css');
  downloadFile(jsCode, 'script.js', 'application/javascript');
};


return (
  <div style={{ display: 'flex', gap: '1rem' }}>
    <div style={{ flex: 1 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
        <div>
          <button
            onClick={() => setActiveTab('html')}
            style={{ fontWeight: activeTab === 'html' ? 'bold' : 'normal', color: '#004d40', backgroundColor: '#b2dfdb',border: 'none', borderRadius: '8px' }}
          >
            HTML
          </button>
          <input
            type="file"
            accept=".html,text/html"
            onChange={(e) => handleFileUpload(e, 'html')}
          />
        </div>

        <div>
          <button
            onClick={() => setActiveTab('css')}
            style={{ fontWeight: activeTab === 'css' ? 'bold' : 'normal', color: '#004d40', backgroundColor: '#b2dfdb',border: 'none', borderRadius: '8px' }}
          >
            CSS
          </button>
          <input
            type="file"
            accept=".css,text/css"
            onChange={(e) => handleFileUpload(e, 'css')}
          />
        </div>

        <div>
          <button
            onClick={() => setActiveTab('js')}
            style={{ fontWeight: activeTab === 'js' ? 'bold' : 'normal', color: '#004d40', backgroundColor: '#b2dfdb',border: 'none', borderRadius: '8px' }}
          >
            JS
          </button>
          <input
            type="file"
            accept=".js,application/javascript"
            onChange={(e) => handleFileUpload(e, 'js')}
          />
        </div>
      </div>

      <button onClick={handleSaveCode} style={{backgroundColor: '#b2dfdb', color: '#004d40', border: 'none', borderRadius: '8px'}}>Save All Code</button>

      <div style={{ marginTop: '1rem' }}>
        {activeTab === 'html' && (
          <CodeEditor code={htmlCode} setCode={setHtmlCode} lang="html" />
        )}
        {activeTab === 'css' && (
          <CodeEditor code={cssCode} setCode={setCssCode} lang="css" />
        )}
        {activeTab === 'js' && (
          <CodeEditor code={jsCode} setCode={setJsCode} lang="js" />
        )}
      </div>
    </div>

    <div style={{ flex: 1 }}>
      <h3 style = {{ color: '#419284' }}>Live Preview</h3>
      <iframe
        srcDoc={srcDoc}
        title="Live Preview"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="400px"
      />
    </div>
  </div>
);



};
