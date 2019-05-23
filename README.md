# musicbot

__Requirements:__
  node.js
  
__Setup:__ 
+ Clone repo in your system  
+ Set up an application using your Discord account at https://discordapp.com/developers/applications/  
+ Get a Youtube API Key by making a new project at https://console.developers.google.com/ and adding the Youtube Data API v3 and geterating an API Key  
+ Set the environment variables discordToken, youtubeKey, and prefix in whatever deployment tool you use. (I used Heroku)   
+ Open a terminal in the project directory and enter the command "npm install"  
+ Run the command "npm start" or "node ./bot.js"  

__The commands available are:__   
* `musichelp [command]`: Displays help text for commands by this addon, or help for a specific command.
* `play <url>|<search string>`: Play audio from YouTube.
* `search <search string>`: Search's for up to 10 videos from YT.
* `skip [number]`: Skip a song or multi songs with skip [some number].
* `queue [position]`: Display the current queue.
* `pause`: Pause music playback.
* `resume`: Resume music playback.
* `remove [position]`: Remove a song from the queue by position.
* `volume`: Adjust the playback volume between 1 and 200.
* `leave`: Clears the song queue and leaves the channel.
* `clearqueue`: Clears the song queue.
* `np`: Show the current playing song.  

Thanks to:  
+ https://github.com/DarkoPendragon/discord.js-musicbot-addon   
+ https://discord.js.org/  
