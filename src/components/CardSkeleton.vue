<template>
  <div class="skeleton__card">
    <div class="skeleton__card-image"></div>

    <div class="skeleton__card-content">
      <div class="card__top">
        <div class="skeleton__card-title"></div>          
      </div>

      <div class="skeleton__card-center">
        <div class="skeleton__card-subtitle"></div>
      </div>

      <div class="skeleton__card-bottom">
        <div class="skeleton__card-price"></div>

        <div class="skeleton__card-rating"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .skeleton__card {
    position: relative;
    height: 429px;
  }

  .skeleton__card-image {
    background: var(--skeleton-background-1);
    border-radius: 20px;
    height: 344px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  .skeleton__card-content {
    padding-top: 10px;
  }

  .skeleton__card-title {
    background: var(--skeleton-background-1);
    border-radius: 4px;
    width: 330px;
    height: 17px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  .skeleton__card-center {
    margin: 5px 0px;
  }

  .skeleton__card-subtitle {
    background: var(--skeleton-background-1);
    border-radius: 4px;
    width: 330px;
    height: 19px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  .skeleton__card-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5px;
  }

  .skeleton__card-price {
    background: var(--skeleton-background-1);
    border-radius: 4px;
    width: 86px;
    height: 19px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  .skeleton__card-rating {
    background: var(--skeleton-background-1);
    border-radius: 4px;
    width: 85px;
    height: 17px;
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