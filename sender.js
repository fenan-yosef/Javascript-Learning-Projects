const TelegramBot = require('node-telegram-bot-api');

// Replace 'YOUR_BOT_TOKEN' with the token obtained from BotFather
const bot = new TelegramBot('6179436473:AAHrPLLZBSjks3kzs5rvEVcD52UaAellVzE', { polling: true });

// Array of chat IDs
const chatIds = ['856048902', '495806103', '1001459438185']; // Add the desired chat IDs

// Handle the /submit command
bot.onText(/\/submit/, (msg) => {
  const chatId = msg.chat.id;
  const message = 'New order received: ' + msg.text.replace('/submit', '');

  // Send a message to each chat ID
  chatIds.forEach((chatId) => {
    bot.sendMessage(chatId, message);
  });
});
