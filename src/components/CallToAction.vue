<script setup>

import CardGo from "./atoms/CardGo.vue";
import CardPro from "./atoms/CardPro.vue";


</script>

<template>

<div class="w-full flex justify-center mb-24">
    <div class="min-h-screen w-2/3 flex flex-col justify-center">

        <div class="h-1/3 flex w-full items-center justify-center md:my-24">

            <div class="text-center">
                <h2 class="text-5xl text-primaryCust-dark font-bold leading-normal">Attiva il tuo piano</h2>
                <h2 class="text-5xl text-primaryCust-dark font-bold">Go oppure Pro</h2>
                <p class="text-greyCust text-2xl my-6">Scegli se attiavre subito il Piano Go oppure richiedere <br> 
                    un preventivo per il Piano Pro al nostro consulente </p>
            </div>
        </div>

        <!-- sezione card -->
        <div class="flex w-full justify-center">

            <div class="w-1/2 flex justify-center">
               <CardGo />
            </div>

            <div class="w-1/2 flex justify-center">
               <CardPro />
            </div>
        </div>
    </div>
</div>


</template>