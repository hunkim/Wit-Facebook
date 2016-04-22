# Wit-Facebook
Wit-Faebook Messenger Example 
## Initial Installation
Do fork this repostiory and clone.
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

### Facebook Page Creation
First you need to make a Facebook Page at https://www.facebook.com/pages/create/?ref_type=pages_browser, since the messanger is connected to your page.

### Facebook App creation 

Add a new app: 
![image](https://cloud.githubusercontent.com/assets/901975/14749884/91404432-08f4-11e6-9b75-05b0c1994a91.png)

Select WWW platform: 
![image](https://cloud.githubusercontent.com/assets/901975/14749894/a2b1be6c-08f4-11e6-95c8-981afbef4fe1.png)

Name it and click  "Create New Facebook App ID":
![image](https://cloud.githubusercontent.com/assets/901975/14749905/b557bf80-08f4-11e6-8218-2dd8dc7d529c.png)

Add email and select category:
![image](https://cloud.githubusercontent.com/assets/901975/14749960/ef969b94-08f4-11e6-9fa6-3294a47fcf4e.png)

Add website (any website is OK):

![image](https://cloud.githubusercontent.com/assets/901975/14749987/1a11c8a8-08f5-11e6-8230-78b1106721af.png)

### Facebook Mesanger Setting

From https://developers.facebook.com/apps/, select the created app:

![image](https://cloud.githubusercontent.com/assets/901975/14750039/53efba6c-08f5-11e6-871d-66739fa38109.png)

Select Messenger and get statred:
![image](https://cloud.githubusercontent.com/assets/901975/14750051/6733be3e-08f5-11e6-9da7-a35eb2720298.png)

Select the page you have created and get the Page Acess Token:
![image](https://cloud.githubusercontent.com/assets/901975/14750082/892b295a-08f5-11e6-925a-812c43da654d.png)

### Launch Heruku 

Run heroku create and push to heroku:
```bash
heroku create
git push heroku master
```

Alternatively, click the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

You need to set WIT_TOKEN and FB_PAGE_TOKEN. You can set your FB_VERIFY_TOKEN which is a token used to verify the server. The default value is "just_do_it".

![image](https://cloud.githubusercontent.com/assets/901975/14750146/d8de82f8-08f5-11e6-8b65-57942f8074d3.png)

Set the WIT_TOKEN, FB_PAGE_TOKEN, and FB_VERIFY_TOKEN.
![image](https://cloud.githubusercontent.com/assets/901975/14750245/627a5d20-08f6-11e6-9672-f19b3719eb2b.png)

Make sure it's sucess and view the app:
![image](https://cloud.githubusercontent.com/assets/901975/14750332/d59fad46-08f6-11e6-9f24-16fff6b98898.png)

You may see something like this from https://{yourspecificedname}.herokuapp.com/:
""Only those who will risk going too far can possibly find out how far one can go." - T.S. Eliot"

Final step is put this server name in the facebok app page. From https://developers.facebook.com/apps/, select your app and messenger. You will see Webhooks:

![image](https://cloud.githubusercontent.com/assets/901975/14750370/0d98de98-08f7-11e6-8c6b-85733dab4fb4.png)

Select "Setup Webhooks", and you will see callback URL and verify token. For the callback URL put your herokuapp URL + "/webhook". For example, my callback URL is https://fbwitbot.herokuapp.com/webhook. 

Type the Verify Token
 that you set. If you haven't set, the default value is "just_do_it". 

Click all items in the Subscription Fields.

![image](https://cloud.githubusercontent.com/assets/901975/14750713/c64e4ee0-08f8-11e6-8745-2ebc746ae367.png)

Then, you will see green complete! 
![image](https://cloud.githubusercontent.com/assets/901975/14750734/e59c1016-08f8-11e6-9333-fbb7c92dd342.png)

You may need to select the page one more time:

curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<PAGE_ACCESS_TOKEN>"

You may see: 
{"success":true}

Finally, go to the Facebook page, you created/selected and send a message there:
![image](https://cloud.githubusercontent.com/assets/901975/14750786/20ddf0a4-08f9-11e6-9c9c-719d1020e5d8.png)

![image](https://cloud.githubusercontent.com/assets/901975/14751164/2a485e2a-08fb-11e6-9a98-fd79bb0773f7.png)







 





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
 
 

