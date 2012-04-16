# CongressTMI

A Rails 3 App for Fight for the Future's Congress TMI campaign.

## Status

 *  Form accepts, validates and stores name, email, address and zip
 *  Javascript geocodes request and looks up representatives name and twitter id

## Todo

Twitter posting.  Ran out of time.

The following looks to be a good example of how to post to twitter using OAuth and the Twitter Gem in Rails:

https://github.com/tardate/rails-twitter-oauth-sample

## Import / Editable Stuff

*  app/views/users/new.html.erb
   Contains most of the text on the page

*  app/views/users/_form.html.erb
   Contains the signup form
   
*  app/views/users/_tweet.html.erb
   Contains the start of the tweet form. It is not complete.

## Instructions

*  git clone this repository
*  copy and edit database.example.yml as database.yml
*  copy and edit db/seeds.example.rb as db/seeds.rb to add admins
*  rake db:create
*  rake db:setup
*  rails server

For deploying, you will probably want to setup capistrano with a deploy script.

