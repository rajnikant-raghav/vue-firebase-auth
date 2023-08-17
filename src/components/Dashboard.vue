<template>
<div class="dashboard_container">
    <h1>Welcome to Dashboard</h1>
    <p>Email: {{userData.email}}</p><br/>
    <button @click="logout">Logout</button>

</div>
</template>

<script>
import {
    getAuth,
    onAuthStateChanged,
    signOut
} from "firebase/auth";

export default {
    data() {
        return {
            userData: {},
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        getData() {
            const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    this.userData = user;
                } else {}
            })
        },
        logout() {
            const auth = getAuth();
            signOut(auth).then(() => {
                alert("Sign-out successful.")
                this.$router.push('/');
            }).catch((error) => {
                console.log(error.message)
            });
        }

    }

}
</script>

<style>
.dashboard_container{
  position:relative;
  top:20vh;
}
.dashboard_container h1{
  text-align:center;
}
.dashboard_container p{
  text-align:center;
  font-size:30px
}
.dashboard_container button{
  width:10%;
  padding:5px;
  position:absolute;
  left:45%;
  background:#cc8800;
  border:none;
  border-radius:5px;
  cursor:pointer;
}
</style>
