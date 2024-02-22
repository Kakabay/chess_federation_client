export interface ContactData {
  name: string;
  email: string;
  message: string;
}

export interface Contact {
  id: number;
  phone: string;
  address: string;
  instagram: string;
  twitter: string;
  youtube: string;
  facebook: string;
  translations: [
    {
      model_id: string;
      locale: string;
      attribute_data: string;
    }
  ];
}
