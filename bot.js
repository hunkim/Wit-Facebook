'use strict';

// Joke example
// See https://wit.ai/patapizza/example-joke

// When not cloning the `node-wit` repo, replace the `require` like so:
const Wit = require('node-wit').Wit;
const FB = require('./facebook.js');
const Config = require('./const.js');

const firstEntityValue = (entities, entity) => {
  const val = entities && entities[entity] &&
    Array.isArray(entities[entity]) &&
    entities[entity].length > 0 &&
    entities[entity][0].value
  ;
  if (!val) {
    return null;
  }
  return typeof val === 'object' ? val.value : val;
};

const actions = {
  say(sessionId, context, message, cb) {
    console.log(message);
    if (require.main === module) {
      cb();
      return;
    }

    // Our bot has something to say!
    // Let's retrieve the Facebook user whose session belongs to
    const recipientId = context._fbid_;
    if (recipientId) {
      // Yay, we found our recipient!
      // Let's forward our bot response to her.
      FB.fbMessage(recipientId, message, (err, data) => {
        if (err) {
          console.log(
            'Oops! An error occurred while forwarding the response to',
            recipientId,
            ':',
            err
          );
        }

        // Let's give the wheel back to our bot
        cb();
      });
    } else {
      console.log('Oops! Couldn\'t find user in context:', context);
      // Giving the wheel back to our bot
      cb();
    }
  },
  merge(sessionId, context, entities, message, cb) {
    delete context.joke;
    const topic = firstEntityValue(entities, 'topic');
    if (topic) {
      context.topic = topic;
    }

    const sentiment = firstEntityValue(entities, 'sentiment');
    if (sentiment) {
      context.ack = sentiment === 'positive' ? 'Glad you liked it.' : 'Hmm.';
    } else {
      delete context.ack;
    }

    cb(context);
  },
  error(sessionId, context, error) {
    console.log(error.message);
  },
  ['answer_it'](sessionId, context, cb) {
    context.answer = context.topic; // just return the topic for now
    cb(context);
  },
};


exports.actions = actions;

// bot testing mode
// http://stackoverflow.com/questions/6398196
if (require.main === module) {
  console.log("Bot testing mode.");
  const client = new Wit(Config.WIT_TOKEN, actions);
  client.interactive();
}
