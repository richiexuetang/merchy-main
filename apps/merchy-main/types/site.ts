export type Category = {
  name: string;
  urlKey: string;
};

export type BrowseCategory = {
  name: string;
  urlKey: string;
  children?: Category[];
};

export type Page = {
  name: string | undefined;
  url?: string | undefined;
  body?: string | undefined;
  is_visible?: boolean | undefined;
  sort_order?: number | undefined;
};
