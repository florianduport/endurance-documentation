---
sidebar_position: 1
---

#  Installation

Let's install and get started with **Endurance in less than 5 minutes**.

Prerequisites: You must be familiar with Backend Javascript, ideally with Express.

## Install Endurance CLI

Install the Endurance CLI to create a new project.

```bash
npm install -g endurance
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

## Create a new project

Create your git repository, then :

```bash
cd my-project
endurance new 
```

If endurance is not installed in your path and is not recognized, try `npx endurance new` instead.

## Start your application


```bash
npm start
```

Open your web browser at `http://localhost:3000`. Oh wait, it's an API not a website so there's not much to see here. But you can check your API swagger here : `http://localhost:3000/api-docs`


PS : You can also choose to start it through a Docker container using the available Dockerfile.