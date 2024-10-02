<script setup>
  import { ref, onMounted, onUnmounted } from 'vue'
  import { useLoadingStore } from '@/stores/loading'
  import { storeToRefs } from 'pinia'

  import UserSkeleton from './UserSkeleton'
  
  const loadingStore = useLoadingStore()
  const { isLoading } = storeToRefs(loadingStore)

  const profile = ref(false)
  const buttonRef = ref(null)
  const profileRef = ref(null)

  function showProfile() {
    profile.value = !profile.value
  }

  function closeProfileOutside(event) {
    if (
      buttonRef.value && !buttonRef.value.contains(event.target) &&
      profileRef.value && !profileRef.value.contains(event.target)
    ) {
      profile.value = false
    }
  }

  onMounted(() => {
    document.addEventListener('click', closeProfileOutside)
  })

  onUnmounted(() => {
    document.removeEventListener('click', closeProfileOutside)
  })
</script>

<template>
  <UserSkeleton
    v-if="isLoading"
  />

  <div 
    v-else
    class="header__user"
  >
    <button 
      v-bind:onclick="showProfile"
      ref="buttonRef"
      class="header__button"
    >
      <div class="header__image">
        <img
          src="@/assets/images/user/user.png"
          width="40px"
          height="40px"
          style="border-radius: 50%;"
        />
      </div>

      <div 
        v-show="profile"
        ref="profileRef"
        class="header__profile"
      >
        <span class="header__link header__link--user">
          <i class="bi bi-patch-check-fill"></i>
          arthur@gmail.com
        </span>

        <div class="header__divider"></div>

        <RouterLink to="#">
          <span class="header__link">
            <i class="bi bi-person"></i>
            Perfil
          </span>
        </RouterLink>

        <RouterLink to="#">
          <span class="header__link">
            <i class="bi bi-gear"></i>
            Configurações
          </span>
        </RouterLink>

        <RouterLink to="#">
          <span class="header__link">
            <i class="bi bi-globe"></i>
            Idioma
          </span>
        </RouterLink>

        <RouterLink to="#">
          <span class="header__link">
            <i class="bi bi-info-circle"></i>
            Ajuda
          </span>
        </RouterLink>

        <div class="header__divider"></div>

        <RouterLink to="#">
          <span class="header__link header__link--bottom header__link--logout">
            <i class="bi bi-arrow-bar-right"></i>
            Sair
          </span>
        </RouterLink>
      </div>
    </button>
  </div>
</template>

<style>
  @import url('@/assets/css/user.css');
</style>