function sumaIndicesMenores(nums) {
    let suma = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (i < nums[i]) {
        suma += i;
      }
    }
  
    return suma;
  }
  
  let nums = [0,2,1,4];
  let resultado = sumaIndicesMenores(nums);
  alert(resultado);