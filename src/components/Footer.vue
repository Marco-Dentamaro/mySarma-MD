<script setup>
import FooterLogo from './atoms/FooterLogo.vue';
</script>

<template>
    <div  class="bg-black600 md:h-[250px] lg:flex w-full items-center py-14 ">
        
        <div class="flex justify-evenly h-4/5 w-3/4 ">
            
            <div class="flex bg-yellow-600 w-full md:flex-row flex-wrap justify-evenly">
                
                
                <div class="md:w-[176px] h-full flex mx-24 ">
                    <div class="flex flex-col">
                        <FooterLogo />
                        
                        <div class="flex w-full my-5">
                            <div class="w-1/3 border border-green-600"></div>
                            <div class="w-1/3 border border-white"></div>
                            <div class="w-1/3 border border-red-800"></div>
                        </div>
                        
                        <div>
                            <p class="text-bgCard text-sm text-justify">Il welfare aziendale tutto italiano a portata di PMI</p>
                        </div>
                        
                    </div>
                    
                </div>
                
                <div class="lg:w-1/5 bg-red-300 ">
                    <div class="flex flex-col">
                        <p class="text-white font-bold text-lg">Chi siamo</p>
                        <p class="text-greyCust-dark">Vision & Mission</p>
                        <p class="text-greyCust-dark">Il gruppo Omninext</p>
                        <p class="text-greyCust-dark">Contattaci</p>
                    </div>
                </div>  
                
                <div class="lg:w-1/5 ">
                    <div class="flex flex-col">
                        <p class="text-white font-bold text-lg">Soluzioni welfare</p>
                        <p class="text-greyCust-dark">Flexible benefit</p>
                        <p class="text-greyCust-dark">Premio di risultato</p>
                        <p class="text-greyCust-dark">Performance <br> Management</p>
                    </div>
                </div>
                
                <div class="lg:w-1/5">
                    <div class="flex flex-col">
                        <p class="text-white font-bold text-lg">Seguici su</p>
                        <p class="text-greyCust-dark flex items-center"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0C3.58167 0 0 3.58167 0 8C0 12.4183 3.58167 16 8 16C12.4183 16 16 12.4183 16 8C16 3.58167 12.4183 0 8 0ZM6.04167 11.3158H4.42167V6.1025H6.04167V11.3158ZM5.22167 5.4625C4.71 5.4625 4.37917 5.1 4.37917 4.65167C4.37917 4.19417 4.72 3.8425 5.2425 3.8425C5.765 3.8425 6.085 4.19417 6.095 4.65167C6.095 5.1 5.765 5.4625 5.22167 5.4625ZM11.9583 11.3158H10.3383V8.42667C10.3383 7.75417 10.1033 7.2975 9.5175 7.2975C9.07 7.2975 8.80417 7.60667 8.68667 7.90417C8.64333 8.01 8.6325 8.16 8.6325 8.30917V11.315H7.01167V7.765C7.01167 7.11417 6.99083 6.57 6.96917 6.10167H8.37667L8.45083 6.82583H8.48333C8.69667 6.48583 9.21917 5.98417 10.0933 5.98417C11.1592 5.98417 11.9583 6.69833 11.9583 8.23333V11.3158Z" fill="#898989"/>
                        </svg>
                        <span class="ms-2">Linkedin</span></p>
                    </div>
                </div>
            </div>
            
        </div>
        
        <div class="border-l border-greyCust h-4/5 flex flex-col justify-between ps-10">
            <div class="">
                <p class="font-bold text-lg text-secondary300">Piano GO!</p>
                <p class="font-bold text-lg text-secondary300">Piano PRO</p>
            </div>
            <div>
                <p class="font-bold text-lg text-greyCust-dark">Diventa partner</p>
            </div>
        </div>
        
        
        
    </div>
    <div class="w-full  md:h-[72px] bg-black600">
        <div class="border-t border-t-greyCust-dark w-5/6 md:ms-28">
            <div class="flex justify-between">
                <div>
                    <p class="text-greyCust-dark text-sm">Copyright © MySarma srl - Tutti i diritti riservati</p>
                </div>
                
                <div>
                    <p class="text-greyCust-dark font-bold text-sm">Privacy e Cookie Policy</p> 
                </div>
                
            </div>
        </div>
    </div>
    
</template>