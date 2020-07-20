<template>
    <div>
        <v-app id="vue_app">
            <v-dialog v-model="dialog" max-width="400">
                <v-card>
                    <v-card-title class="headline">Dialog</v-card-title>
                    <v-card-text>Sample dialog</v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="secondary" @click="close_dialog">Disagree</v-btn>
                        <v-btn color="primary" @click="close_dialog">Agree</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-content>
                <v-container>
                    <h1>{{ app_name }}({{ app_version }})</h1>
                </v-container>
                <v-container>
                    <h3>Sample Button</h3>
                    <v-btn @click="open_dialog">OPEN DIALOG</v-btn>
                </v-container>
                <v-container>
                    <h3>Switch Dark Mode</h3>
                    <v-btn @click="switch_darkmode">Darkmode ENABLE/DISABLE</v-btn>
                    <p>darkmode:{{ darkmode_text }}</p>
                </v-container>
                <v-container>
                    <h3>Material Design Icons</h3>
                    <v-icon>mdi-airplane</v-icon>
                    <v-icon>mdi-battery</v-icon>
                    <v-icon>mdi-bluetooth</v-icon>
                    <v-icon>mdi-content-save</v-icon>
                    <v-icon>mdi-cloud-search</v-icon>
                    <br />
                    <a href="https://materialdesignicons.com/">Material Design Icons</a>
                </v-container>
            </v-content>
        </v-app>
    </div>
</template>

<style></style>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import CONFIG from "./config.json";

@Component
export default class Application extends Vue {
    app_name: string = CONFIG.app.name;
    app_version: string = CONFIG.app.version;
    dialog = false;

    created(): void {}

    open_dialog() {
        this.dialog = true;
    }

    close_dialog() {
        this.dialog = false;
    }

    switch_darkmode(): void {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
    }

    get darkmode_text(): string {
        if (this.$vuetify.theme.dark) {
            return "Enable";
        }
        return "Disable";
    }
}
</script>
