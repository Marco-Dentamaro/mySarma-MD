<script setup>
import Check from "./Check.vue";
</script>

<template>

<div class="bg-bgCard max-h-[620px] md:w-[420px] w-[350px] rounded-2xl py-6 px-8  text-center">
        <p class="text-2xl text-primaryCust font-bold">Piano GO!</p>
        <p class="text-xs my-2">a partire da</p>
        <div class="flex justify-center">
            <p class="text-6xl font-extrabold">€12</p>
            <div class="flex flex-col items-center">
                <p class="text-3xl font-bold">,50</p>
                <p class="text-xs">+ IVA</p>
            </div>
        </div>
        <div class="flex justify-center items-center text-center">
            <p class="me-3 text-primaryCust">all'anno / per utente</p>
            <svg width="13" height="14" viewBox="0 0 13 14" fill="text-primaryCust" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.85 3.78124H7.15V5.08124H5.85V3.78124ZM5.85 6.38124H7.15V10.2812H5.85V6.38124ZM6.5 0.531242C2.912 0.531242 0 3.44324 0 7.03124C0 10.6192 2.912 13.5312 6.5 13.5312C10.088 13.5312 13 10.6192 13 7.03124C13 3.44324 10.088 0.531242 6.5 0.531242ZM6.5 12.2312C3.6335 12.2312 1.3 9.89774 1.3 7.03124C1.3 4.16474 3.6335 1.83124 6.5 1.83124C9.3665 1.83124 11.7 4.16474 11.7 7.03124C11.7 9.89774 9.3665 12.2312 6.5 12.2312Z" fill="#426BD1"/>
            </svg>

        </div>

        <div class=" border-black border-b-2 my-5"></div>

        <div class="md:hidden flex justify-center" >
            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.25151 4.23725e-07L-3.05553e-07 1.21337L7 8L14 1.21337L12.7485 -6.41861e-08L7 5.57326L1.25151 4.23725e-07Z" fill="#A1B5E8"/>
            </svg>

        </div>

        <div>
            <button class="bg-white hover:bg-primary200 hover:transition-colors w-[243px] rounded-xl h-12 my-8 font-extrabold md:hidden">Attiva Piano GO!</button>
        </div>

        <div class="md:hidden">
            <p class="text-black200">Vuoi maggiori informazioni sul piano?</p>
            <p class="text-primaryCust underline font-bold">Scopri di più</p>
        </div>

        <div class="hidden md:flex flex-col items-center justify-between" >
            <ul class="text-start">
                
                <li class="flex items-center"> <Check/> <span class="mx-2">Utenti illimitati</span> </li>
                <li class="flex items-center my-3"> <Check/><span class="mx-2">Piattaforma MySarma</span></li>
                <li class="flex items-center"> <Check/><span class="mx-2">Gestione del contratto online</span></li>
                <li class="flex items-center my-3"> <Check/><span class="mx-2">MySarma Welfare Card (fino a 258€)</span></li>
                <li class="flex items-center"> <Check/><span class="mx-2">Importi personalizzabili online</span></li>
                <li class="flex items-center my-3"> <Check/><span class="mx-2">Sconti e Coupon</span></li>
            </ul>

            <button class="bg-white hover:bg-primary200 hover:transition-colors w-[243px] rounded-xl h-12 my-8 font-extrabold">Attiva Piano GO!</button>

            <div class="hidden md:flex md:flex-col">
                <p class="text-black200 ">Vuoi maggiori informazioni sul piano?</p>
                <a href="" class="underline text-primaryCust font-bold">Scopri di più</a>
            </div>

        </div>
    </div>

</template>