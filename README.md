### Usage
---
Screenshots of the application: [./screenshots](./screenshots)
Steps to setup the repository
1. Install dependencies
```npm install```
2. Select the desired option
   * For Production Build & Server
    `npm start` or `npm run start-server-prod`
Open http://localhost:3000 using a web browser.
   * For Client App Development with webpack-dev-server
    `npm run start-client-dev`
   * For runnning unit test cases
    `npm run test`

Tested on: Node.js (v 8.11.3), Chrome (v 80.0.3987), Firefox (v 74.0)

### Implementation Details
---
React, Redux, React-Router, Webpack, Express.js & Node.js etc. are used with both SSR & CSR capabilities.
##### Routes
There are two possible routes:
1. `/` - for home page (supports both SSR & CSR)
2. `/pdp/<product_id>` - for product details page (supports both SSR & CSR)

##### API Usage
Different APIs are used as below:
1. `/home` - Always called on the client side.
2. `/products?page=<page_number>`
   * It is called on the server (with page_number=1) when home page is accessed directly (entering URL in the browser) to allow SSR.
   * It is called on the client when this page is accesed via client side routing (i.e clicking the back button on product details page) to allow CSR.
   * It is always called on the client side when load more button is clicked on the home page.
3. `/products/<product_id>`
   * It is called on the server when product details page is accessed directly (entering URL in the browser) to allow SSR.
   * It is called on the client when this paged is accesed via client side routing (i.e clicking a product list item on the homepage) to allow CSR.

##### SCSS Usage
The Styles are written using SCSS following BEM conventions.
##### Unit Tests
The unit tests are written using Jest & Enzyme.
Coverage report can be generated with `npm run test`.
The generated coverage report can be accessed: [./coverage/lcov-report/index.html](./coverage/lcov-report/index.html)
##### Screenshots
The screenshots can be accessed here: [./screenshots](./screenshots)
