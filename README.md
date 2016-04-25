# Wit-Facebook
[![Build Status](https://travis-ci.org/hunkim/Wit-Facebook.svg?branch=master)](https://travis-ci.org/hunkim/Wit-Facebook)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/7442b6c4eb6b48a890d751c0da5a3b6d)](https://www.codacy.com/app/hunkim/Wit-Facebook)

Wit.ai and Facebook Messenger Integration Example
## Initial Installation
Fork this repository and clone.

```bash
git clone https://github.com/{forked}/Wit-Facebook.git
cd Wit-Facebook
npm install
 ```

## Configuration
### Wit Setting

Go to https://wit.ai/home and create a wit app for you. Read https://wit.ai/docs/quickstart and see a demo at: https://wit.ai/sungkim/weather/stories.
Then, go to the setting in your wit app and get the token id.

![image](https://cloud.githubusercontent.com/assets/901975/14757067/58f03050-0922-11e6-813d-831df8614303.png)

Test the bot.js with your WIT_TOKEN, and make sure the bot is working.
```bash
 $WIT_TOKEN=insert_token_here node bot
 ```

 You can type your text, and see bot's response.

```bash
 Bot testing mode.
> What is the weather?                        # your msg
Executing merge action
Executing say with message: Where exactly?
Where exactly?                                # bot
> In Seoul?                                   # your msg
Executing merge action
Executing action: fetch-weather
Executing say with message: I see it’s sunny in Seoul today!
I see it’s sunny in Seoul today!              # bot
>
```

### Facebook Page Creation
First you need to make a Facebook Page at https://www.facebook.com/pages/create/?ref_type=pages_browser, since the messenger bot will be connected to your facebook page.

### Facebook App Creation

* Add a new app at https://developers.facebook.com/quickstarts/?platform=web. Name it and click  "Create New Facebook App ID":

![image](https://cloud.githubusercontent.com/assets/901975/14749905/b557bf80-08f4-11e6-8218-2dd8dc7d529c.png)

* Add email, select category, an add web site. (Any URL is OK):

![image](https://cloud.githubusercontent.com/assets/901975/14749960/ef969b94-08f4-11e6-9fa6-3294a47fcf4e.png)

### Facebook Messenger Setting

* From https://developers.facebook.com/apps/, select the created app:

![image](https://cloud.githubusercontent.com/assets/901975/14757262/32399512-0924-11e6-924f-6b52d6303ecf.png)

* Select Messenger and get started:

![image](https://cloud.githubusercontent.com/assets/901975/14750051/6733be3e-08f5-11e6-9da7-a35eb2720298.png)

* Select the page you have created and get the Page Access Token:

![image](https://cloud.githubusercontent.com/assets/901975/14757285/78e65248-0924-11e6-9ffb-e6226a7d434f.png)

### Launch Server in Heroku

* Run heroku create and push to heroku:

```bash
cd Wit-Facebook
heroku create
git push heroku master
```

* Alternatively, click the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

* You need to set WIT_TOKEN and FB_PAGE_TOKEN. You can set your FB_VERIFY_TOKEN which is a token used to verify the server. The default value is "just_do_it". Set the WIT_TOKEN, FB_PAGE_TOKEN, and FB_VERIFY_TOKEN config variables.

![image](https://cloud.githubusercontent.com/assets/901975/14750245/627a5d20-08f6-11e6-9672-f19b3719eb2b.png)

* Make sure "Deploy to Heroku" is green and click the "View" button:

![image](https://cloud.githubusercontent.com/assets/901975/14750332/d59fad46-08f6-11e6-9f24-16fff6b98898.png)

* If it is set correctly, you will see something like this from https://{yourspecificedname}.herokuapp.com/:
"Only those who will risk going too far can possibly find out how far one can go." - T.S. Eliot"

### Facebook Webhooks Setting

* The final step is to put this server URL in the Facebook app setting. From https://developers.facebook.com/apps/, select your app and messenger. You will see Webhooks:

![image](https://cloud.githubusercontent.com/assets/901975/14750370/0d98de98-08f7-11e6-8c6b-85733dab4fb4.png)

* Select "Setup Webhooks", and you will see callback URL and verify token. For the callback URL put your Hherokuapp URL + "/webhook". For example, my callback URL is https://fbwitbot.herokuapp.com/webhook.

* Type the Verify Token that you set in the Heruku app setting. If you haven't set, the default value is "just_do_it".

* Click all items in the Subscription Fields.

![image](https://cloud.githubusercontent.com/assets/901975/14750713/c64e4ee0-08f8-11e6-8745-2ebc746ae367.png)

* Then, you will see the green complete!

![image](https://cloud.githubusercontent.com/assets/901975/14750734/e59c1016-08f8-11e6-9333-fbb7c92dd342.png)

* You may need to select the Facebook Page one more time and get the access token.

![image](https://cloud.githubusercontent.com/assets/901975/14757285/78e65248-0924-11e6-9ffb-e6226a7d434f.png)

* You need to fire this command to activate your messanger.

```bash
curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<PAGE_ACCESS_TOKEN>"
```
* You may see:
```bash
{"success":true}
```

* Finally, go to the Facebook page you created/selected, and talk to your bot. Enjoy!

![image](https://cloud.githubusercontent.com/assets/901975/14750786/20ddf0a4-08f9-11e6-9c9c-719d1020e5d8.png)

![image](https://cloud.githubusercontent.com/assets/901975/14751164/2a485e2a-08fb-11e6-9a98-fd79bb0773f7.png)

## Testing

### Jest
 ```bash
 npm test
 ```

### Bot testing
 ```bash
 $WIT_TOKEN=insert_token_here node bot
 ```

### Server testing
First, run the server
```bash
 $WIT_TOKEN=insert_token_here node index
 ```
 In other shell, fire this command:
 ```bash
 $curl -X POST -H "Content-Type: application/json" -d @__tests__/msg.json http://localhost:8445/webhook
```

You will see something like this:
```
I'm wating for you @8445

Executing merge action
Executing action: fetch-weather
Executing say with message: I see it’s sunny in Hong Kong today!
I see it’s sunny in Hong Kong today!
Oops! An error occurred while forwarding the response to USER_ID : An active access token must be used to query information about the current user.
Waiting for futher messages.
```

The USER_ID error is OK, but make sure the bot says, "I see it’s sunny in Hong Kong today!".

## Credit
I reused soruce code and configuration from:
* https://github.com/wit-ai/node-wit
* https://github.com/jw84/messenger-bot-tutorial
* https://developers.facebook.com/docs/messenger-platform/quickstart

## Contribution
We welcome your comments and PRs!
