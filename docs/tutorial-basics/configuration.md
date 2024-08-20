---
sidebar_position: 1
---

# Configuration


## Create your .env file

A .env file is necessary to hold all the environment variables for your project (which may contain secret keys).


Create an .env file (linux on macOS) :

```
cd my-project
touch .env
```

Now, some environment variables are already required (or optionnal) to work with Endurance. To list them, you can use the command : 

```
endurance list-env-vars
```

You'll be able to enter a value in your .env file for all environment variables listed. 


Database related variables are optional as the API can work without a model if necessary. 




