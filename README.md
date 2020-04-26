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
You want to store user's password to be securely stored in the database but if you hash it then how to do you rehash it? It's pretty simple at the time of hashing you pass a keyword(Salt) with it when you try to rehash the password you will compare the incoming password and the password that has been stored in the db and there the salt will be carried out and the password will be retrieved and then you'll compare it.

2. JsonWebToken:
You want the website resources to be served to the verified user(authorised user). There JWT got your back. What do you do is when a person logs in or signs up you generate a token and send the token in a key-value pair in the website header [here I have used "x-auth-token" as key]. So next time when the same user try to access an endpoint then you verify the token from the header to check whether is this the same person or an authorised user. Here is the catch how to you verify ugh..it's pretty simple just like that we did in the password part here we while generating the token pass a keyword of your choice I have pass "jwtPrivateKey" and some user info. While verifying it pass that same parameter.

Find the documentation of the project here:

