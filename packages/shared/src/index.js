export const formatAmount = (amount) => {
    return parseFloat(amount).toFixed(2);
};
export * from './utils/dataUtils';
export * from './utils/validateUtils';
export { default as request } from './utils/request';
export { default as MyButton } from './components/MyButton.vue';
