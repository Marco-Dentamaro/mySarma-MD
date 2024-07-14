<script setup>
import BtnArticle from "./atoms/BtnArticle.vue";
</script>


<template>
    <div class="w-full h-screen flex flex-col justify-around">
        <div class="flex flex-col text-center">
            <h2 class="text-7xl font-bold text-primaryCust-dark leading-normal">Welfare aziendale?</h2>
            <h3 class="text-2xl text-greyCust ">Te lo diciamo noi se non lo sai</h3>
        </div>

        <!-- contenitore articoli -->
        <div class="flex w-full justify-evenly ">

            <div class="w-1/5 h-[300px] flex flex-col text-center justify-evenly items-center ">
                <img src="../media/img1.png" alt="img1">
                <div>
                    <h4 class="font-bold text-greyCust-dark text-lg">Cos’è il Welfare Aziendale?</h4>
                    <h5 class="text-greyCust-dark text-lg">Tutti ne parlano ma pochi conoscono il suo potenziale</h5>
                </div>
                <BtnArticle/>
            </div>

            <div class="w-1/5 h-[300px] flex flex-col text-center justify-evenly items-center  ">
                <img src="../media/img2.png" alt="img2">
                <div>
                    <h4 class="font-bold text-greyCust-dark text-lg">Come posso attrarre? </h4>
                    <h5 class="text-greyCust-dark text-lg">Fidelizza e attrai nuovi talenti con un piano welfare mirato</h5>
                </div>
                <BtnArticle/>
            </div>

            <div class="w-1/5 h-[300px] flex flex-col text-center justify-evenly items-center  ">
                <img src="../media/img3.png" alt="img3">
                <div>
                    <h4 class="font-bold text-greyCust-dark text-lg">Normative e vantaggi fiscali </h4>
                    <h5 class="text-greyCust-dark text-lg">Risparmiare è facile grazie al tuo nuovo piano welfare</h5>
                </div>
                <BtnArticle/>
            </div>

            <div class="w-1/5 h-[300px] flex flex-col text-center justify-evenly items-center  ">
                <img src="../media/img4.png" alt="img4">
                <div>
                    <h4 class="font-bold text-greyCust-dark text-lg">Storie attrattive</h4>
                    <h5 class="text-greyCust-dark text-lg">Ascolta le testimonianze di chi ha ha migliorato il proprio stile di vita</h5>
                </div>
                <BtnArticle/>
            </div>
        </div>

    </div>
</template>