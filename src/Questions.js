export const questions = [
  {
    section: 1,
    items: [
      {
        label: "Username",
        type: "text",
        value: "username",
        // require,
      },
      {
        label: "Password",
        type: "password",
        value: "password",
      },
      {
        label: "Email",
        type: "email",
        value: "Email",
        require: "email",
      },
      {
        label: "Confirm ",
        type: "confirm password",
        value: "confirm password",
        require: "password",
        minLength: 6,
      },
    ],
  },
  {
    section: 2,
    items: [
      {
        label: " Address",
        type: "address",
        value: "street",
      },
      {
        label: "Country",
        type: "select",
        value: "state",
        options: ["UK", "USA", "AUSTRALIA", "Germany"],
      },
      {
        label: "City",
        type: "text",
        value: "city",
      },
      {
        label: "Language",
        type: "select",
        value: "state",
        options: [
          "English",
          "French",
          "Spanish",
          "Portugese",
          "Italian",
          "German",
          "Arabic",
        ],
      },
    ],
  },
  {
    section: 3,
    items: [
      {
        label: " Twitter",
        type: "social",
        value: "Twitter",
      },
      {
        label: " Google+",
        type: "social",
        value: "Twitter",
      },
      {
        label: " Facebook",
        type: "social",
        value: "Twitter",
      },
      {
        label: " Linkedin",
        type: "social",
        value: "Twitter",
      },
    ],
  },
];
