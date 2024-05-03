import React, { createContext, useContext, useState, ReactNode } from "react";
import { Item } from "../types/pre_order";

interface PreOrderContextType {
  purchaseItems: Item[];
  addToCart: (item: Item) => void;
}

export const PreOrderContext = createContext<PreOrderContextType | undefined>(
  undefined
);

export const usePurchase = () => {
  const context = useContext(PreOrderContext);
  if (!context) {
    throw new Error("usePurchase must be used within a PurchaseProvider");
  }
  return context;
};

interface PurchaseProviderProps {
  children: ReactNode;
}

export const PurchaseProvider: React.FC<PurchaseProviderProps> = ({
  children,
}) => {
  const [purchaseItems, setPurchaseItems] = useState<Item[]>([]);

  const addToCart = (item: Item) => {
    if (!item.id || !item.product_name || !item.price || !item.amount) {
      throw new Error("Item is missing required properties");
    }

    // Check if the item already exists in purchaseItems
    const existingItemIndex = purchaseItems.findIndex(
      (existingItem) => existingItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // If the item exists, update its quantity and price
      const updatedItems = [...purchaseItems];
      updatedItems[existingItemIndex] = {
        ...updatedItems[existingItemIndex],
        amount: updatedItems[existingItemIndex].amount + item.amount,
        price: updatedItems[existingItemIndex].price + item.price,
      };
      setPurchaseItems(updatedItems);
    } else {
      // If the item doesn't exist, add it to purchaseItems
      setPurchaseItems([...purchaseItems, item]);
    }
  };

  return (
    <PreOrderContext.Provider value={{ purchaseItems, addToCart }}>
      {children}
    </PreOrderContext.Provider>
  );
};
