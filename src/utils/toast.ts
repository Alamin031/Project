import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const notifySuccess = (message: string) =>
  toast.success(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

const notifyError = (message: string) =>
  toast.error(message, {
    position: 'top-center',
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
const notifyWarrning = (message: string) =>
  toast.warning(message, {
    position: 'top-center',
    autoClose: 300000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });

export { notifySuccess, notifyError, notifyWarrning };
