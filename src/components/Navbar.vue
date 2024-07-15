<script setup>
import NavbarLogo from './atoms/NavbarLogo.vue';
import AccediLogo from './atoms/AccediLogo.vue';
import Hamburger from './atoms/Hamburger.vue';

</script>

<template>
    <nav class=" navbar w-full flex md:px-24 lg:h-[72px] h-[69px] fixed top-0 bg-white">

            <div class="flex justify-between items-center w-full"> 

                <div class="md:w-1/6 flex mx-5 items-center ">
                    <NavbarLogo />
                </div>

                <div class="md:w-3/6">
                    <ul class="lg:flex md:justify-between text-blueNav font-semibold  hidden ">
                        <li>Welfare aziendale</li>
                        <li>Chi siamo</li>
                        <li>I nostri servizi</li>
                        <li>Soluzioni welfare</li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div>
                    
                    <button class="text-xs font-semibold lg:flex hidden items-center justify-center bg-greenCustom hover:bg-greenCustom500 hover:transition-colors md:w-[190px] h-10 rounded-xl  "><svg width="13" height="16" viewBox="0 0 15 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.17456 6.17189V3.36781C2.17456 3.14145 2.39495 2.96036 2.66282 2.96036H13.2248V15.0425H2.66621C2.39495 15.0425 2.17795 14.8586 2.17795 14.6351V11.831" stroke="#154C41" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M13.9181 15.6078L8.50338 16.9864C8.22978 17.0568 7.96521 16.8454 7.96521 16.5575V1.44252C7.96521 1.15456 8.22978 0.943183 8.50338 1.01364L13.9181 2.39218C14.0685 2.43201 14.1767 2.56986 14.1767 2.72916V15.2739C14.1767 15.4332 14.0715 15.5711 13.9181 15.6109V15.6078Z" fill="#154C41" stroke="#154C41" stroke-miterlimit="10"/>
                    <path d="M5.89928 9.00296L3.86987 6.93515" stroke="#154C41" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M3.86987 11.0677L5.89928 9.00293" stroke="#154C41" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M1.00195 9.00293H5.60495" stroke="#154C41" stroke-miterlimit="10" stroke-linecap="round"/>
                    </svg>

                    <span class="mx-2">Accedi alla piattaforma</span>  
                    </button>

                    <div class="flex lg:hidden me-10 md:me-0">
                        <div class="mx-10">
                            <AccediLogo />
                        </div>
                        <div>
                            <Hamburger />
                        </div>
                    <div>

                        </div>
                    </div>

                </div>

            </div>



            
    </nav> 


</template>