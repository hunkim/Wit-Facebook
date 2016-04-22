# Wit-Facebook
Wit-Faebook Messenger Example 
## Basic Installation
 ```
 npm install 
 ```

## Configuration 
### Wit Setting
### Facebook setting
### Launch Heruku 

If you want to use a different account for the bot, change the message or extend it with more functionalities, we've tried to make it super easy:

```bash
git clone https://github.com/XXX.git
cd xxx
npm install
npm start
# Follow the instructions there
```

Alternatively, click the button below:

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

If you would like the mention-bot to function on private repositories, set the `GITHUB_USER` and `GITHUB_PASSWORD` environment variables. You must disable two-factor authentication or you will receive a console log like this: `Login to ${USERNAME} failed`.


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
 
 

