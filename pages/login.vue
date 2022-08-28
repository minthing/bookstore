<template>
  <div>
    <h3>LOGIN PAGE</h3>
    <form>
      <div class="container">
        <label for="email"><b>이메일</b></label>
        <input type="text" placeholder="test@test.com" name="email" required>

        <label for="password"><b>비밀번호</b></label>
        <input type="password" placeholder="" name="password" required>
        <div class="wrap_submit">
          <button type="submit" class="signupbtn">Sign Up</button>
        </div>
      </div>
    </form>
            <div>
          <span>you don't have an account?</span>
          <nuxt-link to="/signup">create an account</nuxt-link>
        </div>
  </div>
</template>

<script>
export default {
  name: 'LoginVue',
}
</script>
