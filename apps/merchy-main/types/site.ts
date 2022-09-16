export type Category = {
  name: string;
  urlKey: string;
};

export type BrowseCategory = {
  name: string;
  urlKey: string;
  children?: Category[];
};
