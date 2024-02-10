import { SidebarContext } from '@/context/SideBarContext';
import { SidebarContextType } from '@/types/SidebarContextType';
import { useContext, useEffect } from 'react';
import useSWR from 'swr';

export default function useAsync(url: string) {
  const { isUpdate, setIsUpdate } = useContext(
    SidebarContext,
  ) as SidebarContextType;
  const { data, mutate, isLoading, error } = useSWR(url);

  useEffect(() => {
    if (isUpdate) {
      mutate();
      setIsUpdate(false);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUpdate]);
  return {
    data,
    isLoading,
    asyncError: error,
  };
}
