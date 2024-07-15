<script>

import BtnArticle from './BtnArticle.vue';  // Assicurati che il percorso sia corretto

export default {
  components: {
    BtnArticle
  },
  props: {
    imgSrc: {
      type: String,
      required: true
    },
    imgAlt: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>

<template>
    <div class="md:w-1/5 w-full lg:h-[340px] flex flex-col text-center justify-evenly items-center">
        <div class="flex flex-col justify-around h-[380px] my-4 ">

            <div class="h-[128px] flex justify-center">
                <img class="h-full" :src="imgSrc" :alt="imgAlt">
            </div>
            <div>
                <h4 class="font-bold text-greyCust-dark text-2xl md:text-lg">{{ title }}</h4>
                <h5 class="text-greyCust-dark text-lg px-8">{{ subtitle }}</h5>
            </div>
            <div class="flex justify-center">
              <BtnArticle />
            </div>
        </div>
    </div>
</template>

