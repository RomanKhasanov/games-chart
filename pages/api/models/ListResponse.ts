export type ListResponse = {
  avg_rating: number;
  title_name: string;
  title_type: string;
}

export type TitleType = 'film' | 'game' | 'anime' | 'book' | 'comics' | 'serial'