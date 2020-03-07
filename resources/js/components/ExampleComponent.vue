<template>
    <div class="container">
        <q-card
            class="my-card text-white"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
        >
            <q-card-section>
                <div class="text-h6">A Card Example</div>
                <div class="text-subtitle2">by Lavínia Melo</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent eget tellus egestas lectus rutrum vulputate quis at
                eros. Sed luctus eget ipsum et varius. Sed tincidunt dolor quis
                quam porttitor, ut maximus sem iaculis.
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
import { QCard, QCardSection, QCardActions } from "quasar";
export default {
    name: "Example",
    components: {
        QCard,
        QCardSection,
        QCardActions
    },
    mounted() {
        console.log("Component mounted.");
    }
};
</script>

<style lang="stylus" scoped>
.my-card {
    margin: 10%;
}
</style>
