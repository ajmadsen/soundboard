export type ClipData = {
  name: string;
  subtitle?: string;
  categories: Category[];
};

export type Category = {
  name: string;
  clips: Clip[];
};

export type Clip = {
  name: string;
  file: string;
};
