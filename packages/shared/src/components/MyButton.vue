<template>
    <button :class="['my-button', type]" :disabled="loading" @click="handleClick">
      <span v-if="loading">加载中...</span>
      <slot v-else></slot>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      type: { type: String, default: 'primary' }, // primary, secondary
      loading: { type: Boolean, default: false }
    },
    emits: ['click'],
    setup(_, { emit }) {
      const handleClick = () => {
        emit('click');
      };
  
      return { handleClick };
    }
  };
  </script>
  
  <style>
  .my-button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  .primary {
    background-color: #42b983;
    color: white;
  }
  .secondary {
    background-color: #f5f5f5;
    color: #333;
  }
  </style>
  