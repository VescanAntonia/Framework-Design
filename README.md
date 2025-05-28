# Tiny Code Lab

**Tiny Code Lab** is a lightweight, browser-based code playground built in React. It allows users to write, preview, upload, and download HTML, CSS, and JavaScript code with a smooth user-friendly interface.

---

## ✨ Features

- 🧠 **Tabbed Code Editors** – Write and edit HTML, CSS, and JS in separate tabs.
- 🔍 **Live Preview** – See real-time updates as you write.
- 📁 **File Upload** – Import `.html`, `.css`, and `.js` files into the editor.
- 💾 **Save Code** – Download your code as files to your computer.

---

## 📁 Project Structure

- App.tsx # Root app entry, includes Tiny Code Lab heading
- CodePlayground.tsx # Main logic for tabs, preview, upload/download
- CodeEditor.tsx # CodeMirror wrapper for syntax-highlighted editing
- App.css # Global styles

---

## 🚀 Installation & Usage

1. Clone or download this repository:
```
   git clone https://github.com/your-username/tiny-code-lab.git
```
3. Install the dependencies:
```
  cd tiny-code-lab
  npm install
```

5. Start the development server:
```
  npm run dev
```

7. Open the project in your browser:
```
     http://localhost:5173
```
   
9. Use the CodePlayground component in your React app:
```
  import { CodePlayground } from './CodePlayground';
  <CodePlayground
  html="<h1>Hello</h1>"
  css="h1 { color: blue; }"
  js="console.log('Hello from JS!');"
  />
```

