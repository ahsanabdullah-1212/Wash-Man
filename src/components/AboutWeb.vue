<template>
    <div class="main-about">
        <div class="about-head">
            <h1>About Us</h1>
        </div>
        <div class="about-description">
            <p>
                WaveMAX Laundry in Arlington, TX is not your typical laundromat! Friendly staff, clean and comfortable!
                Our fully attended laundromat is different than any other you have encountered. We are a family-owned
                and operated laundromat and are passionate about providing the best customer service around! That means
                100% complete satisfaction is guaranteed! Come experience amazing today!
            </p>
            <br>
            <p>
                We have the best self-serve washing equipment in Arlington. The efficiency of our washing machines and
                dryers will get you in and out in 1/2 the time of other laundromats. Come experience our
                state-of-the-art laundromat today to find out for yourself. We are conveniently located in Arlington,
                TX.
            </p>
            <br>
            <p>
                Rather have us do your laundry? No problem! Our convenient Drop-off Laundry Service is a no-brainer.
                With this drop-off service, we provide the soap and dryer sheets. We fold your laundry, hang-up dresses,
                collared shirts, and dress pants to make our service as convenient as possible.
            </p>
            <br>
            <p>
                Own a business that goes through a lot of laundries? Try our Commercial Laundry Service today! There are
                no contracts, lower minimums, and faster turnaround time than the other laundry services in Arlington.
            </p>
        </div>
    </div>
</template>
<script>



export default {
    name: 'AboutWeb',
}
</script>
<style>
.main-about {
    display: flex;
    margin-bottom: -35px;
    flex-direction: column;
    background: url(@/assets/images/water.jpg) no-repeat center;
    background-size: cover;
}
.about-head {
    text-align: left;
    padding: 30px;
    max-width:1400px;
    margin-left:auto;
    margin-right:auto;
}

.about-head h1 {
    font-size: 35px;
    font-weight: bolder;
    text-align: left;
}
.about-description {
    max-width:1400px;
    margin-left:auto;
    margin-right:auto;
    /* margin: 30px; */
    padding: 30px;
}
</style>