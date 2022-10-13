function pintarCalendario() {
  document.write(`<h1>Calendario</h1>
    <div id='tecla'>
    <table border="1" cellpadding="4" align="center">		
      <caption id="mes" style="font-size: 25px; margin: 30px; "> </caption> 		
     <tr>
      <th  colspan="1">L</th>
      <th  colspan="2">M</th>
      <th  colspan="3">X</th>
      <th  colspan="4">J</th>
      <th  colspan="5">V</th>
      <th  colspan="6">S</th>
      <th  colspan="7">D</th>
     </tr>
    <tbody>   
      <tr id="fila1">
          <td colspan="1" class="lu"> </td>
          <td colspan="2" class="ma"> </td>
          <td colspan="3" class="mi"> </td>
          <td colspan="4" class="ju"> </td>
          <td colspan="5" class="vi"> </td>
          <td colspan="6" class="sa"> </td>
          <td colspan="7" class="do"> </td>
      </tr>   
      <tr id="fila2">
          <td colspan="1" class="lu"> </td>
          <td colspan="2" class="ma"> </td>
          <td colspan="3" class="mi"> </td>
          <td colspan="4" class="ju"> </td>
          <td colspan="5" class="vi"> </td>
          <td colspan="6" class="sa"> </td>
          <td colspan="7" class="do"> </td>
      </tr>   
      <tr id="fila3">
          <td colspan="1" class="lu"> </td>
          <td colspan="2" class="ma"> </td>
          <td colspan="3" class="mi"> </td>
          <td colspan="4" class="ju"> </td>
          <td colspan="5" class="vi"> </td>
          <td colspan="6" class="sa"> </td>
          <td colspan="7" class="do"> </td>
      </tr>   
      <tr id="fila4">
          <td colspan="1" class="lu"> </td>
          <td colspan="2" class="ma"> </td>
          <td colspan="3" class="mi"> </td>
          <td colspan="4" class="ju"> </td>
          <td colspan="5" class="vi"> </td>
          <td colspan="6" class="sa"> </td>
          <td colspan="7" class="do"> </td>
      </tr>   
      <tr id="fila5">
          <td colspan="1" class="lu"> </td>
          <td colspan="2" class="ma"> </td>
          <td colspan="3" class="mi"> </td>
          <td colspan="4" class="ju"> </td>
          <td colspan="5" class="vi"> </td>
          <td colspan="6" class="sa"> </td>
          <td colspan="7" class="do"> </td>
      </tr>
      <tr id="fila6">
          <td colspan="1" class="lu"> </td>
          <td colspan="2" class="ma"> </td>
          <td colspan="3" class="mi"> </td>
          <td colspan="4" class="ju"> </td>
          <td colspan="5" class="vi"> </td>
          <td colspan="6" class="sa"> </td>
          <td colspan="7" class="do"> </td>
      </tr>	   
    </tbody>	     
    </table>`);
}

pintarCalendario();
