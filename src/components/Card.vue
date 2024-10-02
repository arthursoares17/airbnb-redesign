<script setup>
  import { useLoadingStore } from '@/stores/loading'
  import { storeToRefs } from 'pinia'

  const loadingStore = useLoadingStore()
  const { isLoading } = storeToRefs(loadingStore)

  import CardSkeleton from './CardSkeleton'

  const props = defineProps({
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    price: {
      type: String
    },
    rating: {
      type: String
    },
    imagePath: {
      type: String,
      requided: true
    }
  })
</script>

<template>
  <CardSkeleton
    v-if="isLoading"
  />

  <div 
    v-else
    class="card"
  >
    <RouterLink to="#">
      <div class="card__image">
        <img 
          v-bind:src="props.imagePath" 
          width="100%"
          height="200px"
        />
      </div>

      <div class="card__content">
        <div class="card__top">
          <p class="card__title">
            {{ props.title }}
          </p>          
        </div>

        <div class="card__center">
          <p class="card__subtitle">
            {{ props.subtitle }}
          </p>
        </div>

        <div class="card__bottom">
          <p class="card__price">
            {{ props.price }} 
            <span>noite</span>
          </p>

          <span class="card__rating">
            <img 
              src="@/assets/images/icons/star.png"
            />

            {{ props.rating }}
          </span>
        </div>
      </div>

      <div class="card__favorite">
        <img 
          src="@/assets/images/icons/heart.png" 
        />
      </div>
    </RouterLink>
  </div>
</template>

<style>
  @import url('@/assets/css/card.css');
</style>