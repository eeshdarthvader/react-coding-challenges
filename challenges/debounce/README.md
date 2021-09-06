# Coding Challenge

During this challenge, we are exploring a signature editing form. The goal of the challenge is to complete all acceptance criteria below. Please read this document in full.

## Running locally on your machine

- checkout the repository
- run `npm install`
- run `npm start`

this should open the browser and a development server that automaticallt reloads upon any code changes. You don't need to produce a production build for this scenario.

## Acceptance criteria

### Functional requirements

The acceptance criteria for the task are simple - we are about to create a user-interface that allows to read and write user data.

- Create a form that collects and saves user data using our mock API
- The preview should display the data with the right layout (see `public/signature-preview.png`). The preview should auto-update as you type
- The form should auto-save the contents as you type using the mock API
- The mock API has a rate limit of 1 request per 5 seconds - the form should make sure to always save the latest state while adhering to this limitation

### Bonus

- create a mock API that returns the initial user details. the code should populate the form with the payload from the user detail API.

### Hints

- use `api.js/saveUser({name: string, surname: string; role: string; email: string})` to save the form.
- upon success the API returns the saved values