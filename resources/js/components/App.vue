<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white" height-hint="98">
            <q-toolbar>
                <q-btn dense flat round icon="menu" @click="left = !left" />

                <q-toolbar-title>
                    <q-avatar>
                        <img
                            src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg"
                        />
                    </q-avatar>
                    Laravel with Quasar Framework
                </q-toolbar-title>
            </q-toolbar>

            <q-tabs
                v-model="tab"
                dense
                class="bg-primary text-white shadow-2"
                align="justify"
                narrow-indicator
            >
                <q-tab name="mails" label="Mails" />
                <q-tab name="alarms" label="Alarms" />
                <q-tab name="movies" label="Movies" />
            </q-tabs>
            <q-separator />

            <q-tab-panels class="text-blue" v-model="tab" animated>
                <q-tab-panel name="mails">
                    <div class="text-h6">Mails</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eget tellus egestas lectus rutrum vulputate quis at
                    eros. Sed luctus eget ipsum et varius. Sed tincidunt dolor
                    quis quam porttitor, ut maximus sem iaculis. Pellentesque
                    nec mi molestie, porttitor mauris et, placerat mauris.
                    Mauris sit amet lobortis ex, ac placerat magna. Duis ac
                    aliquet metus, et sagittis erat. Nulla eros odio, dignissim
                    facilisis luctus vel, dapibus sed felis.
                </q-tab-panel>

                <q-tab-panel name="alarms">
                    <div class="text-h6">Alarms</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eget tellus egestas lectus rutrum vulputate quis at
                    eros. Sed luctus eget ipsum et varius. Sed tincidunt dolor
                    quis quam porttitor, ut maximus sem iaculis. Pellentesque
                    nec mi molestie, porttitor mauris et, placerat mauris.
                    Mauris sit amet lobortis ex, ac placerat magna. Duis ac
                    aliquet metus, et sagittis erat. Nulla eros odio, dignissim
                    facilisis luctus vel, dapibus sed felis.
                </q-tab-panel>

                <q-tab-panel name="movies">
                    <div class="text-h6">Movies</div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eget tellus egestas lectus rutrum vulputate quis at
                    eros. Sed luctus eget ipsum et varius. Sed tincidunt dolor
                    quis quam porttitor, ut maximus sem iaculis. Pellentesque
                    nec mi molestie, porttitor mauris et, placerat mauris.
                    Mauris sit amet lobortis ex, ac placerat magna. Duis ac
                    aliquet metus, et sagittis erat. Nulla eros odio, dignissim
                    facilisis luctus vel, dapibus sed felis.
                </q-tab-panel>
            </q-tab-panels>
        </q-header>

        <q-drawer show-if-above v-model="left" side="left" bordered>
            <q-list dense bordered padding class="rounded-borders">
                <q-item clickable v-ripple v-for="n in 15" v-bind:key="n">
                    <q-item-section> Item {{ n }} </q-item-section>
                </q-item>
            </q-list>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import {
    QBtn,
    QIcon,
    QEditor,
    QPageContainer,
    QDrawer,
    QHeader,
    QTabs,
    QRouteTab,
    QToolbar,
    QToolbarTitle,
    QAvatar,
    QLayout,
    QList,
    QItem,
    QItemSection,
    QTabPanel,
    QTabPanels,
    QSeparator
} from "quasar";

export default {
    name: "app",
    components: {
        QBtn,
        QIcon,
        QEditor,
        QPageContainer,
        QDrawer,
        QHeader,
        QTabs,
        QRouteTab,
        QToolbar,
        QToolbarTitle,
        QAvatar,
        QLayout,
        QList,
        QItem,
        QItemSection,
        QTabPanel,
        QTabPanels,
        QSeparator
    },
    data() {
        return {
            left: false,
            tab: "mails"
        };
    },
    computed: {},
    methods: {},
    mounted() {},
    beforeDestroy() {}
};
</script>

<style lang="stylus"></style>
