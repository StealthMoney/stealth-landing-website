export interface itemType {
  id: number;
  product_name: string;
  product_images: string[];
  availble: boolean;
  description: string;
  product_details: {
    icon: string;
    description: string;
  }[];
  price: number;
  specs: {
    main_text: string;
    sub_text: string;
  };
  glance: {
    main_text: string;
    items: {
      icon: string;
      header: string;
      text: string;
    }[];
  };
  security: {
    main_text: string;
    items: {
      icon: string;
      header: string;
    }[];
  };
  privacy: {
    main_text: string;
    items: {
      icon: string;
      header: string;
    }[];
  };
  backup: {
    main_text: string;
    items: {
      icon: string;
      header: string;
    }[];
  };
  authentication: {
    main_text: string;
    items: {
      icon: string;
      header: string;
    }[];
  };
  product_details2: {
    main_text: string;
    items: {
      icon: string;
      header: string;
      text: string;
    }[];
  };
  in_the_box: {
    main_text: string;
    items: {
      icon: string;
      header: string;
    }[];
  };
  safety: {
    main_text: string;
    sub_text: string;
  };
  material: {
    main_text: string;
    sub_text: string;
  };
}

export interface Item {
  id: number;
  product_name: string;
  price: number;
  amount: number;
  complete: boolean;
  image: string;
}

export interface formValueTypes {
  firstName: string;
  lastName: string;
  location: string;
  state: string;
  tel: string;
  email: string;
  region: string;
}
