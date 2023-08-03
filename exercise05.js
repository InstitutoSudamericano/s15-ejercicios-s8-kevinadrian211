function sumaElementosMultiplosDe3(nums) {
    let suma = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] % 3 === 0) {
        suma += nums[i];
      }
    }
  
    return suma;
  }

  let nums = [12,3,5,7];
  let resultado = sumaElementosMultiplosDe3(nums);
  alert(resultado);
  