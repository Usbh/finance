// 手机号校验
export const validatePhoneNumber = (phone) => {
    return /^1[3-9]\d{9}$/.test(phone);
  };
  
  // 邮箱校验
  export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };
  
  // 身份证号校验
  export const validateIDCard = (idCard) => {
    return /^[1-9]\d{5}(18|19|20)\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/.test(idCard);
  };
  