# Wit-Facebook
Wit-Faebook Messenger Example 
## Basic Installation
 ```
git clone https://github.com/hunkim/Wit-Facebook.git
cd Wit-Facebook
npm install
 ```

## Configuration 
### Wit Setting
Go to https://wit.ai/home and create an app for you. See a demo at: https://wit.ai/sungkim/weather/stories.
Then, go to the setting in your app and get the token id. 
Test the bot.js with your WIT_TOKEN.

### Facebook Setting
1. First you need to make a Facebook Page, since the messanger is connected to your page.
2. Create an app and page
3. https://developers.facebook.com/docs/messenger-platform/quickstart
### Launch Heruku 

Run heroku create and push to heroku:
```bash
heroku create
git push heroku master
```

Alternatively, click the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

You need to set WIT_TOKEN and FB_PAGE_TOKEN. You can set your FB_VERIFY_TOKEN which is a token used to verify the server. The default value is "just_do_it".

### Facebook Hook setting

## Testing
### Bot testing
 ```
 $WIT_TOKEN=insert_token_here node bot 
 ```

### Server testing
First, run the server
```
 $WIT_TOKEN=insert_token_here node index 
 ```
 In other shell, fire this command:
 ```
 $curl -X POST -H "Content-Type: application/json" -d @test/msg.json http://localhost:8445/webhook
```
 
 

