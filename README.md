# Winter Wonderhack New Website

> The website is built for the hackathon event hosted in-person by the [Humane Interface Design Enterprise](https://hide.cs.mtu.edu/) at Michigan Technological University.

> This project takes the previous event site's UI/UX design and completely rebuilds the responsive website from the ground up using cutting-edge web technologies like React, Tailwind CSS, and Framer Motion.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Project Structure](#project-structure)

## Introduction

Provide an introduction to your project, explaining what it does and why it is useful.

![alt text](website.png "Title")

## Installation

1. Clone the repository.
2. Open a terminal and navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Use `npm run` to start a test server.
5. Use `npm build` to build for production.

## Project Structure

All development should happen in `./src folder`:

```bash
./src
|-- App.jsx
|-- Root.jsx
|-- assets
|-- components
|   |-- Coming.jsx
|   |-- Footer.jsx
|   |-- ImageGallery.jsx
|   |-- Logo.jsx
|   |-- Main.jsx
|   |-- Nav.jsx
|   `-- index.js
|-- constants
|-- index.css
|-- index.jsx
`-- routes
    |-- Info.jsx
    |-- Register.jsx
    |-- Schedule.jsx
    `-- index.js
```

- In the `src/index.css` file of this project, the core directives of Tailwind CSS are imported and correctly configured. This allows you to utilize Tailwind CSS features seamlessly. Additionally, you also have the option to write Vanilla CSS code in this file if needed.
  ![alt text](css.png "Tailwind")

- The setup for React Router can be found in the `src/index.js` file of this project. The route components are created and imported from the `src/routes` folder. If you need to add new routes to your application, you should create the corresponding components in the `src/routes` folder and then include them in the React Router configuration in the `src/index.js` file.

- `App.jsx` and `Root.jsx` together form the landing page of the site. `App.jsx` handles the navigation and display of various components from the `src/components` folder, such as the `Logo`, `Main`, and `Footer` sections. If you want to add new components that will stay on the same page, you should create them in the `src/components` folder. However, for components that require a change of page, you can create a router component and configure it with React Router. `Root.jsx` on the other hand is responsible for the background elements of the site, such as the color scheme and the display of snowdrops.

- The `src/assets` folder houses all the static assets, including images used on the website. On the other hand, the `src/constants` folder contains constant literals, such as text that is displayed within the info section. However, it is worth noting that these constant literals can be replaced with data from a database to provide a more dynamic and relevant experience if desired.
