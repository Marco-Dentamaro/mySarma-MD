<template>
    <div class="mt-20 bg-bgMail h-[400px] bg-cover w-full flex flex-col md:flex-row items-center justify-around">
        <div class="md:w-1/5 w-full ms-10">
            <h3 class="text-3xl text-white font-bold my-2">Resta aggiornato</h3>
            <p class="text-lg text-primary100">Iscriviti alla newsletter per ricevere aggiornamenti  sulle nuove offerte e partner MySarma</p>
        </div>

        <div class="md:w-1/2 px-4 w-full">
            <div class="flex flex-col">

                <p class="text-lg text-primary100 font-bold mb-3">Il tuo indirizzo mail</p>

                <div class="md:w-5/6 flex lg:flex-row w-full flex-col items-end md:justify-between">
                    <input type="text" placeholder="@" class="input input-bordered rounded-xl lg:w-4/6 w-full  h-12 px-3 text-2xl mb-8 md:mb-0">
                    <button class="text-lg text-primaryCust-dark bg-white hover:transition-colors hover:bg-secondary300 font-bold w-[110px] h-12 rounded-xl lg:me-6">
                    Invia</button>  
                </div>
            </div>
        </div>

    </div>
</template>