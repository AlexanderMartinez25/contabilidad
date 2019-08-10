// import '@mdi/font/css/materialdesignicons.css'
import Vue from 'vue'
import Vuetify, {
    VCard,
    VApp,
    VContent,
    VContainer,
    VLayout,
    VFlex,
    VToolbarTitle,
    VSpacer,
    VCardText,
    VForm,
    VTextField,
    VRating,
    VToolbar,
    VCardActions,
    VBtn
} from 'vuetify/lib'
import {
    Ripple
} from 'vuetify/lib/directives'

Vue.use(Vuetify, {
    components: {
        VCard,
        VApp,
        VContent,
        VContainer,
        VLayout,
        VRating,
        VToolbar,
        VFlex,
        VToolbarTitle,
        VSpacer,
        VCardText,
        VForm,
        VTextField,
        VCardActions,
        VBtn,

    },
    directives: {
        Ripple,
    },
})

export default new Vuetify({
    icons: {
        // iconfont: 'mdi', // default - only for display purposes
    }
})
