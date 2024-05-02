import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Item {
  id: string;
  name: string;
  price: number;
}

interface PreOrderContextType {
  purchaseItems: Item[];
  addToCart: (item: Item) => void;
}

export const PreOrderContext = createContext<PreOrderContextType | undefined>(undefined);

export const usePurchase = () => {
  const context = useContext(PreOrderContext);
  // if (!context) {
  //   throw new Error('usePurchase must be used within a PurchaseProvider');
  // }
  return context;
};

interface PurchaseProviderProps {
  children: ReactNode;
}

export const PurchaseProvider: React.FC<PurchaseProviderProps> = ({ children }) => {
  const [purchaseItems, setPurchaseItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    setPurchaseItems(prevItems => [...prevItems, item]);
  };

  return (
    <PreOrderContext.Provider value={{purchaseItems, addToCart}}>
      {children}
    </PreOrderContext.Provider>
  );
};
