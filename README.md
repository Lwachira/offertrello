
## Lincoln's Observations 

- 30 Jan 2021 08:01 AM 
	Decided to use Ruby and Rails + React (Never used it before, this is going to be fun)
- 30 Jan 2021 08:05 AM 
	Decided to use webpacker = react.
	This seems to be the recommended method of doing this.
- 30 Jan 2021 08:09 AM
	Really, like the gems package manager, the number of gems out there is crazy.
- 30 Jan 2021 08:09 AM
	So I created the first version rails new offerzenTrello --webpack=react.
- 30 Jan 2021 08:15 AM
	It bombed out, something about manifest file and controller.
	Going to do more research on this.
- 30 Jan 2021 09:09 AM
	Built a new app called offertrello dropped the Zen (get the joke)
	Did not work
	Webpacker: Manifest::MissingEntryError in Trellos#index
- 30 Jan 2021 10:09 AM
	Still struggling, I think there is a conflict with webpacker.
- 30 Jan 2021 10:09 AM 
	Downgraded my Node Version (this might help)
	Also will switch to rails 6.1.0 instead of 6.1.1
-31 Jan 2021 06:31 AM
	Let try this again.
	I decided to download/setup WSL and Ubuntu. Then I connected it to VSCode Remote.
	Windows really hate none windows, I think this setup is going to work nice.
	Most of the bottlenecks have been getting infrastructure ready (such is life)
	In addition, my Telkom day bundles expired; Rain does not work very well where I am.
- 31 Jan 2021 07:05 AM
	Finally Won!

- 31 Jan 2021 09:09 AM
	Decided to use trello client.js library (it is cheating a bit since they probably want to test if I can use axios or fetch myself)

- 31 Jan 2021 10:12 AM
	Having terrible network issues today (just my luck)

- 31 Jan 12:15 PM
	Built a select with all the board names of a person.
	The plan is when a use clicks the select it will populate the board list.

- 01 Feb 19:00
	Turns out using the library was not a very good idea.
	The Reason is due to having to use window. Trello
	If I used Axios, I would be able to store data in the variable or maintain state better. 

- 01 Feb 19:10
	I am happy with what I have built so far, the way I am using react is bad though.
	I am not using subscriptions correctly and this could cause a memory leak if I am not careful.
	I had to use a stupid hack for the variable (maybe useEffect next time)

	
## How to run the application 

1. Preferably you'll should do a git clone from [my repo](https://github.com/Lwachira/offertrello)
2. The site was built with Ruby 2.6.5 and Rails 6.1.1.
3. You will need to update the API key in the App/views/layouts/application.html.erb 
4. You should cd into the offertrello directory and run rails -s.

# Postmortem 

## Task A Postmortem

- The thing that took the most time on this was getting ruby and rails setup (lost a day), I have slightly more experience with Nextjs, while tempted to use that, I figured if I am to be chosen, I would have to pick up rails at some point. 

- I decided to use the client.js library instead of other options (running axios on client side, running excon on server side), using more server side logic would have been slightly better looking back, majority reason why I didn't use it was wanting to avoid managing tokens myself.

- The state logic is a bit of a mess, I found when I used useState outside of the return logic, and it was looping itself until the API was blocked for passing the request limit. The better way to do it on client side would be to make my request use useEffect logic or ComponentDidMount, I tried it but messed up somewhere, I canned it due to running out of time.

- The other thing I wanted to achieve was making the app open for anyone to use, sadly, I need to figure out how to do that without making non-devs update config file (outside scope of work).

## Task B Postmortem

- The create logic works nicely, it would be better if once the push is done, the app should do a second pull.

## Task C Postmortem

- The development took 4 hours, spaced out. Most of the actual time was learning and environment.
- Build the application with Axios/Exon instead of clientjs.
- This was fun 😀
