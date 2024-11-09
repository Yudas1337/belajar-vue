<template>
  <fwb-navbar>
    <template #logo>
      <fwb-navbar-logo alt="Flowbite logo" image-url="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                       link="#">
        Belajar Vue
      </fwb-navbar-logo>
    </template>
    <template #default="{isShowMenu}">
      <fwb-navbar-collapse :is-show-menu="isShowMenu">
        <router-link
          v-for="(item, i) in navbarMenu"
          :key="i"
          :class="[isActive(item.path) ? activeNavbarClass : defaultNavbarClass]"
          :to="item.path"
        >
          {{ item.name }}
        </router-link>
        <router-link :to="{name: 'home'}"
                     class="">
          Home
        </router-link>

      </fwb-navbar-collapse>
    </template>
    <template #right-side>
      <div class="flex gap-2">
        <fwb-button>
          Login
        </fwb-button>
        <fwb-button>
          Register
        </fwb-button>
      </div>
    </template>
  </fwb-navbar>
</template>

<script setup>
import {FwbButton, FwbNavbar, FwbNavbarCollapse, FwbNavbarLogo,} from 'flowbite-vue'

import {activeNavbarClass, defaultNavbarClass, navbarMenu, useIsActive} from '@/configs/navbarConfig';

const isActive = useIsActive();
</script>
