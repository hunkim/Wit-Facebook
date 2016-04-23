# Wit-Facebook
Wit 봇 엔진과 Facebook 메신저 연동 한번에 해보기 

## 기본 설치
먼저 포크 한다음 클론
```bash
git clone https://github.com/{forked}/Wit-Facebook.git
cd Wit-Facebook
npm install
 ``` 

## 설정 
### Wit 만들기 

우선 https://wit.ai/home 로 가서 엡을 하나 만듭니다. 여기 https://wit.ai/docs/quickstart 를 보시고 실제 만들이전 날씨 엡 예제를 보세요. https://wit.ai/sungkim/weather/stories.

만드신 엡의 설정페이지에 가셔서 중요한 토큰 아이디를 가져옵니다. 

![image](https://cloud.githubusercontent.com/assets/901975/14757067/58f03050-0922-11e6-813d-831df8614303.png)

이 토큰 아이디를 이용해서 코컬에서 bot.js를 이용해서 잘 되는지 테스트 해봅니다. 본인의 Wit스토리를 바꾸면 bot.js를 같이 바꾸어 준다음 데스트.
```bash
 $WIT_TOKEN=insert_token_here node bot 
 ```

 봇에게 말을 걸면 답을 해줍니다.

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

### Facebook 페이지 만들기
우선 https://www.facebook.com/pages/create/?ref_type=pages_browser 에서 페이지를 하나 만듭니다. 메신저 봇은 바로 이 페이지와 연결됩니다.

### Facebook 엡 만들기 

* https://developers.facebook.com/quickstarts/?platform=web 에 가서 이름을 지정하고 "Create New Facebook App ID"을 눌러줍니다.

![image](https://cloud.githubusercontent.com/assets/901975/14749905/b557bf80-08f4-11e6-8218-2dd8dc7d529c.png)

* 이메일, 분류, 그리고 웹페이지 URL(아무 URL)을 넣어 줍니다.

![image](https://cloud.githubusercontent.com/assets/901975/14749960/ef969b94-08f4-11e6-9fa6-3294a47fcf4e.png)


### Facebook 메신저 설정

* https://developers.facebook.com/apps/에 가서 만들어 둔 엡을 선택합니다.

![image](https://cloud.githubusercontent.com/assets/901975/14757262/32399512-0924-11e6-924f-6b52d6303ecf.png)

* 왼쪽 하단에 있는 메신저 메뉴를 클릭합니다.

![image](https://cloud.githubusercontent.com/assets/901975/14750051/6733be3e-08f5-11e6-9da7-a35eb2720298.png)

* 메신저를 어느 Facebook 페이지랑 연결 시킬 것인지 선택한 다음 Page Access Token을 가져옵니다.

![image](https://cloud.githubusercontent.com/assets/901975/14757285/78e65248-0924-11e6-9ffb-e6226a7d434f.png)

### 서버를 Heruku 에서 돌리기
heroku.com는 본인의 프로그램을 5개 까지 무료로 deploy 해주므로 이 서비스를 이용, 우리 봇 서버를 돌립니다. 자세한 설명은 heroku.com.

* 'heroku create' 명령을 실행한 다음 heroku로 푸쉬 합니다.

```bash
cd Wit-Facebook
heroku create
git push heroku master
```

* 더 쉬운 방법은 아래 Heroku버턴을 누르시면 쉽게 할수 있습니다.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

* 이전 설정에서 받아온 WIT_TOKEN, FB_PAGE_TOKEN 이 필요합니다. FB_VERIFY_TOKEN 은 일종의 비밀 번호로 여러분들이 원하시는 값으로 설정합니다.
기본값은 "just_do_it" 로 되어 있습니다. 이 값들을 heroku 설정 변수 (config variables) 에 입력 합니다.

![image](https://cloud.githubusercontent.com/assets/901975/14750245/627a5d20-08f6-11e6-9672-f19b3719eb2b.png)

* 설정후 Deploy 한다음 "Deploy to Heroku" 이 초록으로 된것을 확인한 다음 "View" 버턴을 눌러 서버로 갑니다.

![image](https://cloud.githubusercontent.com/assets/901975/14750332/d59fad46-08f6-11e6-9f24-16fff6b98898.png)

* If it is set correctly, you will see something like this from https://{yourspecificedname}.herokuapp.com/:
"Only those who will risk going too far can possibly find out how far one can go." - T.S. Eliot"

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
 $curl -X POST -H "Content-Type: application/json" -d @test/msg.json http://localhost:8445/webhook
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

 

