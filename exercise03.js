function sumaElementosMayoresA10(nums) {
    let suma = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > 10) {
        suma += nums[i];
      }
    }
  
    return suma;
  }

  let nums = [10,50,8,4];
  let resultado = sumaElementosMayoresA10(nums);
  alert(resultado);
  