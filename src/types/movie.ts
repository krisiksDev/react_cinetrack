export interface Movie {
  id: number;
  title: string;
  type: string;
  genre: string[];
  year: number;
  duration: number;
  director: string;
  cast: string[];
  poster: string;
  synopsis: string;
  rating: number;
}