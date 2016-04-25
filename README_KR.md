# Wit-Facebook
[![Build Status](https://travis-ci.org/hunkim/Wit-Facebook.svg?branch=master)](https://travis-ci.org/hunkim/Wit-Facebook)
[![Codacy Badge](https://api.codacy.com/project/badge/grade/7442b6c4eb6b48a890d751c0da5a3b6d)](https://www.codacy.com/app/hunkim/Wit-Facebook)

Wit.ai 봇 엔진과 Facebook 메신저 연동 한번에 해보기

## 기본 설치
먼저 이 프로젝트를 포크 한다음 클론 합니다. npm/node가 설치 되어 있다고 가정합니다. "nam install” 을 실행하여 필요한 node_module을 다운 받습니다.
```bash
git clone https://github.com/{forked}/Wit-Facebook.git
cd Wit-Facebook
npm install
 ```

## 설정
### Wit 만들기

우선 https://wit.ai/home 로 가서 엡을 만듭니다. https://wit.ai/docs/quickstart 를 보시고 실제 만들이전 날씨 엡 예제를 봅니다. https://wit.ai/sungkim/weather/stories.

만든 Wit 엡의 설정페이지에 가서 토큰 아이디를 가져옵니다.

![image](https://cloud.githubusercontent.com/assets/901975/14757067/58f03050-0922-11e6-813d-831df8614303.png)

이 토큰 아이디를 이용해서 local에서 bot.js를 이용해서 Wit엡이 잘 동작하는지 테스트 해봅니다. 본인의 Wit스토리를 바꾸면 bot.js를 같이 바꾸어 준다음 반복해서 test합니다.

```bash
 $WIT_TOKEN=insert_token_here node bot.js
 ```

 아래와 같이 봇에게 말을 걸면 답을 해줍니다.

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
우선 https://www.facebook.com/pages/create/?ref_type=pages_browser 에서 페이지를 만듭니다. 메신저 봇은 바로 이 페이지와 연결됩니다.

### Facebook 엡 만들기

* https://developers.facebook.com/quickstarts/?platform=web 에 가서 이름을 지정하고 "Create New Facebook App ID”를 눌러줍니다.

![image](https://cloud.githubusercontent.com/assets/901975/14749905/b557bf80-08f4-11e6-8218-2dd8dc7d529c.png)

* 이메일, 분류, 그리고 웹페이지 URL(아무 URL)을 입력합니다.

![image](https://cloud.githubusercontent.com/assets/901975/14749960/ef969b94-08f4-11e6-9fa6-3294a47fcf4e.png)

### Facebook 메신저 설정

* https://developers.facebook.com/apps/에 가서 만들어 둔 엡을 선택합니다.

![image](https://cloud.githubusercontent.com/assets/901975/14757262/32399512-0924-11e6-924f-6b52d6303ecf.png)

* 왼쪽 하단에 있는 메신저 메뉴를 클릭합니다.

![image](https://cloud.githubusercontent.com/assets/901975/14750051/6733be3e-08f5-11e6-9da7-a35eb2720298.png)

* 메신저를 어느 Facebook 페이지랑 연결 시킬 것인지 선택한 다음 해당하는 Page Access Token을 가져옵니다.

![image](https://cloud.githubusercontent.com/assets/901975/14757285/78e65248-0924-11e6-9ffb-e6226a7d434f.png)

### 서버를 Heroku 에서 돌리기
heroku.com는 본인의 프로그램을 5개 까지 무료로 deploy 해주므로 이 서비스를 이용하여 우리 봇 서버를 돌립니다. 자세한 Heroku 사용법은 heroku.com 참조.

* 'heroku create' 명령을 실행한 다음 heroku로 push하여 deploy 합니다.

```bash
cd Wit-Facebook
heroku create
git push heroku master
```

* 더 쉬운 방법은 아래 Heroku 버턴을 누르시면 쉽게 deploy 할수 있습니다. (이 방법을 추천합니다.)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

* 이전 설정에서 받아온 WIT_TOKEN, FB_PAGE_TOKEN 이 필요합니다. FB_VERIFY_TOKEN 은 일종의 비밀 번호로 여러분들이 원하시는 값으로 설정합니다.
기본값은 "just_do_it" 로 되어 있습니다. 이 값들을 heroku 설정 변수 (config variables) 에 입력 합니다.

![image](https://cloud.githubusercontent.com/assets/901975/14750245/627a5d20-08f6-11e6-9672-f19b3719eb2b.png)

* 설정후 Deploy 한다음 "Deploy to Heroku" 이 초록으로 된것을 확인한 다음 "View" 버턴을 눌러 서버를 연결해 봅니다.

![image](https://cloud.githubusercontent.com/assets/901975/14750332/d59fad46-08f6-11e6-9f24-16fff6b98898.png)

* 설정이 잘 되었으면 여러분의 서버 (https://{yourspecificedname}.herokuapp.com/) 에서 다음의 메시지를 보낼 것입니다.
"Only those who will risk going too far can possibly find out how far one can go." - T.S. Eliot"

### Facebook Webhooks 설정
* 마지막 설정은 메신저 Webhooks을 설정하는 것입니다. https://developers.facebook.com/apps/가셔서 Facebook 엡을 선택하시고 messenger를 선택합니다. 여기에서 Webhooks을 선택해줍니다.

![image](https://cloud.githubusercontent.com/assets/901975/14750370/0d98de98-08f7-11e6-8c6b-85733dab4fb4.png)

* "Setup Webhooks"을 하고 callback URL에 Heroku 엡 URL 에  "/webhook"를 추가한 URL을 넣어 줍니다. 예를 들어 https://fbwitbot.herokuapp.com/webhook 을 callback URL에 넣어 줍니다.

* 그런다음 지정한 Verify Token 을 입력합니다. 지정하지 않으셨다면 기본값은 "just_do_it" 입니다.

* Subscription Fields는 모든 항목을 체크합니다.

![image](https://cloud.githubusercontent.com/assets/901975/14750713/c64e4ee0-08f8-11e6-8745-2ebc746ae367.png)

* 그럼, 초록색 complete 글씨가 보일것입니다!

![image](https://cloud.githubusercontent.com/assets/901975/14750734/e59c1016-08f8-11e6-9333-fbb7c92dd342.png)

* 엡 메신저 설정에서 페이지를 한번더 선택해서 PAGE_ACCESS_TOKEN 을 가져옵니다.

![image](https://cloud.githubusercontent.com/assets/901975/14757285/78e65248-0924-11e6-9ffb-e6226a7d434f.png)

* 다음 명령을 보내 페이지를 엡을 등록을 합니다.

```bash
curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<PAGE_ACCESS_TOKEN>"
```
* Success 신호를 받으면 정상입니다.
```bash
{"success":true}
```

* 모든 설정이 끝났습니다. Facebook 페이지로 가서 메시지를 보내봅니다. 여러분들이 설정한 봇이 답을 할것입니다.

![image](https://cloud.githubusercontent.com/assets/901975/14750786/20ddf0a4-08f9-11e6-9c9c-719d1020e5d8.png)

![image](https://cloud.githubusercontent.com/assets/901975/14751164/2a485e2a-08fb-11e6-9a98-fd79bb0773f7.png)

## Testing
### Jest (유닛 테스팅)
 ```bash
 npm test
 ```

### 개별 봇 테스팅
아래 명령으로 봇의 기능을 테스트 할수 있습니다.
 ```bash
 $WIT_TOKEN=insert_token_here node bot
 ```

### 서버 테스트
우선 서버를 로컬에서 실행시킵니다.

```bash
 $WIT_TOKEN=insert_token_here node index
 ```
그런다음 다른 shell이나 창에서 아래 명령으로 가상 메시지를 보내 봅니다.
 ```bash
 $curl -X POST -H "Content-Type: application/json" -d @__tests__/msg.json http://localhost:8445/webhook
```

서버가 다음과 같이 응답하면 정상입니다.
```
I'm wating for you @8445

Executing merge action
Executing action: fetch-weather
Executing say with message: I see it’s sunny in Hong Kong today!
I see it’s sunny in Hong Kong today!
Oops! An error occurred while forwarding the response to USER_ID : An active access token must be used to query information about the current user.
Waiting for futher messages.
```

USER_ID 관련 에러가 나는 것은 정상입니다. 그러나 봇의 응답이 예상한 응답인지 확인 하시면 됩니다. 서버나 봇을 프로그램을 수정후 deploy 하시기 전에 테스트 하시면 좋습니다.

## 참고자료
아래 프로젝트의 코드와 설정을 재사용하거나 참고하였습니다:
* https://github.com/wit-ai/node-wit
* https://github.com/jw84/messenger-bot-tutorial
* https://developers.facebook.com/docs/messenger-platform/quickstart

## 도움 요청
여러분들의 커멘트와 PR은 언제나 환영합니다.
