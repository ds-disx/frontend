type DisxPost = {
  id?: number;
  title: string;
  content: string;
  username: string;
  userId: string;
};

type Disx = {
  id?: number;
  title: string;
  content: string;
  username: string;
  userId: string;
  commentCount: number;
  createdAt: Date;
};

type UComment = {
  id?: number;
  content: string;
  username: string;
  userId: string;
  disxId: number;
  createdAt: Date;
};

