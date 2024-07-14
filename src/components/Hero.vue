<script setup>
import Check from "./atoms/Check.vue";
import CardGo from "./atoms/CardGo.vue";

</script>

<template>
    <div class="xl:h-screen w-full">

        <div class=" md:h-screen bg-bgHero bg-cover bg-no-repeat bg-bottom">
            <div class="h-full flex ps-14 justify-evenly">
                <!-- col sx -->
                <div class="w-1/2 h-full  flex flex-col justify-center">
                    <h1 class="text-7xl text-white font-bold mb-16 ps-4">Il Welfare aziendale <br> a portata di PMI</h1>
                    <h2 class="text-2xl text-white ps-4">MySarma nasce con l’obiettivo di supportare le aziende a rispondere concretamente ai bisogni di welfare dei propri dipendenti e collaboratori.</h2>
                </div>
    
                <!-- col dx -->
                <div class="w-1/2 flex flex-col items-center justify-center ">

                    <CardGo />
                    
                    <div class="text-center text-white md:my-5">
                        <p>Cerchi un piano su misura per la tua azienda?</p>
                        <p class="underline font-bold">Scopri il piano PRO</p>
                    </div>
                </div>
            </div>

        </div>
    </div>



</template>