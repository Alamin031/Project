import { SidebarContext } from '@/context/SideBarContext';
import { SidebarContextType } from '@/types/SidebarContextType';
import { useContext } from 'react';

const useToggleDrawer = () => {
  const { serviceId, setServiceId, toggleDrawer, toggleModal, togglechatbotModal } = useContext(
    SidebarContext,
  ) as SidebarContextType;

  const handleUpdate = (id: string | number) => {
    setServiceId(id);
    toggleDrawer();
  };

  const handleModalOpen = (id: string | number) => {
    setServiceId(id);
    toggleModal();
    togglechatbotModal();
  };

  return {
    serviceId,
    handleModalOpen,
    handleUpdate,
  };
};

export default useToggleDrawer;
