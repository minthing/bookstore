<template>
  <div>
    <h3>PLEASE SIGN UP</h3>
    <form>
  <div class="container">
    <label for="email"><b>이메일</b></label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="password"><b>비밀번호</b></label>
    <input type="password" placeholder="Enter Password" name="password" required>

    <label for="psw-repeat"><b>비밀번호 확인</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> 동의
    </label>

    <div class="clearfix">
      <button type="submit" class="signupbtn">Sign Up</button>
    </div>

  </div>
</form>
        <div>
          <span>do you have an account?</span>
          <nuxt-link to="/login">go to login</nuxt-link>
        </div>
  </div>
</template>

<script>
export default {
  name: 'SignupPage',
}
</script>
