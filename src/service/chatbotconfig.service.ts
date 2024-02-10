import requests from "./http";

const ConfigServices = {
  getchatbotbyid(id: string | number | null) {
    return requests.get(`/chatbot/${id}`);
  },
  prompt(id: string | number | null, body: any) {
    return requests.post(`/chatbot/${id}/config`, body);
  },
  qustion(id: string | number | null, body: any) {
    return requests.post(`/chatbot/${id}/counterquestion`, body);
  },
  deletePrompt(id: string | number | null) {
    return requests.del(`/chatbot/${id}/promit`);
  },
  deleteCounterQuestion(id: string | number | null) {
    return requests.del(`/chatbot/${id}/question`);
  },
  updatePrompt(id: string | number | null, body: any) {
    return requests.put(`/chatbot/${id}/promitt`, body);
  },
  updateCounterQuestion(id: string | number | null, body: any) {
    return requests.put(`/chatbot/${id}/questio`, body);
  },
  getPrompt(id: string | number | null) {
    return requests.get(`/chatbot/${id}/getpromittById`);
  },
  getCounterQuestion(id: string | number | null) {
    return requests.get(`/chatbot/${id}/getCounterQuestionById`);
  },
  deleteFile(id: string | number | null) {
    return requests.del(`/chatbot/${id}/files`);
  },
  assinuser(id: string | number | null, body: any) {
    return requests.post(`/chatbot/${id}/assignUser`, body);
  },
  deleteassinuser(id: string | number | null) {
    return requests.del(`/chatbot/${id}/assignUser`);
  }
};

export default ConfigServices;
