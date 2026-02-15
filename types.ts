
export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string;
  category: 'starters' | 'mains' | 'desserts' | 'drinks';
  image: string;
}

export interface RecommendationRequest {
  mood: string;
  dietary: string;
}

export interface ReservationData {
  name: string;
  email: string;
  date: string;
  time: string;
  guests: number;
}
