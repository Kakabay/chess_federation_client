export interface structureType {
  id: number;
  job: string;
  name: string;
  email: string;
  phone: string;
  facebook: string;
  img: string;
  translations: [
    {
      model_id: string;
      locale: string;
      attribute_data: string;
    }
  ];
}
