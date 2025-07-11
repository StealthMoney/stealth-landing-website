"use client";
import React, { ReactNode, Ref, forwardRef, useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import data from "@/app/components/dummy-data/faq_data.json";
import "./style.css";
import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
  isOpen?: boolean;
}

interface faq {
  Header: string;
  body: string;
}

const AccordionTrigger = forwardRef(
  (
    { children, className, isOpen, ...props }: AccordionTriggerProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className="!flex !justify-between !items-center !w-full !cursor-pointer !py-6 !px-8"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <div
          className={`relative w-8 h-8 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <MinusIcon
            className={`absolute inset-0 w-8 h-8 transition-opacity duration-500 ease-in-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          />
          <PlusIcon
            className={`absolute inset-0 w-8 h-8 transition-opacity duration-500 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
        </div>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent = forwardRef(
  (
    { children, className, ...props }: AccordionContentProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => (
    <Accordion.Content className="" {...props} ref={forwardedRef}>
      <div className="AccordionContentText !px-8 !pb-6">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

const AccordionDemo = ({ defaultIndex = 0 }) => {
  const [openItem, setOpenItem] = useState(`item-${defaultIndex}`);

  return (
    <Accordion.Root
      className="AccordionRoot my-8 py-8 px-8 font-Nunito"
      type="single"
      value={openItem}
      onValueChange={setOpenItem}
      collapsible
    >
      {data.map((item: faq, i: number) => (
        <Accordion.Item
          className="AccordionItem w-full border-b border-gray-200 last:border-b-0"
          value={`item-${i + 1}`}
          key={i}
        >
          <AccordionTrigger isOpen={openItem === `item-${i + 1}`}>
            <div className="max-w-[200px] lg:max-w-fit md:text-lg text-sm">
              {item.Header}
            </div>
          </AccordionTrigger>
          <AccordionContent>{item.body}</AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

export default AccordionDemo;
