export const state = () => ({
  menuItems: [
    {
      name: "биография",
      link: "/"
    },
    {
      name: "творчество",
      link: "/"
    },
    {
      name: "картины",
      link: "/catalog"
    },
    {
      name: "музеи",
      link: "/"
    }
  ]
});

export const getters = {
  menuItems: state => state.menuItems
};
