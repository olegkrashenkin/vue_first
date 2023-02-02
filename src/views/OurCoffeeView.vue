<template>
    <main>
        <header-component classItem="banner coffepage-banner" title="Our Coffee" />

        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_girl.jpg" alt="girl">
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
                    <div class="col-lg-4 offset-2">
                        <form action="#" class="shop__search">
                            <label class="shop__search-label" for="filter">Looking for</label>
                            <input id="filter" type="text" placeholder="start typing here..."
                                class="shop__search-input">
                        </form>
                    </div>
                    <div class="col-lg-4">
                        <div class="shop__filter">
                            <div class="shop__filter-label">
                                Or filter
                            </div>
                            <div class="shop__filter-group">
                                <button class="shop__filter-btn">Brazil</button>
                                <button class="shop__filter-btn">Kenya</button>
                                <button class="shop__filter-btn">Columbia</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <product-card-component v-for="card in ourCoffeeCards" :key="card.id" classItem="shop__item"
                                :name="card.title" :price="card.price" :img="card.img" />
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
            ourCoffeeCards: [
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