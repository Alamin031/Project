export type SidebarContextType = {
  serviceId: string | number | null;
  chatbotId: string | number | null;
  actionType: string | null;
  setActionType: React.Dispatch<React.SetStateAction<string | null>>;
  setServiceId: React.Dispatch<React.SetStateAction<string | number | null>>;
  setChatbotId: React.Dispatch<React.SetStateAction<string | number | null>>;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  isDrawerOpen: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  isModalOpen: boolean;
  ischatbotModalOpen: boolean;
  toggleModal: () => void;
  togglechatbotModal: () => void;
  closeModal: () => void;
  isUpdate: boolean;
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
  togglechatbotEditModal: () => void;
  closechatbotEditModal: () => void;
  ischatbotEditModalOpen: boolean;

  

};
