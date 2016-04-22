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
 
 

