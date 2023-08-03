function sumaElementosIndicesPares(nums) {
    let suma = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (i % 2 === 0) {
        suma += nums[i];
      }
    }
  
    return suma;
  }
  
  let nums = [10,50,8,4];
  let resultado = sumaElementosIndicesPares(nums);
  alert(resultado);