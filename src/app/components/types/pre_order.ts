export type ProductDetail =
  | { icon: string; description: string }
  | { color: string };

export interface SpecsItem {
  finish: string;
  connectivity: string;
  display: string;
  security: string[];
  "system requirements": string;
  "Digital assets supported": string;
  "size & weights": string;
  "in the box": string[];
}
export interface SpecsItem2 {
  "chip model": string;
  "Fabrication process": string;
  core: string;
  "Flash Memory": string;
  ROM: string;
  RAM: string;
  Interface: string;
}

export interface itemType {
  id: number;
  product_name: string;
  product_images: string[];
  outOfStock: boolean;
  quantity: number;
  description: string;
  message: string;
  product_details: ProductDetail[];
  price: number;
  specs: {
    main: string;
    items?: SpecsItem[];
    items2?: SpecsItem2[];
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
