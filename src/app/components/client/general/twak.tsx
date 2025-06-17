"use client"
import TawkMessengerReact from "@tawk.to/tawk-messenger-react";

interface TwakProps {
  propertyID: string;
  widgetID: string;
}

export default function Twak({ propertyID, widgetID }: TwakProps) {
  return <TawkMessengerReact propertyId={propertyID} widgetId={widgetID} />;
}
