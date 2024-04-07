# White-Label Drink App

This project is a simple drinks app developed using the White-Label App (WLA) approach. It allows for easy branding and configuration through a `config.json` file. Users can view a list of drinks and access detailed information about each drink.

## Features

- Display a list of drinks with images and names.
- View detailed information about each drink, including ingredients and instructions.
- Branding and UI configuration through a `config.json` file.
- Pagination for the drink list.

## Technologies Used

- Angular: Frontend framework
- Bootstrap: CSS framework for styling
- Angular Material: UI components library
- HttpClient: Angular module for making HTTP requests
- RxJS: Reactive Extensions library for handling asynchronous operations
- TypeScript: Superset of JavaScript used for Angular development

## Installation

1. Clone the repository:

- git clone https://github.com/mute-o-rehman/White-Label-Drinks-App.git

2. Navigate to the project directory:

- cd white-label-drinks-app

3. Install dependencies:

- npm install

4. Start the development server:

- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

5. Configuration

- The UI elements of the app can be managed and altered through the config.json file located in the src/assets directory. Below is an explanation of how each section of the config.json file can be used:

- Screens Section: Defines the configuration for each screen of the app.
- Drink List Screen:
- title: Title of the screen.
- apiEndpoint: API endpoint to fetch data for the drink list.
- uiElements: Configuration for UI elements on the screen.
- Drink Details Screen:
- title: Title of the screen.
- apiEndpoint: API endpoint to fetch data for drink details.
- uiElements: Configuration for UI elements on the screen.
- UI Elements Section: Defines the configuration for each UI element on the screen.
- Header: Configuration for the header component.
- List Item: Configuration for each item in the drink list.
- Pagination: Configuration for pagination.
- Not Found Message: Configuration for the message displayed when no drinks are found.
- Spinner: Configuration for the loading spinner.
- Image: Configuration for displaying the drink image.
- Name: Configuration for displaying the drink name.
- Ingredients: Configuration for displaying the ingredients.
- Instructions: Configuration for displaying the instructions.

```

```
