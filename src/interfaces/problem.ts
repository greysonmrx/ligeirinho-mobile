import { Delivery } from './delivery';

export interface Problem {
  id: string;
  delivery_id: string;
  description: string;
  delivery: Delivery;
  created_at: string;
  updated_at: string;
}
