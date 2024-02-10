import Chatbotrequests from "./chatbot.htto";

const ChatbotServices = {

  deleteChatbot(id: string | number | null) {
    return Chatbotrequests.del(`/chatbot/${id}`);
  },
  createchatbot(body: any) {
    return Chatbotrequests.post(`/chatbot`, body);
  },
  prompt(id: string | number | null, body: any) {
    return Chatbotrequests.post(`/chatbot/${id}/config`, body);
  },
  updateChatbot(id: string | number | null, body: any) {
    return Chatbotrequests.put(`/chatbot/${id}`, body);
  }
  };
  

export default ChatbotServices;
