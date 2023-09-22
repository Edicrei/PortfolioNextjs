export type ContactProps = {
  data: {
    id: string;
    title: string;
    input: {
      name: string;
      error: string | string[];
    }[];
    alert: string[];
    send: string;
  };
};

export type FormValues = {
  name: string;
  email: string;
  message: string;
};
