export interface Delivery {
  id: string;
  product: string;
  recipient_id: string;
  deliveryman_id: string;
  signature_id?: string;
  status: string;
  canceled_at?: string;
  start_date?: string;
  end_date?: string;
  created_at: string;
  updated_at: string;
  recipient: {
    id: string;
    name: string;
    street: string;
    number: number;
    complement: string;
    state: string;
    city: string;
    zip_code: string;
    created_at: string;
    updated_at: string;
  };
  deliveryman: {
    id: string;
    name: string;
    email: string;
    avatar_id: string;
    avatar?: {
      id: string;
      name: string;
      path: string;
      url: string;
      created_at: string;
      updated_at: string;
    };
    created_at: string;
    updated_at: string;
  };
  signature?: {
    id: string;
    name: string;
    path: string;
    url: string;
    created_at: string;
    updated_at: string;
  };
}
