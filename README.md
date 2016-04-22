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

![image](https://cloud.githubusercontent.com/assets/901975/14749703/a88113de-08f3-11e6-834d-6ea1f5b929ae.png)

Test the bot.js with your WIT_TOKEN, and make sure the bot says correclty.
 ```
 $WIT_TOKEN=insert_token_here node bot 
 ```
### Facebook Setting
1. First you need to make a Facebook Page at https://www.facebook.com/pages/create/?ref_type=pages_browser, since the messanger is connected to your page.
2. Add a new App at https://developers.facebook.com/apps/. Select the "Website" platform.

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
 
 

