const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { usernames, emails } = require('./data');

connection.on('error', (err) => console.error(err));
connection.once('open', async () => {
    console.log('Connected to the database');
    await Thought.deleteMany({});
    await User.deleteMany({});
    const users = [];
    for (let i = 0; i < 10; i++) {
      users.push({
        username: usernames[i],
        email: emails[i],
      });
    }
    await User.insertMany(users);
    console.log('Users seeded successfully');
  
    // Create thoughts for each user
    for (let i = 0; i < 10; i++) {
      const user = users[i];
      const thoughts = [];
      const numThoughts = Math.floor(Math.random() * 3) + 3; 
  
      for (let j = 0; j < numThoughts; j++) {
        thoughts.push({
          thoughtText: `Thought ${j + 1} by ${user.username}`,
          username: user.username,
          reactions: [], 
        });
      }
  
      await Thought.insertMany(thoughts);
      console.log(`Thoughts seeded successfully for user ${user.username}`);
    }
  
    console.log('Seeding complete!');
    process.exit(0);
  });