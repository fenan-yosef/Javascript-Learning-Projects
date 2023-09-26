const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token obtained from BotFather
const bot = new TelegramBot('6179436473:AAHrPLLZBSjks3kzs5rvEVcD52UaAellVzE', { polling: true });

//6024456106:AAGhVJoQvhiHaDhhsjle5VauHopwMlXNTLY

// Array of chat IDs
const chatIds = ['856048902', '495806103', '1001459438185']; // Add the desired chat IDs

// Handle incoming messages
bot.on('message', (msg) => {
  const message = msg.text;

  // Process the message
  // You can add your own logic here

  // Send a message to each chat ID
  chatIds.forEach((chatId) => {
    bot.sendMessage(chatId, `New order received: ${message}`);
  });
});
