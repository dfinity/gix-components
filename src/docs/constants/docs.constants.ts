export interface ComponentRoute {
  path: string;
  title: string;
  description: string;
}

export const COMPONENT_ROUTES: ComponentRoute[] = [
  {
    path: "/components/bottom-sheet",
    title: "Bottom Sheet",

    description:
      "A dialog containing supplementary content anchored to the bottom of the screen.",
  },

  {
    path: "/components/busy-screen",
    title: "Busy Screen",
    description: "A screen that indicates busy loading.",
  },

  {
    path: "/components/card",
    title: "Card",

    description:
      "Cards are surfaces that display content and optionally actions on a single topic.",
  },

  {
    path: "/components/checkbox",
    title: "Checkbox",
    description:
      "Checkboxes allow the selection of multiple options from a set of options.",
  },

  {
    path: "/components/collapsible",
    title: "Collapsible",
    description: "A Collapsible toggle summary.",
  },

  {
    path: "/components/content",
    title: "Content",

    description: "The detail of the layout where your content finds place.",
  },

  {
    path: "/components/copy",
    title: "Copy",
    description: "Copy component that copies selection.",
  },

  {
    path: "/components/dropdown",
    title: "Dropdown",
    description: "Dropdown displays a list of selectable options for a user.",
  },

  {
    path: "/components/external-link",
    title: "External Link",
    description: "A wrapper to render quickly external link.",
  },

  {
    path: "/components/header-title",
    title: "Header Title",

    description: "An opinionated title for the dapp.",
  },

  {
    path: "/components/html",
    title: "Html",
    description: "A component for safe (sanitized) html content rendering.",
  },

  {
    path: "/components/infinite-scroll",
    title: "Infinite Scroll",

    description:
      "Calls an action when the user scrolls a specified distance in a list.",
  },

  {
    path: "/components/input",
    title: "Input",

    description: "A styled input field where the user can enter data.",
  },

  {
    path: "/components/input-range",
    title: "Input Range",

    description:
      "An input of type range to let the user specify a numeric value which must be no less than a given value, and no more than another given value.",
  },

  {
    path: "/components/island",
    title: "Island",

    description: "Scope your content within an island.",
  },

  {
    path: "/components/key-value",
    title: "Key Value",
    description: "Render a label and its value.",
  },

  {
    path: "/components/key-value-info",
    title: "Key Value Info",
    description: "Render a label, its value and an information.",
  },

  {
    path: "/components/layout",
    title: "Layout",

    description: "Header, menu and content. The structure of your dapp.",
  },

  {
    path: "/components/modal",
    title: "Modal",

    description:
      "Modal component is used to display content that temporarily blocks interactions with the main view of an application.",
  },

  {
    path: "/components/nav",
    title: "Nav",

    description: "A navigation column.",
  },

  {
    path: "/components/page-header",
    title: "Page Header",
    description:
      "A component to use in details or settings pages to display the main details.",
  },

  {
    path: "/components/page-section",
    title: "PageSection",
    description:
      "A component to render a section of a page with a title, value and description.",
  },

  {
    path: "/components/popover",
    title: "Popover",
    description:
      "A popover is a floating container that is rendered over the content next to an anchor — commonly a button — which initiates its display.",
  },

  {
    path: "/components/progress-bar",
    title: "Progress Bar",
    description: "An indicator showing the completion progress of a task.",
  },

  {
    path: "/components/progress-steps",
    title: "Progress Steps",
    description:
      "Display the progression of a long-lasting task with various steps.",
  },

  {
    path: "/components/qr-code-generator",
    title: "QR Code Generator",
    description: "Generates a QR Code.",
  },

  {
    path: "/components/qr-code-reader",
    title: "QR Code Reader",
    description: "Read a QR Code with the camera.",
  },

  {
    path: "/components/segment",
    title: "Segment",

    description: "A segment controls.",
  },

  {
    path: "/components/skeleton-text",
    title: "Skeleton Text",

    description: "A component for rendering placeholder content.",
  },

  {
    path: "/components/spinner",
    title: "Spinner",

    description:
      "A spinner component is used to indicate users that their action is being processed.",
  },

  {
    path: "/components/split-content",
    title: "Split Content",

    description:
      "The detail of the layout where the content finds place in two columns.",
  },

  {
    path: "/components/tag",
    title: "Tag",
    description:
      "Tags are used to inform users of the status of an object or of an action that’s been taken.",
  },

  {
    path: "/components/toasts",
    title: "Toasts",

    description:
      "Toasts are non-disruptive messages that appear in the interface to provide quick, at-a-glance feedback on the outcome of an action.",
  },

  {
    path: "/components/theme-toggle",
    title: "Theme Toggle",
    description: "An opinionated theme toggle.",
  },

  {
    path: "/components/toggle",
    title: "Toggle",
    description:
      "Toggles are switches that change the state of a single option.",
  },

  {
    path: "/components/value",
    title: "Value",
    description: "Shorthand to render a value.",
  },

  {
    path: "/components/wizard-modal",
    title: "Wizard Modal",

    description:
      "A particular type of Modal component used to present several steps in form of a wizard.",
  },
];
