<template>
  <div class="skeleton__search">
    <div class="skeleton__search-bar">
      <form>
        <fieldset class="skeleton__location">
          <div class="skeleton__location-label"></div>
          <div class="skeleton__location-input"></div>
        </fieldset>

        <div class="skeleton__divider"></div>

        <fieldset class="skeleton__date">
          <div class="skeleton__date-label"></div>
          <div class="skeleton__date-input"></div>
        </fieldset>

        <div class="skeleton__divider"></div>

        <fieldset class="skeleton__date">
          <div class="skeleton__date-label"></div>
          <div class="skeleton__date-input"></div>
        </fieldset>

        <div class="skeleton__divider"></div>

        <fieldset class="skeleton__guest">
          <div class="skeleton__guest-label"></div>
          <div class="skeleton__guest-input"></div>
        </fieldset>

        <button class="skeleton__submit"></button>
      </form>
    </div>
  </div>
</template>

<style scoped>
  .skeleton__search {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-shade-1);
    border-bottom: 1px solid var(--border-color);
    padding-block: 15px;
  }

  .skeleton__search-bar {
    border-radius: 32px;
    border: 1px solid var(--color-neutral-3);
    box-shadow: var(--box-shadow);
    padding: 8px 10px 8px 30px;
  }

  .skeleton__search-bar form {
    display: flex;
    align-items: center;
  }

  .skeleton__location-label {
    background: var(--skeleton-background-1);
    border-radius: 4px;
    width: 50px;
    height: 15px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  .skeleton__location-input {
    background: var(--skeleton-background-1);
    border-radius: 4px;
    width: 199px;
    height: 17px;
    margin-top: 3px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  .skeleton__date-label {
    background: var(--skeleton-background-1);
    border-radius: 4px;
    width: 50px;
    height: 15px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  .skeleton__date-input {
    background: var(--skeleton-background-1);
    border-radius: 4px;
    width: 140px;
    height: 17px;
    margin-top: 3px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  .skeleton__guest-label {
    background: var(--skeleton-background-1);
    border-radius: 4px;
    width: 50px;
    height: 15px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  .skeleton__guest-input {
    background: var(--skeleton-background-1);
    border-radius: 4px;
    width: 170px;
    height: 17px;
    margin-top: 3px;
    animation: skeleton-loading 1.5s infinite linear;
  }

  .skeleton__divider {
    background: var(--skeleton-background-1);
    width: 2px;
    height: 25px;
    margin: 0px 15px;
  }

  .skeleton__submit {
    background: var(--skeleton-background-1);
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    margin-left: 10px;
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