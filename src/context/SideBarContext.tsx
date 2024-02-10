import { SidebarContextType } from '@/types/SidebarContextType';
import React, { useCallback, useContext, useMemo, useState } from 'react';

export const SidebarContext = React.createContext<SidebarContextType | null>(
  null,
);

export const useSidebar = () => useContext(SidebarContext);

type Props = {
  children: React.ReactNode;
};

export function SidebarProvider({ children }: Props) {
  const [serviceId, setServiceId] = useState<string | number | null>('');
  const [chatbotId, setChatbotId ] = useState<string | number | null>('');
  const [actionType, setActionType] = useState<string | null>('');

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [ischatbotModalOpen, setIschatbotModalOpen] = useState(false);
  const [ischatbotEditModalOpen, setIschatbotEditModalOpen] = useState(false);


  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prevState) => !prevState);
  }, []);
  const closeSidebar = useCallback(() => {
    setServiceId(null);
    setIsSidebarOpen(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    if (isDrawerOpen) {
      setServiceId(null);
    }
    setIsDrawerOpen((prevState) => !prevState);
  }, [isDrawerOpen]);

  const closeDrawer = useCallback(() => {
    setServiceId(null);
    setIsDrawerOpen(false);
  }, []);

  const toggleModal = useCallback(() => {
    if (isModalOpen) {
      setServiceId(null);
    }
    setIsModalOpen((prevState) => !prevState);
  }, [isModalOpen]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const togglechatbotEditModal = useCallback(() => {
    if (ischatbotEditModalOpen) {
      setChatbotId(null);
      setActionType(null);

    }
    setIschatbotEditModalOpen((prevState) => !prevState);
  }, [ischatbotEditModalOpen]);

  const closechatbotEditModal = useCallback(() => {
    setIschatbotEditModalOpen(false);
  }, []);

  const togglechatbotModal = useCallback(() => {
    if (ischatbotModalOpen) {
      setChatbotId(null);
      setActionType(null);

    }
    setIschatbotModalOpen((prevState) => !prevState);
  }, [ischatbotModalOpen]);

  const closechatbotModal = useCallback(() => {
    setIschatbotModalOpen(false);
  }, []);


  const value = useMemo(
    () => ({
      serviceId,
      setServiceId,
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
      isDrawerOpen,
      toggleDrawer,
      closeDrawer,
      isModalOpen,
      ischatbotModalOpen,
      toggleModal,
      closeModal,
      isUpdate,
      setIsUpdate,
      togglechatbotModal,
      closechatbotModal,
      actionType,
      setActionType,
      setChatbotId,
      chatbotId,
      togglechatbotEditModal,
      closechatbotEditModal,
      ischatbotEditModalOpen,
      setIschatbotEditModalOpen,
    }),
    [
      serviceId,
      isSidebarOpen,
      toggleSidebar,
      closeSidebar,
      isDrawerOpen,
      toggleDrawer,
      closeDrawer,
      isModalOpen,
      ischatbotModalOpen,
      toggleModal,
      closeModal,
      isUpdate,
      togglechatbotModal,
      closechatbotModal,
      actionType,
      setActionType,
      setChatbotId,
      chatbotId,
      togglechatbotEditModal,
      closechatbotEditModal,
      ischatbotEditModalOpen,
      setIschatbotEditModalOpen,
      
    ],
  );

  return (
    <SidebarContext.Provider value={value}>{children}</SidebarContext.Provider>
  );
}
