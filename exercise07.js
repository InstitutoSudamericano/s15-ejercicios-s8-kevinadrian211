function sumaElementosIndicesIguales(nums) {
    let suma = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (i === nums[i]) {
        suma += nums[i];
      }
    }
  
    return suma;
  }
  
  let nums = [2,1,4,3];
  let resultado = sumaElementosIndicesIguales(nums);
  alert(resultado);
  