<script setup>
import HandPhone from "./atoms/HandPhone.vue";

</script>

<template>
    

    <div class="flex justify-center mt-40 pt-20 md:mt-0 md:pt-0 mx-6">
        <div class="container mt-40 md:mt-0 lg:mx-40">
            <div class="flex flex-col md:flex-row w-full justify-center items-center h-[800px] ">
                <!-- col sx -->
                <div class="w-full md:w-1/2 md:h-1/2 flex flex-col justify-around">
                    <h2 class="lg:text-7xl text-5xl text-primary700 font-bold mb-20 md:m-0">App</h2>
                    <div class="md:hidden flex justify-center">
                        <HandPhone />
                    </div>
                    <p class="text-2xl text-greyCust">Con l’app MySarma gestirai il tuo credito welfare e potrai accedere al catalogo dei Benefit e Servizi acquistabili.</p>
                    <div class="flex mt-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                            <path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
                        </svg>
                        <p class="uppercase ms-5">Coming soon</p>
                    </div>
                    
                </div>
                <!-- col dx -->
                <div class="w-full hidden md:w-1/2 md:flex md:justify-center">
                    <HandPhone />
                </div>
            </div>
            
        </div>
        
    </div>
    
    
</template>