import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Hello world" "Learn to code"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
