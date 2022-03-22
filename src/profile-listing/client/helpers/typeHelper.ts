export type ProfileModule = {
  profile: {
    name: string;
    species: string;
    status: string;
    gender: string;
    image: string;
    nameOfChapter?: string;
    location: {
      name?: string;
      dimension?: string;
      type?: string;
      residents?: Array<string>;
    };
  };
};

export type ListingsListProps = {
  page: number;
  fetchInfo: (page: number) => Promise<any>;
};
