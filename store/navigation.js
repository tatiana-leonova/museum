export const state = () => ({
  navItems: [
    {
      name: "биография",
      link: "/#biography"
    },
    {
      name: "творчество",
      link: "/#creation"
    },
    {
      name: "картины",
      link: "/catalog"
    },
    {
      name: "музеи",
      link: "/#museums"
    }
  ]
});

export const getters = {
  navItems: state => state.navItems
};
