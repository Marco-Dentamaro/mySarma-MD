<script setup>
import Check from "./Check.vue";
</script>

<template>

<div class="bg-bgCard max-h-[620px] md:w-[420px] rounded-2xl py-6 px-14 text-center">
        <p class="text-2xl text-primaryCust font-bold">Piano GO!</p>
        <p class="text-xs">a partire da</p>
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

        <div class="flex flex-col items-center justify-between">
            <ul class="text-start ">
                <li class="flex items-center"> <Check/> <span class="mx-2">Utenti illimitati</span> </li>
                <li class="flex items-center my-3"> <Check/><span class="mx-2">Piattaforma MySarma</span></li>
                <li class="flex items-center"> <Check/><span class="mx-2">Gestione del contratto online</span></li>
                <li class="flex items-center my-3"> <Check/><span class="mx-2">MySarma Welfare Card (fino a 258€)</span></li>
                <li class="flex items-center"> <Check/><span class="mx-2">Importi personalizzabili online</span></li>
                <li class="flex items-center my-3"> <Check/><span class="mx-2">Sconti e Coupon</span></li>
            </ul>

            <button class="bg-white hover:bg-primary200 hover:transition-colors w-4/5 rounded-xl h-12 my-8 font-extrabold">Attiva Piano GO!</button>

            <div>
                <p class="text-slate-500">Vuoi maggiori informazioni sul piano?</p>
                <a href="" class="underline text-primaryCust font-bold">Scopri di più</a>
            </div>

        </div>
    </div>

</template>