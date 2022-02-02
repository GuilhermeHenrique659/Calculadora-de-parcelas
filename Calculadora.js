function Calcular(oper) {
  var C = document.Calculadora.Emprestimo.value;
  var i = document.Calculadora.Tax.value;
  var t = document.Calculadora.Meses.value;
  var e = document.Calculadora.entrada.value;
  C = C.replace(",", ".");
  var vp = parseFloat(C) - parseFloat(e);
  var m;
  if (oper == 'mensal') {
    m = vp * ((Math.pow(1 + parseFloat(i), t) * parseFloat(i)) / (Math.pow(1 + parseFloat(i), t) - 1))
  } else if (oper == 'anual') {
    t = parseInt(t) * 12;
    m = vp * ((Math.pow(1 + parseFloat(i), t) * parseFloat(i)) / (Math.pow(1 + parseFloat(i), t) - 1))
  }
  if (parseFloat(m) >= 0) {
    m = m.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
    document.Calculadora.Res.value = m;
  } else {
    document.Calculadora.Res.value = "Inválido";
  }
}

String.prototype.reverse = function () {
  return this.split('').reverse().join('');
};

function Juros(campo, evento) {
  var tecla = (!evento) ? window.event.keyCode : evento.which;
  var valor = campo.value.replace(/[^\d]+/gi, '').reverse();
  var resultado = "";
  var mascara = "#.##".reverse();
  for (var x = 0, y = 0; x < mascara.length && y < valor.length;) {
    if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();
}

function mascaraMoeda(campo, evento) {
  var tecla = (!evento) ? window.event.keyCode : evento.which;
  var valor = campo.value.replace(/[^\d]+/gi, '').reverse();
  var resultado = "";
  var mascara = "########,##".reverse();
  for (var x = 0, y = 0; x < mascara.length && y < valor.length;) {
    if (mascara.charAt(x) != '#') {
      resultado += mascara.charAt(x);
      x++;
    } else {
      resultado += valor.charAt(y);
      y++;
      x++;
    }
  }
  campo.value = resultado.reverse();
}