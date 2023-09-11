<script setup>
const scrollToFriends = () => {
    const footerComponent = document.querySelector('.pets');
    if (footerComponent) {
        footerComponent.scrollIntoView({ behavior: 'smooth' });
    }
};
</script>

<template>
    <div class="content_block">
        <section class="content">
            <h1 class="content_header">
                Not only people need a house
            </h1>
            <p class="content_descr">
                We offer to give a chance to a little and nice puppy with an extremely wide and open heart. He or she will
                love you more than anybody else in the world, you will see!
            </p>
            <button @click="scrollToFriends" class="content_btn">
                <span class="content_btn_text">

                    Make a friend
                </span>
            </button>
        </section>
        <img src="../../assets/img/start-screen/puppy.svg" alt="">
    </div>
</template>

<style lang="scss" scoped>
.content_block {
    max-width: 1200px;
    max-height: 728px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    gap: 42px;
    margin: 60px 40px 0 40px;

    .content {
        max-width: 460px;
        max-height: 322px;
        padding-top: 163px;
        display: flex;
        flex-direction: column;
        gap: 42px;

        .content_header {
            color: $color-light-xl;
            font-family: $georgia;
            font-size: 44px;
            max-width: 310px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
        }

        .content_descr {
            color: $color-dark-s;
            font-family: $arial;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 160%;
        }

        .content_btn {
            max-width: 207px;
            display: flex;
            align-content: center;
            justify-content: center;
            padding: 15px 45px;
            background: $color-primary;
            border-radius: 100px;

            .content_btn_text {
                text-wrap: nowrap;
                color: $color-dark-3xl;
                font-family: $georgia;
                font-size: 17px;
                font-style: normal;
                font-weight: 400;
                line-height: 130%;
                letter-spacing: 1.02px;
            }

            &:hover {
                background: $color-primary-light;
            }
        }
    }


}

@media (max-width: 768px) {
    .content_block {
        margin: 0;
        flex-direction: column;
        max-width: 768px;
        max-height: 1165px;
        width: 100%;
        height: 100%;

        .content {
            padding: 0;
            margin: 60px 0 0 154px;

            .content_btn {
                align-self: center;
            }
        }

        img {
            margin: 100px 30px 0 169px;
            max-width: 569px;
            max-height: 593px;
        }
    }
}
</style>