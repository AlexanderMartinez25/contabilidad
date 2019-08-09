export default {

    data() {
        return {
            fields: {},
            errors: {},
            success: false,
            loaded: true,
            action: '',
        }
    },

    methods: {


        submit() {
            this.$vs.loading();

            if (this.loaded) {
                this.loaded = false;
                this.success = false;
                this.errors = {};
                axios.post(this.action, this.fields).then(response => {
                    this.fields = {}; //Clear input fields.
                    this.loaded = true;
                    this.success = true;
                    console.log(this.$route);
                    this.$router.push({
                        name: 'home',
                    });
                }).catch(error => {

                    this.loaded = true;
                    if (error.response.status === 422) {
                        this.errors = error.response.data.errors || {};
                    } else {
                        this.errors = error.response.data || {};

                    }
                }).finally(finaly => {
                    this.$vs.loading.close();
                });
            }
        },

    },
}
