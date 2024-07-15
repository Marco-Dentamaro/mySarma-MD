<script>
import BtnArticle from './atoms/BtnArticle.vue';  // Assicurati di importare anche questo componente
import WelfareCard from './atoms/WelfareCard.vue';

export default {
  components: {
    WelfareCard,
    BtnArticle
  }
}
</script>

<template>

        <div class="w-full min-h-[800px] flex flex-col justify-around mt-20 md:mt-0">
            <div class="flex flex-col text-center">
                <h2 class="md:text-7xl text-5xl  font-bold text-primaryCust-dark leading-normal">Welfare aziendale?</h2>
                <h3 class="text-2xl py-4 text-greyCust ">Te lo diciamo noi se non lo sai</h3>
            </div>
    
            <!-- contenitore articoli -->
            <div class="flex w-full md:justify-evenly md:flex-row flex-col items-center ">
    
                <WelfareCard
                    imgSrc="src/media/img1.png"
                    imgAlt="img1"
                    title="Cos’è il Welfare Aziendale?"
                    subtitle="Tutti ne parlano ma pochi conoscono il suo potenziale"
                />

                <WelfareCard
                    imgSrc="src/media/img2.png"
                    imgAlt="img2"
                    title="Come posso attrarre?"
                    subtitle="Fidelizza e attrai nuovi talenti con un piano welfare mirato"
                />
    
                <WelfareCard
                    imgSrc="src/media/img3.png"
                    imgAlt="img3"
                    title="Normative e vantaggi fiscali"
                    subtitle="Risparmiare è facile grazie al tuo nuovo piano welfare"
                />
    
                <WelfareCard
                    imgSrc="src/media/img4.png"
                    imgAlt="img4"
                    title="Storie attrattive"
                    subtitle="Ascolta le testimonianze di chi ha ha migliorato il proprio stile di vita"
                />
                
            </div>
    
        </div>

</template>