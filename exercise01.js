function sumaElementosImpares(nums) {
    let suma = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 2 !== 0) {
        suma += nums[i];
      }
    }
  
    return suma;
  }

  let nums = [3,5,8,4];
  let resultado = sumaElementosImpares(nums);
  alert(resultado);
  