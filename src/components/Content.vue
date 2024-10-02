<script setup>
  import { reactive } from 'vue'
  import Card from './Card'

  const mostPopular = reactive([
    {
      id: 1,
      title: 'Domo geodésico com vista para as estrelas',
      subtitle: 'Casa de cúpula em Salesópolis, Brasil',
      rating: '4,98 (123)',
      price: 'R$723',
      src: 'src/assets/images/image-1.webp'
    },
    {
      id: 2,
      title: 'Chalé e Restaurante Al Mar',
      subtitle: 'Cabana em Paraty, Brasil',
      rating: '4,96 (26)',
      price: 'R$639',
      src: 'src/assets/images/image-2.webp'
    },
    {
      id: 3,
      title: 'Kiss Dome (1º Domo Geodésico de Cam...',
      subtitle: 'Casa de cúpula em Campos do Jordão...',
      rating: '5,0 (113)',
      price: 'R$685',
      src: 'src/assets/images/image-3.webp'
    },
    {
      id: 4,
      title: 'Villa Alpes - Cabana A-Frame Zurique',
      subtitle: 'Chalé em Campos do Jordão, Brasil',
      rating: '5,0 (65)',
      price: 'R$868',
      src: 'src/assets/images/image-4.webp'
    },
    {
      id: 5,
      title: 'Loft São José_ Cabana boutique',
      subtitle: 'Microcasa em Ibiúna, Brasil',
      rating: '4.98 (81)',
      price: 'R$1.480',
      src: 'src/assets/images/image-5.webp'
    },
  ])

  const amazingPlaces = reactive([
    {
      id: 1,
      title: 'Cabana Moderna em Reserva - Jaguatirica',
      subtitle: 'Cabana em Ubatuba, Brasil',
      rating: '4,94 (148)',
      price: 'R$1.200',
      src: 'src/assets/images/image-6.webp'
    },
    {
      id: 2,
      title: 'Chalé Encanto Cerrado',
      subtitle: 'chalé em Brasil',
      rating: '4,97 (178)',
      price: 'R$595',
      src: 'src/assets/images/image-7.webp'
    },
    {
      id: 3,
      title: 'Mini Rooftop - Celebre Momentos Especi...',
      subtitle: 'Apartamento em São Paulo, Brasil',
      rating: '4,93 (122)',
      price: 'R$331',
      src: 'src/assets/images/image-8.webp'
    },
    {
      id: 4,
      title: 'Chalé Europeu com Lareira | Cachoeiras...',
      subtitle: 'Chalé em Ilhabela, Brasil',
      rating: '4,99 (162)',
      price: 'R$594',
      src: 'src/assets/images/image-9.webp'
    },
    {
      id: 5,
      title: 'Chalé1 Vintage Serra Cantareira',
      subtitle: 'Casa de hóspedes em Mairiporã, Brasil',
      rating: '4.94 (66)',
      price: 'R$232',
      src: 'src/assets/images/image-10.webp'
    },
  ])
</script>

<template>
  <div class="content">
    <h1 class="content__title">
      Mais procurados nos últimos dias
    </h1>

    <div class="content__grid">
      <Card 
        v-for="item in mostPopular" :key="item.id"
        v-bind:title="item.title"
        v-bind:subtitle="item.subtitle"
        v-bind:rating="item.rating"
        v-bind:price="item.price"
        v-bind:imagePath="item.src"
      />
    </div>

    <h1 class="content__title">
      Lugares incríveis para conhecer
    </h1>

    <div class="content__grid">
      <Card
        v-for="item in amazingPlaces" :key="item.id"
        v-bind:title="item.title"
        v-bind:subtitle="item.subtitle"
        v-bind:rating="item.rating"
        v-bind:price="item.price"
        v-bind:imagePath="item.src"
      />
    </div>
  </div>
</template>

<style>
  @import url('@/assets/css/content.css');
</style>