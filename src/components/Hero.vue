<script setup>

import CardGo from "./atoms/CardGo.vue";

</script>

<template>

    <div class="w-full h-[865px] lg:h-[1024px] bg-bgHero bg-cover bg-no-repeat md:bg-bottom bg-top mt-[70px]">
        <div class="flex flex-col lg:flex-row h-full items-center ">
            <!-- col sx -->
            <div class="lg:w-1/2 w-full h-full lg:h-1/2 flex flex-col">
                <h1 class="lg:text-7xl text-5xl text-white font-bold lg:ps-4 my-12 mx-4 leading-normal">Il Welfare aziendale <br> a portata di PMI</h1>
                <h2 class="text-2xl text-white lg:ps-4 mx-4">MySarma nasce con l’obiettivo di supportare le aziende a rispondere concretamente ai bisogni di welfare dei propri dipendenti e collaboratori.</h2>
                <h4 class="lg:hidden text-white mx-4 my-12">Da oggi puoi attivare il tuo piano welfare direttamente online ed in pochi semplici passaggi grazie al <span class="font-bold underline">Piano GO!</span> </h4>
            </div>
            <!-- col dx -->
            <div class="lg:w-1/2 w-full h-full flex flex-col items-center justify-center " >
                <div>
                    <CardGo/>
                </div>
                <div class="text-center text-white md:my-5 hidden lg:flex lg:flex-col">
                    <p>Cerchi un piano su misura per la tua azienda?</p>
                    <p class="underline font-bold">Scopri il piano PRO</p>
                </div>
            </div>

        </div>
    </div>

</template>