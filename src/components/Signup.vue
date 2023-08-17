<template>
<div>
    <form @submit="signup">
        <p>User SignUp</p>
        <input type="email" required v-model="email" placeholder="Enter email.."><br/><br/>
        <input type="password" v-model="password" placeholder="Enter password.."><br/><br/>
        <button type="submit">SignUp</button>
        <span>have an account <router-link to="/">LogIn</router-link></span>
    </form>
    
</div>
</template>

<script>
import {
    getAuth,
    createUserWithEmailAndPassword
} from "firebase/auth";

export default {
    name: "Signup",
    data() {
        return {
            email: "",
            password: ""
        }
    },

    methods: {
        signup(event) {
            event.preventDefault();
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, this.email, this.password)
                .then(userCredential => {
                    alert("Sign Up Successfull");
                    this.$router.push("/")
                })
                .catch(err => {
                    alert(err.message)
                })
            this.email = "";
            this.password = "";
        }
    }
}
</script>

<style>
form {
    margin: auto;
    width: 30vw;
    height: 40vh;
    position: relative;
    top: 20vh;
}

form p {
    background: #cc8800;
    text-align: center;
    padding: 5px;
    font-size: 20px;
    color: #fff;
}

input {
    width: 95%;
    padding: 8px;
    border: none;
    background: none;
    border-bottom: 2px solid #cc8800;
}

form button {
    width: 30%;
    padding: 8px;
    position: absolute;
    left: 30%;
    cursor: pointer;
    background: #cc8800;
    border: none;
    border-radius:5px;
}

span {
    position: absolute;
    top: 85%;
    left: 70px;
    color: lightgray;
}
</style>
