import { GlobalRegistrator } from "@happy-dom/global-registrator";
GlobalRegistrator.register();

// Set a proper base URL so BrowserRouter works correctly
window.location.href = "http://localhost/";
