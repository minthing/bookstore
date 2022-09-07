<template>
  <div>
    <div class="nav_main">
      <h1 class="wrap_title">
        <nuxt-link to="/" class="link_title"
          ><span class="title">dear books</span></nuxt-link
        >
      </h1>
      <div class="wrap_search">
        <nuxt-link to="/search"
          ><font-awesome-icon icon="magnifying-glass" class="ico_search"
        /></nuxt-link>
      </div>
      <div class="wrap_nav">
        <nuxt-link to="/profile" class="link_profile"
          ><span class="ico_profile"
            ><font-awesome-icon icon="face-smile" /></span
          ><span class="text">profile</span></nuxt-link
        >
        <nuxt-link to="/login" class="link_login"
          ><span class="ico_login"><font-awesome-icon icon="square" /></span
          ><span class="text">signup</span></nuxt-link
        >
      </div>
    </div>
    <div class="wrap_content">
      <ul class="wrap_tab">
        <li class="tab_item">
          <nuxt-link to="/" class="link_item"><span>HOME</span></nuxt-link>
        </li>
        <li class="tab_item">
          <nuxt-link to="/best" class="link_item"><span>BEST</span></nuxt-link>
        </li>
        <li class="tab_item">
          <nuxt-link to="/content" class="link_item"
            ><span>CONTENT</span></nuxt-link
          >
        </li>
        <li class="tab_item">
          <nuxt-link to="/my" class="link_item"><span>MY</span></nuxt-link>
        </li>
      </ul>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  // components:{
  //   LoginForm
  // },
  name: "DefaultLayout",
  // head(){
  //   return{title: "The Word:당신이 사랑한 문장들"}
  // }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Rubik+Maze&family=Silkscreen:wght@400;700&display=swap");

body {
  margin: 0;
  padding: 0;
}
.nav_main {
  /* display: flex;
  justify-content: space-between;
  height:50px; */
  background: #5d353a;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
}

.wrap_title {
  overflow: hidden;
  height: 20px;
  padding: 0 80px;
  font-size: 16px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.link_title {
  text-decoration: none;
  background: #99c8c3;
  color: #5d353a;
}

.title {
  font-family: "Silkscreen", cursive;
}

.wrap_search {
  overflow: hidden;
  position: absolute;
  top: 12px;
  left: 15px;
}

.wrap_nav {
  position: absolute;
  top: 12px;
  right: 15px;
}

.link_login {
  margin-left: 6px;
}

.ico_profile,
.ico_login,
.ico_search {
  color: #99c8c3;
}

.text {
  position: absolute;
  right: -9999px;
  font-size: 1px;
  line-height: 0;
}

.hide {
  display: none;
}

.wrap_content {
  position: relative;
  padding: 41px 0 0;
  margin: 0 auto;
  max-width: 640px;
  min-width: 320px;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: rgb(242, 240, 236);
}

.wrap_tab {
  display: flex;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background: #5d353a;
}

.wrap_tab li {
  list-style: none;
  flex: 1;
  text-align: center;
  font-family: "Silkscreen", cursive;
}

.wrap_tab .link_item {
  display: block;
  padding: 10px 0;
  text-decoration: none;
  color: #99c8c3;
}

/* .wrap_tab .link_item span{
  transition: 0.3s;
} */

/* .wrap_tab .link_item:hover span{
  background-color: #99c8c3;
  color: #5d353a;
} */

.wrap_tab .nuxt-link-exact-active span {
  background-color: #99c8c3;
  color: #5d353a;
}
</style>
