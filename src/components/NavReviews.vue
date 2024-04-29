<template>
    <div class="main-nav-review">
        <div class="main-nav-review-head">
            <h2>Testimonials</h2>
        </div>
        <div class="nav-review-row">
            <div class="nav-review-col">
                <div class="nav-review-descp">
                    <h3>“</h3>
                    <h4>Very clean and attendant friendly and helpful</h4>
                </div>
                <div class="testimonial-arrow-down"></div>
                <div class="nav-review-detail">
                    <div class="nav-detail-img"><img src="@/assets/images/google.svg"></div>

                    <div class="detail-name">
                        <h3>Becky Welch</h3>
                        <h4>2024-03-08</h4>
                    </div>
                </div>
            </div>
            <div class="nav-review-col">
                <div class="nav-review-descp">
                    <h3>“</h3>
                    <h4>Very clean and sanitized place, I enjoyed the experience very much!!!!</h4>
                </div>
                <div class="testimonial-arrow-down"></div>
                <div class="nav-review-detail">
                    <div class="nav-detail-img"><img src="@/assets/images/google.svg"></div>

                    <div class="detail-name">
                        <h3>Altanette Davis</h3>
                        <h4>2024-03-08</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-review-row">
            <div class="nav-review-col">
                <div class="nav-review-descp">
                    <h3>“</h3>
                    <h4>Clean premises and very helpful staff!</h4>
                </div>
                <div class="testimonial-arrow-down"></div>
                <div class="nav-review-detail">
                    <div class="nav-detail-img"><img src="@/assets/images/google.svg"></div>

                    <div class="detail-name">
                        <h3>Patrick Potter</h3>
                        <h4>2024-03-08</h4>
                    </div>
                </div>
            </div>
            <div class="nav-review-col">
                <div class="nav-review-descp">
                    <h3>“</h3>
                    <h4>Very clean, lots of washers and dryers. All always working and affordable. Staff is helpful and
                        attentive</h4>
                </div>
                <div class="testimonial-arrow-down"></div>
                <div class="nav-review-detail">
                    <div class="nav-detail-img"><img src="@/assets/images/google.svg"></div>

                    <div class="detail-name">
                        <h3>Douglas Paulson</h3>
                        <h4>2024-03-07</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-review-row">
            <div class="nav-review-col">
                <div class="nav-review-descp">
                    <h3>“</h3>
                    <h4>Very Clean facility with decent prices.</h4>
                </div>
                <div class="testimonial-arrow-down"></div>
                <div class="nav-review-detail">
                    <div class="nav-detail-img"><img src="@/assets/images/google.svg"></div>

                    <div class="detail-name">
                        <h3>RYAN HOLMAN</h3>
                        <h4>2024-03-04</h4>
                    </div>
                </div>
            </div>
            <div class="nav-review-col">
                <div class="nav-review-descp">
                    <h3>“</h3>
                    <h4>The staff is always friendly! Washer and dryers are nice and are a good price. Also it’s nice
                        not having to use quarters !</h4>
                </div>
                <div class="testimonial-arrow-down"></div>
                <div class="nav-review-detail">
                    <div class="nav-detail-img"><img src="@/assets/images/google.svg"></div>

                    <div class="detail-name">
                        <h3>Rachelle Sheriff</h3>
                        <h4>2024-03-02</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-review-row">
            <div class="nav-review-col">
                <div class="nav-review-descp">
                    <h3>“</h3>
                    <h4>Our dryer was on the fritz so I came here. All of our laundry, (which was a lot), fit into 2
                        huge washers. The attendant was so helpful and friendly. 10/10 recommend!</h4>
                </div>
                <div class="testimonial-arrow-down"></div>
                <div class="nav-review-detail">
                    <div class="nav-detail-img"><img src="@/assets/images/google.svg"></div>

                    <div class="detail-name">
                        <h3>Jolie Fralicks</h3>
                        <h4>2024-03-02</h4>
                    </div>
                </div>
            </div>
            <div class="nav-review-col">
                <div class="nav-review-descp">
                    <h3>“</h3>
                    <h4>Big washer and dryers quiet and clean 100% recommendations</h4>
                </div>
                <div class="testimonial-arrow-down"></div>
                <div class="nav-review-detail">
                    <div class="nav-detail-img"><img src="@/assets/images/google.svg"></div>

                    <div class="detail-name">
                        <h3>Christopher Watson</h3>
                        <h4>2024-03-02</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="nav-review-row">
            <div class="nav-review-col">
                <div class="nav-review-descp">
                    <h3>“</h3>
                    <h4>Very clean and attendant friendly and helpful</h4>
                </div>
                <div class="testimonial-arrow-down"></div>
                <div class="nav-review-detail">
                    <div class="nav-detail-img"><img src="@/assets/images/google.svg"></div>

                    <div class="detail-name">
                        <h3>Becky Welch</h3>
                        <h4>2024-03-08</h4>
                    </div>
                </div>
            </div>
            <div class="nav-review-col">
                <div class="nav-review-descp">
                    <h3>“</h3>
                    <h4>Very clean and attendant friendly and helpful</h4>
                </div>
                <div class="testimonial-arrow-down"></div>
                <div class="nav-review-detail">
                    <div class="nav-detail-img"><img src="@/assets/images/google.svg"></div>

                    <div class="detail-name">
                        <h3>Becky Welch</h3>
                        <h4>2024-03-08</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AOS from 'aos';
export default {
    name: 'NavReviews',
    mounted() {
        AOS.init();
    },

};
</script>


<style>
.testimonial-arrow-down {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 15px solid rgb(224, 224, 224);
    margin-left: 20px;
}

.main-nav-review-head {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    margin: 30px;
}

.nav-detail-img {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.nav-review-row {
    display: flex;
    flex-direction: row;
    margin: 30px;
    justify-content: center;
}

@media(max-width:600px) {
    .nav-review-row {
        flex-direction: column;
    }
}

.nav-review-col {
    margin: 10px;
    width: 700px;
}

@media(max-width:600px) {
    .nav-review-col {
        width: 342px;
    }
}

@media(max-width:400px) {
    .nav-review-col {
        width: 300px;
    }
}

@media(max-width:350px) {
    .nav-review-col {
        width: 230px;
    }
}

.detail-name h3 {
    margin-bottom: 0px;
    font-size: 20px;
}

.detail-name h4 {
    margin-bottom: 0px;
    color: grey;
    font-size: 18px;
}

.nav-review-detail img {
    margin-right: 10px;
    height: 4rem;
}

.detail-name {
    display: flex;
    flex-direction: column;
}

.nav-review-detail {
    padding: 20px;
    display: flex;
    flex-direction: row;
}

.nav-review-descp h3 {
    margin-bottom: 0px;
    color: grey;
    font-size: 17px;
    margin-top: -5px;
}

.nav-review-descp h4 {
    color: grey;
    font-size: 18px;
    font-weight: 100;
    margin-bottom: 0px;
}

.nav-review-descp {
    display: flex;

    flex-direction: row;
    padding: 10px;
    background-color: rgb(224, 224, 224);
}
</style>