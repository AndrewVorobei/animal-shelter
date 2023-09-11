<script setup>
const props = defineProps({
    pet: {
        type: Object
    }
});
</script>

<template>
    <div class="modal_wrapper">
        <div class="modal_block">
            <slot></slot>
            <div class="pet-modal">
                <img :src="pet.img" alt="">
                <div class="modal_content">
                    <h1 class="pet_name">
                        {{ pet.name }}
                    </h1>
                    <h2 class="pet_breed">
                        {{ pet.breed }}
                    </h2>
                    <p class="pet_description">
                        {{ pet.description }}
                    </p>
                    <ul class="pet_characteristic">
                        <li class="">
                            <span>
                                Age:
                            </span>
                            2 months
                        </li>
                        <li class="">
                            <span>
                                Inoculations:
                            </span>
                            none
                        </li>
                        <li class="">
                            <span>
                                Diseases:
                            </span>
                            none
                        </li>
                        <li class="">
                            <span>
                                Parasites:
                            </span>
                            none
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modal_wrapper {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(41, 41, 41, 0.60);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .modal_block {
        max-width: 952px;
        max-height: 552px;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;

        .pet-modal {
            max-width: 900px;
            max-height: 500px;
            height: 100%;
            width: 100%;
            display: flex;
            gap: 30px;
            border-radius: 9px;
            background: $color-light-s;

            .modal_content {
                display: flex;
                flex-direction: column;
                font-family: $georgia;
                color: #000;
                font-weight: 400;

                .pet_name {
                    margin-top: 50px;
                    font-size: 35px;
                    line-height: 130%;
                    letter-spacing: 2.1px;
                }

                .pet_breed {
                    margin-top: 10px;
                    font-size: 20px;
                    line-height: 115%;
                    letter-spacing: 1.2px;
                }

                .pet_description {
                    margin-top: 40px;
                    max-width: 350px;
                    font-size: 15px;
                    line-height: 110%;
                    letter-spacing: 0.9px;
                }

                .pet_characteristic {
                    display: flex;
                    flex-direction: column;
                    gap: 5px;
                    padding: 0;
                    margin: 0;
                    margin-top: 20px;

                    li {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 110%;
                        letter-spacing: 0.9px;

                        &::before {
                            display: flex;
                            align-self: center;
                            content: url('@/assets/img/pets-imgs/dot.svg');
                        }

                        span {
                            font-weight: 700;

                        }
                    }
                }
            }

        }


    }

    @media (max-width:768px) {
        .modal_block {
            max-width: 682px;
            max-height: 402px;

            .pet-modal {
                max-width: 630px;
                max-height: 350px;

                img {
                    width: 350px;
                    height: 350px;
                }

                .modal_content {
                    .pet_name {
                        margin: 0;
                        margin-top: 10px;
                    }

                    .pet_description {
                        margin-top: 20px;
                        font-size: 13px;
                        letter-spacing: 0.78px;
                    }
                }
            }
        }
    }
}
</style>