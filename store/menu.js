export const state = () => ({
         menuItems: [
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
  menuItems: state => state.menuItems
};
