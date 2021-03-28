<template>
    <app-layout>
        <h2 class="text-center mb-3">Register</h2>
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
                            v-model="form.name"
                            :counter="50"
                            label="Name"
                            :rules="nameRules"
                        ></v-text-field>

                        <v-text-field
                            v-model="form.email"
                            label="E-mail"
                            :rules="emailRules"
                        ></v-text-field>

                        <v-text-field
                            v-model="form.password"
                            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                            :rules="passwordRules"
                            :type="show1 ? 'text' : 'password'"
                            name="input-10-2"
                            label="Password"
                            @click:append="show1 = !show1"
                        ></v-text-field>

                        <v-text-field
                            v-model="form.password_confirmation"
                            :rules="passwordConfirmationRule"
                            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show2 ? 'text' : 'password'"
                            name="input-10-2"
                            label="Confirm Password"
                            @click:append="show2 = !show2"
                        ></v-text-field>

                        <v-btn
                            color="blue"
                            class="mt-5"
                            :disabled="form.processing || !form.name || !form.email || !form.password || !form.password_confirmation || form.password_confirmation.length < 6"
                            @click.prevent="register"
                        >
                            Register
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
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }),
                show1: false,
                show2: false,
                nameRules: [
                    v => !!v || 'Name is required',
                    v => (v && v.length <= 50) || 'Name must be less than 50 characters',
                ],
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
                ],
                passwordRules: [
                    v => !!v || 'Password is required',
                    v => (v && v.length >= 6) || 'Password must be greater than 6 characters',
                ],
            }
        },
        computed: {
            passwordConfirmationRule() {
                return [
                    this.form.password === this.form.password_confirmation || "Password must match",
                    v => !!v || 'You must confirm your password.'
                ]
            }
        },
        methods: {
            register() {
                this.form.post(this.route('register'), {
                    onFinish: () => this.form.reset('password', 'password_confirmation')
                })
            }
        }
    }
</script>
