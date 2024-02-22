export interface eventType {
  id: number;
  title: string;
  excerpt: string;
  published_at: string;
  featured_images: [
    {
      id: number;
      disk_name: string;
      file_name: string;
      path: string;
      extension: string;
    }
  ];
  content_html: string;
}

export interface tournamentType {
  id: number;
  current: number;
  header: string;
  events: [
    {
      start: string;
      end: string;
      name: string;
      place: string;
      img: string;
    }
  ];
  translations: [
    {
      model_id: string;
      locale: string;
      attribute_data: string;
    }
  ];
}
