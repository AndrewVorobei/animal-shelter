<script setup>

</script>

<template>
    <div class="donation_block">
        <img src="@/assets/img/donation-screen/donation-dog.png" alt="donation dog">
        <div class="donation_content">
            <h1 class="donation_header">
                You can also make a donation
            </h1>
            <span class="subheading">
                Name of the bank / Type of bank account
            </span>
            <div class="credit_card">
                <img src="@/assets/img/donation-screen/credit-card.svg" alt="credit card">
                <span class="card_number">
                    8380 2880 8028 8791 7435
                </span>
            </div>
            <p class="donation_information">
                Legal information and lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a ipsum at libero
                sagittis dignissim sed ac diam. Praesent ultrices maximus tortor et vulputate. Interdum et malesuada fames
                ac ante ipsum primis in faucibus.
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.donation_block {
    max-width: 915px;
    max-height: 282px;
    height: 100%;
    width: 100%;
    margin: 80px 182px 100px 183px;
    display: flex;
    gap: 30px;

    .donation_content {
        display: flex;
        flex-direction: column;
        gap: 20px;

        .donation_header {
            color: $color-dark-l;
            font-family: $georgia;
            font-size: 35px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%;
            letter-spacing: 2.1px;
        }

        .subheading {
            color: $color-dark-l;
            font-family: $georgia;
            font-size: 15px;
            font-style: normal;
            font-weight: 400;
            line-height: 110%;
            letter-spacing: 0.9px;
        }

        .credit_card {
            display: flex;
            padding: 10px 15px;
            align-items: center;
            gap: 10px;
            border-radius: 9px;
            background: $color-primary;

            .card_number {
                color: $color-dark-l;
                font-family: $georgia;
                font-size: 20px;
                font-style: normal;
                font-weight: 400;
                line-height: 115%;
                letter-spacing: 1.2px;
            }
        }

        .donation_information {
            color: $color-dark-m;
            font-family: $arial;
            font-size: 12px;
            font-style: italic;
            font-weight: 400;
            line-height: 18px;
        }
    }
}


@media (max-width:768px) {
    .donation_block {
        max-height: 603px;
        max-width: 505px;
        flex-direction: column-reverse;

        .donation_content {
            max-width: 380px;
            max-height: 282px;

            .credit_card {
                max-width: 349px;
            }
        }
    }
}
</style>