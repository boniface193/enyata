<template>
  <div class="d-flex b-hight">
    <div class="col-md-4 b-primary d-flex align-items-center justify-content-center">
      <img src="@/assets/images/logo.svg" class="img" alt="">
    </div>
    <div class="col-md-8 col-12 d-flex justify-content-center align-items-center">
      <div class="card mx-sm-auto ps-all">
        <div class="">
          <h3 class="login">Login</h3>
          <p class="p-text">Kindly enter your details to log in </p>
          <div class="input-space">
            <form action="" @submit="submitForm()">
              <Material-Field label="Email Address" type="email" class="space-bottom" />
              <Material-Field label="Password" type="password" class="space-bottom" />
            <div class="d-grid gap-2 space-bottom-24">
              <button class="btn btn-primary btn-size" type="submit">Log in</button>
            </div>
            </form>
            
            <div>
              <p class="forgotPsd">Forgot your password?</p>
            </div>
            <div class="space-bottom-96 text-center privacy-policy">
              <span class="link">Privacy Policy</span> and <span class="link">Terms of services</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MaterialField from '@/components/primary/MaterialField.vue'

export default {
  components: {
    MaterialField
  },

  methods: {
    submitForm() {
      this.$router.push({ path: '/dashboard' })
    }
  }

}
</script>

<style lang="scss" scoped>
$primary: #031434;
$bgHeight:  100vh;

.b-hight {
  height:$bgHeight;
  img {
      width: 77.6%;
    }
  .b-primary {
    background: $primary;
  }
  .login {
    color: #434854;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 32px;
  }

  .p-text {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #737373;
  }
  .card {
    width: 467px;
    height: 564px;
    border: 1px solid rgba(164, 167, 183, 0.3);
    border-radius: 8px;
  }
  .ps-all{
    padding: 2.25rem 4.125rem;
  }

  .space-bottom{
    margin-bottom: 32px;
  }

  .space-bottom-24 {
    margin-bottom: 24px;
  }

  .forgotPsd {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    color: #0A74DC;
    cursor: pointer;
  }

  .privacy-policy {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
    text-align: center;
    color: #737373;
    cursor: pointer;
  }

  .link {
    color: #303B54;
    text-decoration: underline;
  }

  .input-space {
    margin: 54px 0;
  }

  .space-bottom-96 {
    margin: 96PX 0;
  }

  .btn-size {
    height: 48px;
  }

  @media (max-width: 500px) {
    .mx-sm-auto {
      margin: 15px;
    }
    .p-text {
      font-size: 12px;
    }
    // .login {
    //   font-size: 2px;
    // }
    .ps-all {
      padding: 2.25rem 2.125rem;
    }
  }
}

</style>