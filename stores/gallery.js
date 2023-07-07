import { defineStore } from 'pinia'

export const useGalleryStore = defineStore('gallery', {
  state: () => ({
    counter: 0,
  }),
  getters: {

  },
  actions: {
    increment() {
      this.counter++;
      if (this.counter >= 3) this.counter = 0;
    },
    decrement() {
      this.counter--;
      if (this.counter <= -1) this.counter = 2;
    }
  }
})
