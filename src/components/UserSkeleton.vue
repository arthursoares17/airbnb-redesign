<template>
  <div class="user__skeleton"></div>
</template>

<style scoped>
  .user__skeleton{
    background: var(--skeleton-background-1);
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  @keyframes skeleton-loading {
    0% {
      background-color: var(--skeleton-background-1);
    }
    50% {
      background-color: var(--skeleton-background-2);
    }
    100% {
      background-color: var(--skeleton-background-1);
    }
  }
</style>