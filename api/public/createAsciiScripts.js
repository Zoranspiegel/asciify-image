document.addEventListener('DOMContentLoaded', () => {
  const miBoton = document.getElementById('miBoton');
  const miFormulario = document.getElementById('miFormulario');

  miBoton.addEventListener('click', () => {
      // Obtener los valores del formulario
      const campo1Value = document.getElementById('campo1').value;
      const campo2Value = document.getElementById('campo2').value;
      const campo3Value = document.getElementById('campo3').value;
      const campo4Value = document.getElementById('campo4').value;
      const campo5Value = document.getElementById('campo5').value;

      // Crear un objeto con los datos del formulario
      const data = {
          img_url: campo1Value,
          img_name: campo2Value,
          color: campo3Value,
          bg_color: campo4Value,
          definition: campo5Value
      };

      // Realizar la solicitud POST con Axios
      axios.post('http://localhost:3001/api/ascii', data)
          .then(response => {
            window.location.href = response.data.img;
          })
          .catch(error => {
              console.error('Error en la solicitud:', error);
          });
  });
});