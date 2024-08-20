---
slug: first-blog-post
title: Unveilling Endurance
authors: [florianduport]
tags: [endurance]
---

WHAT ? Why would we need another JS framework ? 

![JS meme](./img/meme-js-framework.jpg)

## The goal behind Endurance

Endurance started as a basic Express template that we used to share and copy from one project to another at Programisto. Through time, the template got improved and it became difficult to go back to each previous project to ship all the new cool "framework" features we added. The idea of creating a framework on top of Express was born. 


Now, the project is composed of a CLI that will provide some commands to initiate a new project, a new module and a few helpers. Our template is a distinct NPM module that is structuring the project with a clever Module approach that we'll talk about later. Another NPM module "Endurance Core" is providing all the librairies that are independant from modules such as : auth, database connection, cron, events etc. 


The module approach is simple : A module is a combination of "routes", "models" and "listeners" for a specific business domain. If you're familiar with microservices architecture, you'll be familiar with the business domain definition. Now, the key point is to have strictly independant modules. These modules are fully functionnal without depending on another module. 


The architecture provided can host as many modules as you want. If by any chance you want to scale, or split modules into two different apps it's easy : You just cut / paste your module folder into another endurance new project and voila!


Modules can also be published as NPM modules and added to your app with a simple "npm install -s" command. You just need to prefix your module name with "edrm" so it gets loaded by endurance correctly. This being said, everytime you publish an NPM module it's public and available for other people. Meaning you can also benefit from it and have a look at a set of modules you can already use right now! Deploying the API you need might be done without writting any line of code. 


Endurance's goal is to stay ultra simple and understandable. By providing a clean and simple architecture, we make it easy to create a robust API for developers from any level, even for AI agents!


The framework is still in beta before its first LTS Release version. We'll keep you posted when it happens. In the meantime, feel free to create Issues on our github project to share your ideas and your needs so we can include them in our roadmap. 


See you soon!