<template>
    <div class="welcome-page">
      <h1>欢迎使用授信服务</h1>
      <MyButton @click="nextStep">开始授信</MyButton>
    </div>
  </template>
  
  <script>
  import { MyButton } from '@shared/shared';
  
  export default {
    components: { MyButton },
    setup() {
      const nextStep = () => {
        console.log('进入下一步');
      };
  
      return { nextStep };
    }
  };
  </script>
  
  <style>
  .welcome-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
  }
  
  h1 {
    margin-bottom: 20px;
  }
  </style>
  