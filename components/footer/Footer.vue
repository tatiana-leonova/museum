<template>
  <div>
    <div>
      <MainNav />
    </div>
    <div>
      <SocialLinks />
    </div>
  </div>
</template>

<script>
import MainNav from "~/components/common/MainNav.vue";
import SocialLinks from "~/components/common/SocialLinks.vue";

export default {
  components: {
    MainNav,
    SocialLinks,
  },
};
</script>
