<template>
    <div>
        <v-app-bar app>
            <v-toolbar-title>V-I-F-L</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-toolbar-items text class="hidden-xs-only">
                <inertia-link :href="route('welcome')" :class="route().current('welcome') ? 'text-decoration' : 'text-decoration-none'" >
                    <v-btn text color="blue" class="newButton">
                        Home
                    </v-btn>
                </inertia-link>
            </v-toolbar-items>
            <v-toolbar-items v-if="$page.props.user" text class="hidden-xs-only">
                <inertia-link :href="route('dashboard')" :class="route().current('dashboard') ? 'text-decoration' : 'text-decoration-none'" >
                    <v-btn text color="blue" class="newButton">
                        Dashboard
                    </v-btn>
                </inertia-link>
                <form @submit.prevent="logout" class="d-inline-flex align-center">
                    <v-btn text type="submit" class="newButton">Logout</v-btn>
                </form>
            </v-toolbar-items>
            <v-toolbar-items text v-else class="hidden-xs-only">
                <inertia-link :href="route('login')" :class="route().current('login') ? 'text-decoration' : 'text-decoration-none'" >
                    <v-btn text color="blue" class="newButton">
                        Login
                    </v-btn>
                </inertia-link>
                <inertia-link :href="route('register')" :class="route().current('register') ? 'text-decoration' : 'text-decoration-none'" >
                    <v-btn text color="blue" class="newButton">
                        Register
                    </v-btn>
                </inertia-link>
            </v-toolbar-items>
            <v-toolbar-items class="hidden-sm-and-up">
                <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            </v-toolbar-items>
        </v-app-bar>

        <v-navigation-drawer
            v-model="drawer"
            temporary
            app
            right
        >
            <v-list
                nav
                dense
                v-if="$page.props.user"
            >
                <v-list-item-group
                    v-model="group"
                >

                    <v-list-item>
                        <v-btn text class="sideButton">
                            <v-icon color="blue lighten-3" left small>mdi-home-city</v-icon>
                            <inertia-link :href="route('welcome')" :class="route().current('welcome') ? 'text-decoration' : 'text-decoration-none'">Home</inertia-link>
                        </v-btn>
                    </v-list-item>

                    <v-list-item>
                        <v-btn text class="sideButton">
                            <v-icon color="blue lighten-3" left small>mdi-speedometer</v-icon>
                            <inertia-link :href="route('dashboard')" :class="route().current('dashboard') ? 'text-decoration' : 'text-decoration-none'">Dashboard</inertia-link>
                        </v-btn>
                    </v-list-item>

                    <v-list-item>
                        <form @submit.prevent="logout" class="d-inline-flex align-center">
                            <v-btn text type="submit" class="sideButton">
                                <v-icon color="blue lighten-3" left small>mdi-logout</v-icon>
                                Logout
                            </v-btn>

                        </form>
                    </v-list-item>

                </v-list-item-group>
            </v-list>

            <v-list
                nav
                dense
                v-else
            >
                <v-list-item-group
                    v-model="group"
                >

                    <v-list-item>
                        <v-btn text class="sideButton">
                            <inertia-link :href="route('welcome')" :class="route().current('welcome') ? 'text-decoration' : 'text-decoration-none'">Home</inertia-link>
                        </v-btn>
                    </v-list-item>

                    <v-list-item>
                        <v-btn text class="sideButton">
                            <inertia-link :href="route('login')" :class="route().current('login') ? 'text-decoration' : 'text-decoration-none'">Login</inertia-link>
                        </v-btn>
                    </v-list-item>

                    <v-list-item>
                        <v-btn text class="sideButton">
                            <inertia-link :href="route('register')" :class="route().current('register') ? 'text-decoration' : 'text-decoration-none'">Register</inertia-link>
                        </v-btn>
                    </v-list-item>

                </v-list-item-group>
            </v-list>

        </v-navigation-drawer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            drawer: false,
            group: null,
        }),
        methods: {
            logout() {
                this.$inertia.post(route('logout'));
            }
        },
        watch: {
            group() {
                this.drawer = false
            }
        }
    }
</script>

<style scoped>
    .newButton {
        height: 100% !important;
        border-radius: 0 !important;
    }
    .sideButton:hover:before {
        opacity: 0;
    }
</style>
