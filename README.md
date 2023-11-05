# Rick & Morty

Rick & Morty is a Single Page Application developed with TypeScript, React and Redux that allows you to manage a characters collection.

The characters are fetched from the database https://rickandmortyapi.com/api, thanks to requests carried out through Axios. The initial step involved understanding the functionality of this database with the aid of Postman. A subsequent step was to design the page in Figma, in order to outline all the interface styles to be applied later using StyledComponents in each of the components created, always with a strong focus on accessibility for all users. Hence, ensuring suitable color contrast, adding alternative text to images, and incorporating aria-label tags where necessary.

Throughout the application development, version control was managed via GIT, following a CI/CD workflow in the pipeline, such as trunk-based development, overseeing all the code that was committed to the master branch using husky hooks, among others.
For maintaining code quality practices, tools like Eslint and Prettier were utilized. Lighthouse was employed to monitor accessibility, best practices, SEO, and performance aspects. Especially in terms of performance, and due in part to the format of the images obtained from the API, it will be a priority in upcoming features to implement preloading of heavier images to achieve better web performance.

## Metrics

[![Quality gate](https://sonarcloud.io/api/project_badges/quality_gate?project=caminolosada_Rick-Morty-)](https://sonarcloud.io/summary/new_code?id=caminolosada_Rick-Morty-)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=caminolosada_Rick-Morty-&metric=coverage)](https://sonarcloud.io/summary/new_code?id=caminolosada_Rick-Morty-)
[![Technical Debt](https://sonarcloud.io/api/project_badges/measure?project=caminolosada_Rick-Morty-&metric=sqale_index)](https://sonarcloud.io/summary/new_code?id=caminolosada_Rick-Morty-)
[![Code Smells](https://sonarcloud.io/api/project_badges/measure?project=caminolosada_Rick-Morty-&metric=code_smells)](https://sonarcloud.io/summary/new_code?id=caminolosada_Rick-Morty-)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=caminolosada_Rick-Morty-&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=caminolosada_Rick-Morty-)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=caminolosada_Rick-Morty-&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=caminolosada_Rick-Morty-)
[![Bugs](https://sonarcloud.io/api/project_badges/measure?project=caminolosada_Rick-Morty-&metric=bugs)](https://sonarcloud.io/summary/new_code?id=caminolosada_Rick-Morty-)
[![Vulnerabilities](https://sonarcloud.io/api/project_badges/measure?project=caminolosada_Rick-Morty-&metric=vulnerabilities)](https://sonarcloud.io/summary/new_code?id=caminolosada_Rick-Morty-)

## Features

- Browse the list of Rick & Morty's characters from API https://rickandmortyapi.com/documentation/.
- Implementation of loading more characters via a 'Load more' button.

## Upcoming Implementations

- Real-time character search via a Searchbar as the user types

- Character's detail card

- CRUD operations (hence the reason for the existence of the router)

  - Create a new character
  - Update a character
  - Delete a character

- UI implementations such as:
  - Loading
  - Modals announcing success or failure in user-performed operations.

## Demo

Currently, there is a demo hosted at the following link: https://rick-morty-cla.netlify.app/

## Technologies Used

- **TypeScript**: programming language that extends JavaScript by adding static types.

- **React**: open-source JavaScript library for building user interfaces.

- **Redux**: JavaScript library for state management in applications.

- **React Router**: library that enables navigation between different views in a React application.

- **Axios**: promise-based HTTP client for making requests to a server.

- **React Testing Library**: testing utility for React applications that allows unit and integration testing.

- **Vite**: fast build tool for modern web applications.

- **Vitest**: set of testing utilities for Vite applications.

- **Jest**: JavaScript testing framework with a focus on simplicity and ease of use.

- **MSW**: testing library enabling the interception and simulation of network requests in web applications for integration and unit testing. This helps simulate responses and conduct tests without relying on a live server.

- **Styled Components**: library that allows writing CSS styles in React components.

## Additional Tools

- **ESLint**: static code analysis tool to identify and report problematic patterns in JavaScript code.

- **Git Hooks Workflows**: development strategy based on working directly on the main branch (trunk) and using Git hooks for quality control and code reviews.

- **Prettier**: code formatting tool that helps maintain consistent code style in the project.

- **SonarCloud**: analysis service that provides continuous inspection and analysis of code quality, security vulnerabilities, and overall maintainability of projects. It helps to identify bugs, code smells, security vulnerabilities, and other code issues by automatically analyzing code on every commit or pull request, offering detailed reports, and providing insights for improvements.

- **Netlify**: web hosting and infrastructure services platform offering comprehensive tools for web development, deployment, and management.

- **Postman**: tool that simplifies the development of APIs, enabling developers to design, test, and document APIs.

- **Figma**: cloud-based design and prototyping tool used for interface design, prototyping, collaboration, and design systems. The project's Figma can be accessed here: https://www.figma.com/file/ztgRvMRYxg4JIxvqVgOweJ/Rick%26Morty-App?type=design&node-id=20-507&mode=design&t=l3Aiz5hbnmiw3uED-0

- **Trello**: web-based project management application that allows users to create boards, lists, and cards to organize tasks and projects in a visual and flexible way. The project's Trello can be accessed here: https://trello.com/b/Kb5385gZ/rickmorty

## Setup

1. Clone this repository and install its dependencies using the command `npm i`

2. Will be necessary to create a .env file at the root of the project to host the following environment variable: VITE_API_URL=https://rickandmortyapi.com/api

3. Start a developmet server using the command `npm run dev`

4. Navigate to the appropriate link of your localhost

## Available cripts

`npm run dev`: starts a development server

`npm run build`: builds the app

`npm run preview`: runs the built app

`npm run lint`: runs ESLint

`npm run test`: runs the unit test for the application

`npm run test:coverage`: shows application's test coverage

## Authors

- [@caminolosada](https://github.com/caminolosada)
