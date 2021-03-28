<template>
    <app-layout>
        <h2 class="text-center mb-3" v-if="$page.props.user.name">Welcome to your dashboard, {{ $page.props.user.name}}</h2>
        <v-row>
            <v-col>
                <v-img src="https://images.unsplash.com/photo-1514975614034-99de12b7c550?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzJ8fGRhc2hib2FyZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" height="400px"></v-img>
                <v-card-text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores facilis illum dolorum nemo natus omnis voluptatem earum cumque minus aut maiores, at provident consectetur, ipsum aliquam, autem aliquid quasi molestias.
                </v-card-text>
            </v-col>
        </v-row>
    </app-layout>
</template>

<script>
    import AppLayout from '../Layouts/AppLayout'
    export default {
        components: {
            AppLayout,
        }
    }
</script>
