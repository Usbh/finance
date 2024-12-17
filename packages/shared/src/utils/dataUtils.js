// 金额格式化
export const formatAmount = (amount) => {
    return parseFloat(amount).toFixed(2);
  };
  
  // 时间格式化 (YYYY-MM-DD)
  export const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };
  