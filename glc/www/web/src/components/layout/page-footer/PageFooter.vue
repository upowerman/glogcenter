<template>
  <div class="copyright">Copyright © 2023 gotoeasy.top</div>
</template>

<script setup>
import { useThemeStore } from '~/pkgs';

const themeStore = useThemeStore();
</script>

<style scoped lang="css">
.copyright {
  display: flex;
  justify-content: center;
  line-height: calc(var(--gotoeasy-admin-footer-height));
  color: v-bind('themeStore.footerColor');
  background-color: v-bind('themeStore.footerBgColor');
}
</style>
