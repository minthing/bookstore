<template>
  <div class="wrap_login">
    <h3>LOGIN PAGE</h3>
    <form>
      <div class="container">
        <label for="email"><b>이메일</b></label>
        <input type="text" placeholder="test@test.com" name="email" required />
        <label for="password" placeholder="password"><b>비밀번호</b></label>
        <input type="password" placeholder="" name="password" required />
        <div class="wrap_submit">
          <button type="submit" class="signupbtn">Sign Up</button>
        </div>
      </div>
    </form>
    <div style="margin-top:20px">
      <span>you don't have an account?</span>
      <nuxt-link to="/signup">create an account</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
  .wrap_login{
    margin:0 16px;
    text-align: center;
    font-family: "Silkscreen", cursive;
  }

  label {
    display: none;
    font-size: 13px;
  }
  
  input {
    margin-top: 10px;
    padding: 0 10px;
    width: 300px;
    height: 40px;
    border: 1px solid #5d353a;
    border-radius: 10px;
    font-size: 16px;
  }

  .wrap_submit{
    margin-top: 20px;
  }

  button{
    border:none;
    padding: 15px;
    border-radius: 20px;
    background: #5d353a;
    color: #fff;
    font-family: "Silkscreen", cursive;
  }
  </style>

<script>
export default {
  name: "LoginVue"
};
</script>


