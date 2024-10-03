<script setup>
  import { onMounted, onUnmounted, ref } from 'vue'
  import User from '@/components/User'

  const windowWidth = ref(null)
  const isHidden = ref(false)
  const mobileNav = ref(false)

  function mobileWidth() {
    windowWidth.value = window.innerWidth
    if(windowWidth.value <= 768) {
      isHidden.value = true
      mobileNav.value = true
      return
    }
  }

  onMounted(() => {
    window.addEventListener('resize', mobileWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', mobileWidth)
  })
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <img 
        src="@/assets/images/logo/logo.png" 
        alt="Airbnb logo"
      />
    </div>

    <nav 
      v-bind:class="{ 'header__navigation--hidden': isHidden }"
      class="header__navigation"
    >
      <ul class="header__list">
        <span class="header__item header__item--active">
          Acomodações
        </span>

        <span class="header__item">
          Experiências
        </span>

        <span class="header__item">
          Experiências Online
        </span>
      </ul>
    </nav>

    <User/>

    <nav 
      v-if="mobileNav"
      class="navigation__mobile"
    >
      <ul class="navigation__list">
        <li class="navigation__item navigation__item--active">
          <i class="bi bi-house-door"></i>
          Início
        </li>

        <li class="navigation__item">
          <i class="bi bi-search"></i>
          Explorar
        </li>

        <li class="navigation__item">
          <i class="bi bi-heart"></i>
          Favoritos
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
  @import url('@/assets/css/header.css');
</style>