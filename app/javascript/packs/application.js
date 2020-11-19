// Rails dependencies
require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

// External libraries
import 'bootstrap';

// Import components
import { initUpdateNavbarOnScroll } from "../components/navbar";
import { loadDynamicBannerText } from '../components/banner';

// Call initializers
document.addEventListener('turbolinks:load', () => {
  initUpdateNavbarOnScroll();
  loadDynamicBannerText();
});

