# 🎨 Tiny Code Lab

**Tiny Code Lab** is a lightweight, browser-based code playground built in React. It allows users to write, preview, upload, and download HTML, CSS, and JavaScript code with a smooth user-friendly interface.

---

## ✨ Features

- 🧠 **Tabbed Code Editors** – Write and edit HTML, CSS, and JS in separate tabs.
- 🔍 **Live Preview** – See real-time updates as you write.
- 📁 **File Upload** – Import `.html`, `.css`, and `.js` files into the editor.
- 💾 **Save Code** – Download your code as files to your computer.

---

## 📦 Component Overview

This project is a custom reusable component, <CodePlayground />, designed from scratch as a Proof-of-Concept (PoC). It demonstrates how to build modular, component-based user interfaces that allow users to:

- Edit code in an isolated and focused UI.

- See changes instantly in a live preview pane.

- Upload existing code files for editing.

- Download their code in standard HTML, CSS, and JS formats.

It exemplifies how a small, well-scoped component can support learning, experimentation, and rapid prototyping directly in the browser.


---

## 📁 Project Structure

- App.tsx - Root app entry, includes Tiny Code Lab heading
- CodePlayground.tsx - Main logic for tabs, preview, upload/download
- CodeEditor.tsx - CodeMirror wrapper for syntax-highlighted editing
- App.css - Global styles

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

---

## 🔧 Technologies Used
This project was built using tools that helped make development fast, efficient, and enjoyable:

- React – I used React to build the component structure and handle user interactions, like switching tabs or updating code.

- TypeScript – I added TypeScript to clearly define how props and state should behave in the components.

- Vite – Vite made setting up and running the project really smooth, with super fast refresh and zero-config support for TypeScript and React.

- CodeMirror (@uiw/react-codemirror) – This is what powers the code editing experience. I integrated it with support for HTML, CSS, and JavaScript syntax highlighting depending on which tab is active.

- CSS (custom pastel styles) – I designed the interface using soft, pastel colors and rounded corners to give it a light and friendly feel.

---

## 🛠️ Future Enhancements

- Error Handling inside the preview panel in real-time
- Multi-language Support
- Export as ZIP for big source code
- Add a 'Copy All Code' button for quickly copying all code

