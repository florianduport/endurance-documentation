---
sidebar_position: 1
---

# Create a Module


## What is a module ?

A module is an **independant** set of routes that is exposed in your API. It's the logic reprensentation of a business domain. The module will be available through the API using its prefix /module-name. 

Let's say you have a module name ```Books``` to manage basic CRUD operations on a Book model, the route of the module will be /books/route-name (for example /books/search).

If your API is composed of 2 or more modules : Modules mustn't share any dependancies between each other. This is a key understanding to create a module that will be reusable and secured.

## Create your first Module

Once the new project installation is complete (see installation documentation) :

```
cd my-project
endurance new-module {module-name}
```

A basic module is composed of 3 folders : 

- Routes : Will contain your one (or many) router files that will expose routes under the /module-name/ prrefix. 

- Models : Will contain your one (or many) database models. We are currently using Mongoose and supporting MongoDB databases only.  

- Listeners : Will contain your one (or many) listeners. They will trigger some actions when a specific event is raised. Events can be coming from inside the application (the endurance core library or another module), or from outside the application (we are supporting kafka and amqp formats).
