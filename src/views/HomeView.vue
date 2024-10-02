<script setup>
  import Header from '@/components/Header'
  import Search from '@/components/Search'
  import Sidebar from '@/components/Sidebar'
  import Content from '@/components/Content'
  import Footer from '@/components/Footer'
</script>

<template>
  <main class="main">
    <Header/>
    <Search/>

    <div class="main__wrapper">
      <Sidebar/>
      <Content/>
    </div>

    <Footer/>
  </main>
</template>

<style>
  @import url('@/assets/css/home.css');
</style>