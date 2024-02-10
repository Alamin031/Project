import { SidebarContext } from '@/context/SideBarContext';
import ChatbotServices from '@/service/chatbot.service';
import ConfigServices from '@/service/chatbotconfig.service';
import DomainrServices from '@/service/domain.service';
import UserServices from '@/service/user.service';
import { SidebarContextType } from '@/types/SidebarContextType';
import { notifyError, notifySuccess } from '@/utils/toast';
import { Dialog, Transition } from '@headlessui/react';
import { useRouter } from 'next/router';
import { Fragment, useContext } from 'react';

function MainModal() {
  const router = useRouter();
  const { serviceId, setIsUpdate, isModalOpen, toggleModal } = useContext(
    SidebarContext,
  ) as SidebarContextType;

  function deleteRecord() {
    if (router.pathname === '/dashboard/adminMambar' && serviceId) {
      UserServices.deleteUser(serviceId)
        .then((res) => {
          setIsUpdate(true);
          toggleModal();
          notifySuccess(res.message);
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
        });
    }

    if (router.pathname === '/dashboard/domain' && serviceId) {
      DomainrServices.deleteDomain(serviceId)
        .then((res) => {
          setIsUpdate(true);
          toggleModal();
          notifySuccess(res.message);
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
        });
    }
    if (router.pathname === '/dashboard/ChatbotConfigure' && serviceId) {
      ChatbotServices.deleteChatbot(serviceId)
        .then((res) => {
          setIsUpdate(true);
          toggleModal();
          notifySuccess(res.message);
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
        });
    }
    if (router.pathname === '/dashboard/counter' && serviceId) {
      ConfigServices.deleteCounterQuestion(serviceId)
        .then((res) => {
          setIsUpdate(true);
          toggleModal();
          notifySuccess(res.message);
        })
        .catch((err) => {
          notifyError(err ? err.response.data.message : err.message);
        });
    }
  }
  return (
    <Transition appear show={isModalOpen} as={Fragment}>
      {/* eslint-disable-next-line react/jsx-no-bind */}
      <Dialog as="div" className="relative z-10" onClose={toggleModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Are you sure? 🤔
                </Dialog.Title>

                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Do you really want to delete this record? You can&apos;t
                    view this in your list anymore if you delete!
                  </p>
                </div>
                <div className="flex gap-3">
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={toggleModal}
                    >
                      No, Keep It
                    </button>
                  </div>
                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={deleteRecord}
                    >
                      Yes, Delete It
                    </button>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default MainModal;
