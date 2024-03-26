<template>
    <div class="main-pickup">
        <div class="pickup-row">
            <div class="pickup-head">
                <img src="@/assets/images/rect.png" alt="">
                <h1>SERVICE AREAS</h1>
                <p>We offer residential pickup and delivery throughout Arlington, Mansfield, Kennedale, Grand Prairie,
                    Fort Worth, Bedford, North Richland Hills, Hurst, and Haltom City.</p>
            </div>
            <div class="pickup-btn">
                <button>Schedule a Pickup</button>
            </div>
        </div>

    </div>
</template>

<script>

</script>

<style>
.pickup-btn button {
    margin: 5px;
    font-size: 15px;
    height: 45px;
    width: 150px;
    color: #ffff;
    border-radius: 25px;
    cursor: pointer;
    font-weight: bolder;
    background-color: #8fbe00;
    border: none;
    padding: 10px;
}

.pickup-row img {
    padding: 10px;
}

.pickup-row p {
    font-size: 20px;
    padding: 10px;
}

@media(max-width:380px) {
    .pickup-row p {
        font-size: 15px;
    }
}

.pickup-row h1 {
    font-weight: bolder;
    font-size: 40px;
    padding: 20px;
    color: #0072c4;
}

@media(max-width:380px) {
    .pickup-row h1 {
        font-size: 25px;
    }
}

.pickup-row {
    display: flex;
    padding: 35px;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    max-width: 1200px;
    margin-right: auto;
    margin-left: auto;
}
</style>