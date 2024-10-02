<script setup>
  import { useLoadingStore } from '@/stores/loading'
  import { storeToRefs } from 'pinia'
  import { onMounted, onUnmounted, ref } from 'vue'

  import SearchSkeleton from './SearchSkeleton'

  const loadingStore = useLoadingStore()
  const { isLoading } = storeToRefs(loadingStore)

  const isSticky = ref(false)

  function handleScroll() {
    const scrollPosition = window.scrollY
    const stickyPosition = 10

    isSticky.value = scrollPosition > stickyPosition
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })
</script>

<template>
  <SearchSkeleton
    v-if="isLoading"
  />

  <div 
    v-else
    v-bind:class="{ sticky: isSticky }"
    class="search"
  >
    <div class="search__bar">
      <form>
        <fieldset class="search__location">
          <label for="location">
            Onde
          </label>

          <input 
            type="text" 
            name="location"
            placeholder="Buscar destinos"
          />
        </fieldset>

        <div class="search__divider"></div>

        <fieldset class="search__date">
          <label for="checkin">
            Check-in
          </label>

          <input 
            type="text" 
            name="checkin"
            placeholder="Insira as datas"
          />
        </fieldset>

        <div class="search__divider"></div>

        <fieldset class="search__date">
          <label for="checkout">
            Checkout
          </label>

          <input 
            type="text" 
            name="checkout" 
            placeholder="Insira as datas"
          />
        </fieldset>

        <div class="search__divider"></div>

        <fieldset class="search__guest">
          <label for="guests">
            Quem
          </label>

          <input 
            type="text"
            name="guests" 
            placeholder="Hóspedes"
          />
        </fieldset>

        <button 
          type="submit" 
          class="search__submit"
        >
          <i class="bi bi-search"></i>
        </button>
      </form>
    </div>
  </div>
</template>

<style>
  @import url('@/assets/css/search.css');
</style>