// Tipos da Rick and Morty API

export type CharacterStatus = 'Alive' | 'Dead' | 'unknown';
export type CharacterGender = 'Female' | 'Male' | 'Genderless' | 'unknown';

// Referência resumida a um local (origem/localização)
export interface LocationRef {
  name: string;
  url: string;
}

export interface Character {
  id: number;
  name: string;
  status: CharacterStatus;
  species: string;
  type: string;
  gender: CharacterGender;
  origin: LocationRef;
  location: LocationRef;
  image: string;
  episode: string[]; // URLs dos episódios
  url: string;
  created: string;
}

export interface Episode {
  id: number;
  name: string;
  air_date: string;
  episode: string; // código, ex.: "S01E01"
  characters: string[];
  url: string;
  created: string;
}

export interface PaginationInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface PaginatedResponse<T> {
  info: PaginationInfo;
  results: T[];
}

// Corpo retornado pela API quando não há resultados (HTTP 404)
export interface ApiErrorResponse {
  error: string;
}

// Filtros aceitos em GET /character
export interface CharacterFilters {
  name?: string;
  status?: 'alive' | 'dead' | 'unknown';
  gender?: 'female' | 'male' | 'genderless' | 'unknown';
  page?: number;
}
