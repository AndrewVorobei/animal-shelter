<script setup>
import index from "@/assets/img/help-screen/icons-top/"
import index_bottom from "~/assets/img/help-screen/icons-bottom/index_bottom"
const icons = [
    { name: 'Pet food', img: index.food },
    { name: 'Transportation', img: index.transportation },
    { name: 'Toys', img: index.toys },
    { name: 'Bowls and cups', img: index.bowl },
    { name: 'Snampoos', img: index.snampoos },
    { name: 'Vitamins', img: index_bottom.vitamins },
    { name: 'Medicines', img: index_bottom.medicines },
    { name: 'Collars / leashes', img: index_bottom.collars },
    { name: 'Sleeping areas', img: index_bottom.areas }
];

// const icons_bottom = [
//     { name: 'Vitamins', img: index_bottom.vitamins },
//     { name: 'Medicines', img: index_bottom.medicines },
//     { name: 'Collars/leashes', img: index_bottom.collars },
//     { name: 'Sleeping areas', img: index_bottom.areas }
// ];
</script>

<template>
    <div class="help_content">
        <h1 class="help_header">
            How you can help
            <span>our shelter</span>
        </h1>
        <div class="help_icons">
            <div class="icons">
                <div class="icon" v-for="el in icons" :key="el">
                    <img :src="el.img" alt="icon">
                    <span class="icon_top">
                        {{ el.name }}
                    </span>
                </div>
            </div>
            <!-- <div class="icons_bottom">
                <div class="icon" v-for="el in icons_bottom" :key="el">
                    <img :src="el.img" alt="icon">
                    <span class="icon_top">
                        {{ el.name }}
                    </span>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss" scoped>
.help_content {

    max-width: 1200px;
    max-height: 431px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 60px;
    margin: 80px 40px 100px;
    padding-inline: 87px;

    .help_header {
        display: flex;
        flex-direction: column;
        align-items: center;
        color: $color-dark-l;
        font-family: $georgia;
        font-size: 35px;
        font-style: normal;
        font-weight: 400;
        line-height: 130%;
        /* 45.5px */
        letter-spacing: 2.1px;
    }

    .help_icons {
        max-height: 281px;
        max-width: 1026px;
        display: flex;
        width: 100%;
        height: 100%;

        // .icons_top {
        //     display: flex;
        //     justify-content: space-between;

        // }

        // .icons_bottom {
        //     display: flex;
        //     justify-content: space-between;
        //     margin-inline: 84px;
        // }

        .icons {
            display: flex;
            flex-wrap: wrap;
            column-gap: 119px;
            row-gap: 55px;
            justify-content: space-between;

            .icon {
                max-width: calc(20%);
                max-height: 113px;
                height: 100%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                gap: 30px;

                img {
                    max-width: 60px;
                    max-height: 60px;
                }

                span {
                    color: $color-dark-l;
                    font-family: $georgia;
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 115%;
                    letter-spacing: 1.2px;
                    white-space: nowrap;
                }

                &:nth-child(9) {
                    margin-right: 84px;
                }

                &:nth-child(6) {
                    margin-left: 84px;
                }
            }


        }


    }
}

@media (max-width:768px) {
    .help_content {
        padding: 0;
        margin: 0;
        margin: 80px 69px 100px;
        max-width: 630px;
        max-height: 599px;
        height: 100%;
        width: 100%;

        .help_icons {
            max-height: 449px;

            .icons {
                max-width: 630px;
                column-gap: 60px;

                .icon {
                    max-width: 170px;
                    width: 170px;
                    height: 113px;

                    &:nth-child(9) {
                        margin-right: 0;
                    }

                    &:nth-child(6) {
                        margin-left: 0;
                    }
                }
            }
        }
    }
}
</style>