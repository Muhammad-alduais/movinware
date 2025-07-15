import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { I18n } from './lib/i18n'

// Initialize i18n
I18n.init();

createRoot(document.getElementById("root")!).render(<App />);
