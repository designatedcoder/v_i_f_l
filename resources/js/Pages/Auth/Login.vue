<template>
    <app-layout>
        <h2 class="text-center mb-3">Login</h2>
        <v-card
            class="d-flex justify-center align-center mx-auto pa-10"
            max-width="500"
        >
            <v-row>
                <v-col class="text-center">
                    <span class="v-messages them--dark error--text subtitle-1" v-if="form.errors.email">
                        {{ form.errors.email }}
                    </span>
                    <v-form>

                        <v-text-field
                            v-model="form.email"
                            label="E-mail"
                            :rules="emailRules"
                        ></v-text-field>

                        <v-text-field
                            v-model="form.password"
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="passwordRules"
                            :type="show ? 'text' : 'password'"
                            name="input-10-2"
                            label="Password"
                            @click:append="show = !show"
                        ></v-text-field>

                        <v-btn
                            color="blue"
                            class="mt-5"
                            :disabled="form.processing || !form.email || !form.password"
                            @click.prevent="login"
                        >
                            Login
                        </v-btn>
                    </v-form>
                </v-col>
            </v-row>

        </v-card>
    </app-layout>
</template>

<script>
    import AppLayout from '../../Layouts/AppLayout'
    export default {
        components: {AppLayout},
        data() {
            return {
                form: this.$inertia.form({
                    email: '',
                    password: '',
                }),
                show: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                ],
            }
        },
        methods: {
            login() {
                this.form.post(this.route('login'), {
                    onFinish: () => this.form.reset('password', 'email')
                })
            }
        }
    }
</script>
