# Sample application using [Javaflow](https://github.com/havardh/javaflow)

This is a toy example project for showing how to use Javaflow.

The example contains a `backend` application and a `frontend` application.
The `backend` is written using Spring Boot and has a single model in the api
called [`User.java`](backend/src/main/java/no/havard/models/User.java).
This model is converted into a flow type definition by the
[`update`](update) program. The output of the conversion is placed in the file [`ApiFlow.js`](frontend/src/ApiFlow.js)
in the frontend. This is type is used in the return type from the [`user.js`](frontend/src/user.js#L5)
service.

Changing the `User.java` file, running `update` and subsequently running `flow` in
the frontend will demonstrate how to generate and statically verify the api.

# Installation
Follow the installation instruction at the javaflow [readme](https://github.com/havardh/javaflow#installation).

Run `yarn` in the frontend folder.

# Running

Start the backend by running `./gradlew bootRun` in the backend folder.

Start the frontend by running `yarn start` in the frontend folder.

Generate api by running `./update` in the root.
