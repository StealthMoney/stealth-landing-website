declare module "@tawk.to/tawk-messenger-react" {
  import React from "react";

  interface TawkMessengerReactProps {
    propertyId: string;
    widgetId: string;
    onLoad?: () => void;
  }

  export default class TawkMessengerReact extends React.Component<TawkMessengerReactProps> {}
}
