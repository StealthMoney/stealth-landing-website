"use client";
import React, { ReactNode, Ref, forwardRef } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { PlusCircledIcon } from "@radix-ui/react-icons";
import data from "@/app/components/dummy-data/faq_data.json";
import "./style.css";

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

interface faq {
  Header: string;
  body: string;
}

const AccordionTrigger = forwardRef(
  (
    { children, className, ...props }: AccordionTriggerProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => (
    <Accordion.Header className="AccordionHeader">
      <Accordion.Trigger
        className="flex justify-between items-center w-full cursor-pointer py-4 px-6"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <PlusCircledIcon className="AccordionChevron" aria-hidden />
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
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

const AccordionDemo = ({ defaultIndex = 0 }) => (
  <Accordion.Root
    className="AccordionRoot my-8 py-6 px-6 font-Nunito"
    type="single"
    defaultValue={`item-${defaultIndex + 1}`}
    collapsible
  >
    {data.map((item: faq, i: number) => (
      <Accordion.Item
        className="AccordionItem w-full my-6"
        value={`item-${i + 1}`}
        key={i}
      >
        <AccordionTrigger>
          <div className="max-w-[200px] lg:max-w-fit">{item.Header}</div>
        </AccordionTrigger>
        <AccordionContent>{item.body}</AccordionContent>
      </Accordion.Item>
    ))}
  </Accordion.Root>
);

export default AccordionDemo;
