import './css/style.scss'
import javascriptLogo from './javascript.svg'
import dwLogo from './images/logo-dw.png'
import { setupCounter } from './counter.ts'
import '@dile/dile-info-box/dile-info-box.js';
import '@spectrum-web-components/color-wheel/sp-color-wheel.js';

document.querySelector('#app').innerHTML = `
  <div>
    <img src="${dwLogo}">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <dile-info-box class="read-the-docs" showCloseButton title="Prueba el botón">
      Click on the Vite logo to learn more
    </dile-info-box>
    <br>
    <div>
      <sp-color-wheel id="colorwheel" style="width: 200px; height: 200px;"></sp-color-wheel>
    </div>
  </div>
`

setupCounter(document.querySelector('#counter'))
document.getElementById('colorwheel').addEventListener('change', e => console.log(e.target.color));