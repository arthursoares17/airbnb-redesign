<script setup>
  import User from '@/components/User'
</script>

<template>
  <header class="header">
    <div class="header__logo">
      <img 
        src="@/assets/images/logo/logo.png" 
        alt="Airbnb logo"
      />
    </div>

    <nav class="header__navigation">
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
  </header>
</template>

<style>
  @import url('@/assets/css/header.css');
</style>