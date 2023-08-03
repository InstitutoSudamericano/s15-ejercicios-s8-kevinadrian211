function sumaElementosIndicesMayores(nums) {
    let suma = 0;
  
    for (let i = 0; i < nums.length; i++) {
      if (i > nums[i]) {
        suma += nums[i];
      }
    }
  
    return suma;
  }
    let nums = [0,2,1,1];
    let resultado = sumaElementosIndicesMayores(nums);
  alert(resultado);