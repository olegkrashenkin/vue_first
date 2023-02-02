<template>
    <main>
        <header-component classItem="banner goodspage-banner" title="For your pleasure" />

        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>

                <div class="line"></div>

                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <product-card-component classItem="shop__item" :name="pleasurePageCards[0].title"
                                :price="pleasurePageCards[0].price" :img="pleasurePageCards[0].img" />
                            <product-card-component classItem="shop__item" :name="pleasurePageCards[1].title"
                                :price="pleasurePageCards[1].price" :img="pleasurePageCards[1].img" />
                            <product-card-component classItem="shop__item" :name="pleasurePageCards[2].title"
                                :price="pleasurePageCards[2].price" :img="pleasurePageCards[2].img" />
                            <product-card-component classItem="shop__item" :name="pleasurePageCards[3].title"
                                :price="pleasurePageCards[3].price" :img="pleasurePageCards[3].img" />
                            <product-card-component classItem="shop__item" :name="pleasurePageCards[4].title"
                                :price="pleasurePageCards[4].price" :img="pleasurePageCards[4].img" />
                            <product-card-component classItem="shop__item" :name="pleasurePageCards[5].title"
                                :price="pleasurePageCards[5].price" :img="pleasurePageCards[5].img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent.vue";
import ProductCardComponent from "@/components/ProductCardComponent.vue";

export default {
    components: { HeaderComponent, ProductCardComponent },
    data() {
        return {
            pleasurePageCards: [
                {
                    id: 0,
                    title: 'Solimo Coffee Beans 2kg',
                    price: 10.73,
                    img: 'coffee-1.jpg',
                },
                {
                    id: 1,
                    title: 'Solimo Coffee Beans 2kg',
                    price: 10.73,
                    img: 'coffee-2.jpg',
                },
                {
                    id: 2,
                    title: 'Solimo Coffee Beans 2kg',
                    price: 10.73,
                    img: 'coffee-3.jpg',
                },
                {
                    id: 3,
                    title: 'Solimo Coffee Beans 2kg',
                    price: 10.73,
                    img: 'coffee-1.jpg',
                },
                {
                    id: 4,
                    title: 'Solimo Coffee Beans 2kg',
                    price: 10.73,
                    img: 'coffee-2.jpg',
                },
                {
                    id: 5,
                    title: 'Solimo Coffee Beans 2kg',
                    price: 10.73,
                    img: 'coffee-3.jpg',
                },
            ]
        }
    }
}
</script>