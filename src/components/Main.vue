<script setup>
import HandPhone from "./atoms/HandPhone.vue";

</script>

<template>

<div class="container mt-20">


    <div class="w-full h-screen md:flex md:my-20 xl:my-0 flex">
        <!-- col sx -->
        <div class="flex  w-1/2 h-full items-center">
            <div class="flex flex-col justify-around w-full md:h-3/4 xl:h-1/2 lg:px-32">

                <h2 class="lg:text-7xl text-5xl text-primary700 font-bold">App</h2>
                <p class="text-2xl text-greyCust">Con l’app MySarma gestirai il tuo credito welfare e potrai accedere al catalogo dei Benefit e Servizi acquistabili.</p>
                
                <div class="flex">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                    <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                    </svg>
                    <p class="uppercase ms-5">Coming soon</p>
                </div>
            </div>
            
        </div>
        <!-- col dx -->
        <div class="w-1/2 flex items-center justify-center">
             <HandPhone/>
        </div>
        
    </div>
</div>
</template>