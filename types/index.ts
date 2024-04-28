export type DisxPost = {
  id?: number;
  title: string;
  content: string;
  username: string;
  userId: string;
};

export type Disx = DisxPost & {
  createdAt: Date;
};
