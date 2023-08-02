function sumaElementosNoMultiplosDe7(nums) {
    let suma = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 7 !== 0) {
        suma += nums[i];
      }
    }
  
    return suma;
  }
  
  let nums = [12,14,5,7];
  let resultado = sumaElementosNoMultiplosDe7(nums);
  alert(resultado);
  