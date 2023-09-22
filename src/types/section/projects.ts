export type ProjectsProps = {
  data: {
    id: string;
    title: string;
    projects: {
      title: string;
      img: string;
      stack: string[];
      live: string;
      code: string;
    }[];
    buttons: string[];
  };
};
