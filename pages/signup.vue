<template>
  <div class="wrap_signup">
    <h3>PLEASE SIGN UP</h3>
    <form>
      <div class="container">
        <label for="email"><b>이메일</b></label>
        <input
        type="text"
        placeholder="Enter Email"
        name="email"
        required />

        <label for="password"><b>비밀번호</b></label>
        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          required
        />

        <label for="psw-repeat"><b>비밀번호 확인</b></label>
        <input
          type="password"
          placeholder="Repeat Password"
          name="psw-repeat"
          required
        />

        <label for="nickname"><b>닉네임 입력</b></label>
        <input
          label="nickname"
          placeholder="nickname"
          name="nickname"
          required
        />
        <div class="wrap_agree">
          <input
          type="checkbox"
          checked="checked"
          name="agree"
          class="check_agree"
          style="margin-bottom: 15px"
          />
          <label class="label_term">agree with the term</label>
        </div>
        <div class="wrap_submit">
          <button
          type="submit"
          class="signupbtn"
          >Sign Up</button>
        </div>
      </div>
    </form>
    <div style="margin-top:20px">
      <span>do you have an account?</span>
      <nuxt-link to="/login">go to login</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
  .wrap_signup{
    margin:0 16px;
    text-align: center;
    font-family: "Silkscreen", cursive;
  }
  
  label {
    display: none;
    font-size: 13px;
  }

  .label_term{
    display: inline;
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

  .wrap_agree{
    margin-top: 20px;
  }

  .check_agree{
    width: 13px;
    height: 13px;
    margin: 0;
    padding: 0;
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
    name: "SignupPage",
    // layout: 'admin', // 편의를 위한 layout 확장
    head() {
        return {title : '회원가입'}
    },
    data(){
      return{

      }
    }
  }
  </script>