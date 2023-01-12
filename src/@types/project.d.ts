interface Project {
  uid: string;
  title: string;
  url: {
    link_type: string;
    url: string;
  };
  image: {
    alt: string;
    dimensions: { width: number; height: number };
    url: string;
  };
}
