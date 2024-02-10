export type LocalTypes = {
  id: string | number;
  status: string;
  language: string;
  key: string;
  createdAt: string | number | Date;
};

export type LocalListTypes = {
  Local: {
    data: LocalTypes[];
  };
  isLocalLoading: boolean;
  localMuted?: any;
};
