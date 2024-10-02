import { defineStore } from 'pinia'
import { onMounted, ref } from 'vue'

export const useLoadingStore = defineStore('loading', () => {
  const isLoading = ref(true)

  onMounted(() => {
    setTimeout(() => {
      isLoading.value = false
    }, 2000)
  })

  return {  isLoading }
})