<script setup>

import CardGo from "./atoms/CardGo.vue";
import CardPro from "./atoms/CardPro.vue";


</script>

<template>

<div class="w-full flex lg:flex-row flex-col lg:justify-center md:mb-24 ">
    <div class="min-h-screen lg:w-2/3 w-full flex flex-col justify-center mt-20">

        <div class="h-1/3 flex w-full items-center justify-center md:my-24">

            <div class="text-center">
                <h2 class="md:text-5xl text-[30px]  text-primaryCust-dark font-bold leading-normal">Attiva il tuo piano</h2>
                <h2 class="md:text-5xl text-[30px] text-primaryCust-dark font-bold">Go oppure Pro</h2>
                <p class="text-greyCust text-2xl m-6">Scegli se attiavre subito il Piano Go oppure richiedere <br> 
                    un preventivo per il Piano Pro al nostro consulente </p>
            </div>
        </div>

        <!-- sezione card -->
        <div class="flex lg:flex-row flex-col items-center w-full h-full">

            <div class="md:w-1/2 w-full flex justify-center ">
               <CardGo />
            </div>

            <div class="md:w-1/2 w-full flex justify-center lg:m-0 mt-20">
               <CardPro />
            </div>
        </div>
    </div>
</div>


</template>