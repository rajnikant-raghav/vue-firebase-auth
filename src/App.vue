<script>
import {
    getAuth,
    onAuthStateChanged
} from "firebase/auth";
export default {
    name: "App",
    data() {
        return {

        }
    },
    mounted(){
        this.checkUserSignIn();
    },
    methods: {
        checkUserSignIn() {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (!user) {
                    this.$router.push("/")
                }else{
                    this.$router.push("/dashboard")
                }
            })
        }
    }

}
</script>

<template>
<div>

    <router-view></router-view>
</div>
</template>

<style>

</style>
