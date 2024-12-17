<template>
    <div class="ocr-page">
      <h2>请上传身份证照片</h2>
      <input type="file" @change="handleUpload" />
      <MyButton :loading="loading" @click="submit">提交</MyButton>
    </div>
  </template>
  
  <script>
  import { MyButton } from '@shared/shared';
  import { ref } from 'vue';
  
  export default {
    components: { MyButton },
    setup() {
      const loading = ref(false);
  
      const handleUpload = (e) => {
        console.log('上传文件', e.target.files[0]);
      };
  
      const submit = () => {
        loading.value = true;
        setTimeout(() => {
          loading.value = false;
          console.log('提交完成');
        }, 2000);
      };
  
      return { handleUpload, submit, loading };
    }
  };
  </script>
  
  <style>
  .ocr-page {
    padding: 20px;
    text-align: center;
  }
  
  input {
    margin: 10px 0;
  }
  </style>
  