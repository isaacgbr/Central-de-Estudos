# 📊 Chart.js — Guia de Referência Rápida

> Resumo sobre Chart.js — biblioteca para criação de gráficos no frontend.

---

## O que é Chart.js?

Chart.js é uma biblioteca JavaScript gratuita para criar **gráficos interativos** em páginas web. Usa o elemento `<canvas>` do HTML para renderizar os gráficos.

---

## Instalação

```bash
# Em projetos com npm (React, Vite)
npm install chart.js

# Em projetos HTML puro — via CDN
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

---

## Estrutura Básica

```html
<!-- Canvas onde o gráfico será renderizado -->
<canvas id="meu-grafico"></canvas>
```

```javascript
// Pega o contexto do canvas
const ctx = document.getElementById('meu-grafico').getContext('2d');

// Cria o gráfico
new Chart(ctx, {
  type: 'bar',        // tipo do gráfico
  data: { ... },      // dados
  options: { ... }    // configurações
});
```

---

## Tipos de Gráfico

| Tipo | Uso |
|------|-----|
| `bar` | Comparação entre valores |
| `line` | Evolução ao longo do tempo |
| `pie` | Proporção entre partes |
| `doughnut` | Igual ao pie com furo no centro |
| `radar` | Comparação multidimensional |

---

## Gráfico de Barras

```javascript
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril'],
    datasets: [{
      label: 'Vendas',
      data: [1200, 1900, 1500, 2100],
      backgroundColor: ['#2d6a4f', '#52b788', '#74c69d', '#95d5b2'],
      borderRadius: 6,
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      y: { beginAtZero: true }
    }
  }
});
```

---

## Gráfico de Linha

```javascript
new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
    datasets: [
      {
        label: 'Receitas',
        data: [1500, 1800, 1600, 2100, 1900, 2300],
        borderColor: '#2d6a4f',
        backgroundColor: 'rgba(45,106,79,0.1)',
        fill: true,       // preenche a área abaixo da linha
        tension: 0.4,     // suaviza a curva
      },
      {
        label: 'Despesas',
        data: [900, 1100, 950, 1300, 1000, 1200],
        borderColor: '#e63946',
        backgroundColor: 'rgba(230,57,70,0.1)',
        fill: true,
        tension: 0.4,
      }
    ]
  },
  options: {
    responsive: true,
    scales: { y: { beginAtZero: true } }
  }
});
```

---

## Gráfico de Pizza / Rosca

```javascript
new Chart(ctx, {
  type: 'doughnut', // ou 'pie'
  data: {
    labels: ['Porcos', 'Galinhas', 'Bodes', 'Carneiros'],
    datasets: [{
      data: [15, 50, 20, 10],
      backgroundColor: ['#2d6a4f', '#52b788', '#f4a261', '#e63946'],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { position: 'bottom' }
    }
  }
});
```

---

## Atualizando o Gráfico Dinamicamente

```javascript
// Guarda a referência do gráfico
const grafico = new Chart(ctx, { ... });

// Atualiza os dados
grafico.data.datasets[0].data = [1500, 2000, 1800, 2500];
grafico.update(); // re-renderiza o gráfico
```

---

## Usando no React com Vite

```jsx
import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

function GraficoFinanceiro({ receitas, despesas }) {
  // Ref para o canvas
  const canvasRef = useRef(null);
  // Ref para guardar a instância do gráfico
  const graficoRef = useRef(null);

  useEffect(() => {
    // Destroi o gráfico anterior antes de criar um novo
    if (graficoRef.current) graficoRef.current.destroy();

    const ctx = canvasRef.current.getContext('2d');
    graficoRef.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Receitas', 'Despesas', 'Lucro'],
        datasets: [{
          data: [receitas, despesas, receitas - despesas],
          backgroundColor: ['#52b788', '#e63946', '#2d6a4f'],
          borderRadius: 6,
        }]
      },
      options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true } }
      }
    });

    // Limpa ao desmontar o componente
    return () => graficoRef.current.destroy();
  }, [receitas, despesas]); // re-renderiza quando os dados mudarem

  return <canvas ref={canvasRef} />;
}

export default GraficoFinanceiro;
```

---

## Opções Mais Usadas

```javascript
options: {
  responsive: true,       // adapta ao tamanho do container
  maintainAspectRatio: false, // permite definir altura customizada

  plugins: {
    legend: {
      display: true,        // exibe a legenda
      position: 'bottom',   // top, bottom, left, right
    },
    tooltip: {
      enabled: true,        // exibe tooltip ao passar o mouse
    },
    title: {
      display: true,
      text: 'Relatório Financeiro'
    }
  },

  scales: {
    y: {
      beginAtZero: true,    // eixo Y começa no zero
      grid: { display: false } // remove as linhas de grade
    },
    x: {
      grid: { display: false }
    }
  }
}
```

---

## Boas Práticas

- Sempre destrua o gráfico anterior antes de criar um novo — evita duplicação
- Use `responsive: true` para adaptar ao tamanho da tela
- No React, use `useRef` para guardar a instância do gráfico
- Prefira `chart.js/auto` no React — importa os componentes automaticamente
- Atualize os dados com `grafico.data = ...` + `grafico.update()` em vez de recriar

---

> 💡 **Resumindo:** Chart.js é a forma mais simples de adicionar gráficos ao seu projeto. No dashboard do sistema de estoque, use gráfico de barras para receitas/despesas e linha para evolução mensal.