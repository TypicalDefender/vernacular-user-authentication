Make sure you have nodejs, npm installed

Type the following to install the node modules:

> npm install

Then replace put your own mongodb url in the config file if you're using mongo atlas or mlabs

> give the environment between any of those[local, production, development(default)]

Then start the server like so:

> node app.js

It should be in localhost:8080

You can find the documentation in the below link:

User Authentication && Authorization Explanation

1. Password Hashing:
You want to store user's password to be securely stored in the database but if you hash it then how to do you rehash it? It's pretty simple at the time of hashing you pass a keyword(Salt) with it when you try to rehash the password you will compare the incoming password and the password that has been stored in the db and there the salt will be carried out and you will verify the user's password.


