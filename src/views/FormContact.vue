<template>
  <div class="chatbot">
    <!-- Chatbot Icon -->
    <div class="bot-icon" @click="toggleChat">
      <div class="icon-inner">
        <i class="fa fa-commenting" aria-hidden="true"></i>
      </div>
    </div>

    <!-- Chatbot Window -->
    <div v-if="isChatOpen" class="chat-window">
      <div class="chat-header">
        <span class="close-icon" @click="toggleChat">
          <i class="fa fa-window-close" aria-hidden="true"></i>
        </span>
        <h4>How can we help you?</h4>
      </div>
      <div class="chat-content">
        <div class="messages">
          <div
            v-for="(msg, index) in messages"
            :key="index"
            :class="['message', msg.type]"
          >
            <img
              v-if="msg.type === 'bot'"
              class="avatar"
              :src="avatarUrl"
              alt="Bot Avatar"
            />
            <div class="message-text">
              <div v-if="msg.qrCode">
                <img :src="msg.qrCode" alt="QR Code" />
              </div>
              <div style="color: black;" v-else>{{ msg.text }}</div>
            </div>
          </div>
        </div>
        <form @submit.prevent="sendMessage" class="chat-input">
          <input
            v-model="message"
            type="text"
            placeholder="Send a message..."
            class="input-field"
          />
          <button type="submit" class="send-button">
            <i class="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import QRCode from "qrcode";

export default {
  data() {
    return {
      isChatOpen: false,
      message: "",
      messages: [],
      avatarUrl:
        "https://w7.pngwing.com/pngs/408/238/png-transparent-pink-and-blue-illustration-discord-computer-icons-logo-user-internet-bot-discord-icon-purple-angle-violet-thumbnail.png",
    };
  },
  methods: {
    toggleChat() {
      this.isChatOpen = !this.isChatOpen;
    },
    async sendMessage() {
      const userMessage = this.message.trim();
      if (!userMessage) return;

      this.addMessage(userMessage, "user"); // Add user message

      // Check for QR Code request
      if (userMessage.toLowerCase().includes("qr")) {
        const qrCode = await this.generateQRCode(userMessage);
        this.addMessage(qrCode, "bot", true); // Add QR code as a bot message
      } else {
        const botReply = this.getBotReply(userMessage); // Get bot's reply
        setTimeout(() => {
          this.addMessage(botReply, "bot");
        }, 500);
      }

      this.message = ""; // Clear input field
      this.scrollToBottom();
    },
    addMessage(textOrQrCode, type, isQrCode = false) {
      const message = isQrCode
        ? { qrCode: textOrQrCode, type }
        : { text: textOrQrCode, type };
      this.messages.push(message);
      this.scrollToBottom(); // Ensure scrolling after new message
    },
    async generateQRCode(text) {
      try {
        return await QRCode.toDataURL(text);
      } catch (err) {
        console.error("QR Code generation failed:", err);
        return null;
      }
    },
    getBotReply(userMessage) {
      const lowerMessage = userMessage.toLowerCase();

      // Keyword Matching
      if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
        return "Hello! Welcome to my bot service. How can I assist you today?";
      } else if (lowerMessage.includes("price") || lowerMessage.includes("cost")) {
        return "Our services vary in price depending on your requirements. Can you specify the service you're interested in?";
      } else if (lowerMessage.includes("support") || lowerMessage.includes("help")) {
        return "Our support team is available 24/7 to assist you. Please let us know the issue you're facing.";
      } else if (lowerMessage.includes("email")) {
        return "Here is our email: houtkysopanha69@gmail.com.";
      } else if (lowerMessage.includes("phone") || lowerMessage.includes("លេខទូរស័ព្ទ")) {
        return "Here is our phone number: 099 654 752.";
        } else if (lowerMessage.includes("telegram")) {
        return "Here is Telegram, you can use either: 099 654 752/@houtkysopanha";
      } else if (lowerMessage.includes("contact")) {
        return "You can contact us via email, Telegram, phone, LinkedIn, or WhatsApp.";
        } else if (lowerMessage.includes("linkedin")) {
        return "Here is our LinkedIn profile: https://www.linkedin.com/in/hout-ky-sopanha-8597852ba/ ";
        } else if (lowerMessage.includes("whatsapp")) {
        return "Here is our WhatsApp number: +855 99 654 752.";
        } else if (lowerMessage.includes("facebook")) {
        return "Here myname facebookL: Hout Ky Sopanha";
        } else if (lowerMessage.includes("instagram")) {
        return "Here is my Instagram: houtkysopanha";
      } else if (lowerMessage.includes("bye")) {
        return "Goodbye! Feel free to chat with me again anytime.";
      } else {
        return "I'm here to help with your queries. Can you provide more details about what you're looking for?";
      }
    },
    scrollToBottom() {
      this.$nextTick(() => {
        const messagesDiv = this.$el.querySelector(".messages");
        if (messagesDiv) {
          messagesDiv.scrollTop = messagesDiv.scrollHeight;
        }
      });
    },
  },
};
</script>

<style scoped>
/* Chatbot Icon */
.bot-icon {
  position: fixed;
  bottom: 15px;
  left: 15px;
  background: #3b4f69;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 1000;
}

.icon-inner {
  color: white;
  font-size: 1.5rem;
  margin: 17px;
}

/* Chat Window */
.chat-window {
  position: fixed;
  bottom: 80px;
  left: 15px;
  width: 320px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  z-index: 1000;
}

.chat-header {
  background: gray;
  color: white;
  padding: 10px;
  /* display: flex; */
  justify-content: space-between;
  align-items: center;
  border-radius: 10px 10px 0 0;
}

.close-icon {
  cursor: pointer;
}

.chat-content {
  /* flex: 1; */
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: auto;
}

.messages {
  /* flex: 1; */
  overflow-y: auto;
  margin-bottom: 10px;
}

.message {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.message.user {
  justify-content: flex-end;
}

.message.bot {
  justify-content: flex-start;
}

.message .avatar {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

.message-text {
  background: #f1f1f1;
  border-radius: 15px;
  padding: 10px;
  max-width: 70%;
  color: black !important;
}

.message.user .message-text {
  background: #4caf50;
  color: white;
}

/* Input Field */
.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ddd;
}

.input-field {
  /* flex: 1; */
  border: none;
  padding: 10px;
  border-radius: 20px;
  margin-right: 10px;
  background: #f1f1f1;
  color: black;
}

.send-button {
  background: #4caf50;
  border-radius: 10px;
  width: 50px;
  color: white;
  border: none;
  /* padding: 10px;
  border-radius: 50%; */
  cursor: pointer;
}

.send-button:hover {
  background: #45a049;
}
</style>
