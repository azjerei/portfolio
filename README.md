# Christoffer's Portfolio

Welcome to my portfolio. Within these code files I demonstrate the frameworks that I am fluent with. Though the code is designed to be simple, this is just a taste of my knowledge.

Follow the steps below to get things running. Enjoy!

## Web

A combination of backend services and frontend apps. You need to have **Docker** installed to be able to run these projects.

### Services
---

#### .NET WebApi

Built with .NET Core 8, this service uses a simple setup to serve Buddhist quotes to the users.

To run, from project root: `docker compose up`

This will start the service on port **4001** (8080 internally in container).

#### Golang

Built with Go, using the built-in net/http module to serve Buddhist quotes to the users.

To run, from project root: `docker compose up`

This will start the service on port **4001**.

#### NestJS

Built with NestJS using TypeScript, this service uses a single controller to serve Buddhist quotes to the user.

To run, from project root: `docker compose up`

This will start the service on port **4001**.

#### Python

Built with Python and Flask, this service uses a single endpoint to serve Buddhist quotes to the user.

To run, from project root: `docker compose up`

This will start the service on port **4001** (5000 internally in container)

### Apps
---

>_Make sure that you have at least one of the above services running before starting any of the apps._

#### Angular

Built with Angular and TypeScript, this app will consume the quote served by the active service.

To run, from project root: `docker compose up`

This will start the app on port **4200**.

#### Kotlin

Built with JavaFX using Kotlin, this app will consume the quote served by the active service.

Due to the complexity of executing Java in Docker, this is not possible. The best way to run the app is to download IntelliJ and take it from there.

#### NextJS

Built with NextJS and TypeScript, this app will consume the quote served by the active service.

To run, from project root: `docker compose up`

This will start the app on port **3002**.

#### Python

Built with Python and the *request* module, this app will consume the quote served by the active service.

To run, install python and from project root: `python main.py`

This will display the quote in the python console.

#### ReactJS

Built with ReactJS and TypeScript, this app will consume the quote served by the active service.

To run, from project root: `docker compose up`

This will start the app on port **3000**.

#### Vue

Built with Vue and TypeScript, this app will consume the quote served by the active service.

To run, from project root: `docker compose up`

This will start the app on port **3001**.