import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogPostLayout1 } from "@/components/blog/layouts/blog-post-layout-1"

export default function CSS3AnimacoesPage() {
  const postData = {
    title: "CSS3: Animações e Transições que Impressionam",
    excerpt: "Aprenda a criar animações fluidas e transições elegantes usando apenas CSS3, sem JavaScript.",
    author: "Equipe VierCa",
    date: "8 Dez, 2024",
    readTime: "10 min",
    category: "Desenvolvimento de Sites Codificado",
    image: "🎨",
    content: `
      <p>As animações CSS3 revolucionaram a forma como criamos experiências interativas na web. Sem a necessidade de JavaScript, podemos criar efeitos visuais impressionantes que melhoram significativamente a experiência do usuário.</p>

      <h2>Por que Usar Animações CSS3?</h2>
      <p>As animações CSS3 oferecem várias vantagens:</p>
      
      <ul>
        <li><strong>Performance:</strong> Executadas pelo navegador, são mais eficientes</li>
        <li><strong>Simplicidade:</strong> Não requerem JavaScript adicional</li>
        <li><strong>Compatibilidade:</strong> Suportadas por todos os navegadores modernos</li>
        <li><strong>Controle:</strong> Fácil de ajustar timing e easing</li>
      </ul>

      <h2>Transições CSS: O Básico</h2>
      <p>As transições permitem mudanças suaves entre estados de elementos:</p>

      <pre><code>.botao {
  background-color: #1e90ff;
  transition: all 0.3s ease;
}

.botao:hover {
  background-color: #022041;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}</code></pre>

      <h2>Propriedades de Transição</h2>
      
      <h3>transition-property</h3>
      <p>Define quais propriedades serão animadas:</p>
      <ul>
        <li><code>all</code> - Todas as propriedades</li>
        <li><code>background-color</code> - Apenas cor de fundo</li>
        <li><code>transform, opacity</code> - Múltiplas propriedades</li>
      </ul>

      <h3>transition-duration</h3>
      <p>Controla a duração da animação:</p>
      <ul>
        <li><code>0.3s</code> - 300 milissegundos</li>
        <li><code>1s</code> - 1 segundo</li>
        <li><code>500ms</code> - 500 milissegundos</li>
      </ul>

      <h3>transition-timing-function</h3>
      <p>Define a curva de velocidade:</p>
      <ul>
        <li><code>ease</code> - Padrão, começa devagar, acelera, termina devagar</li>
        <li><code>linear</code> - Velocidade constante</li>
        <li><code>ease-in</code> - Começa devagar</li>
        <li><code>ease-out</code> - Termina devagar</li>
        <li><code>cubic-bezier()</code> - Curva personalizada</li>
      </ul>

      <h2>Animações com @keyframes</h2>
      <p>Para animações mais complexas, usamos @keyframes:</p>

      <pre><code>@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.elemento {
  animation: fadeInUp 0.6s ease-out;
}</code></pre>

      <h2>Exemplos Práticos</h2>

      <h3>1. Botão com Efeito Hover</h3>
      <pre><code>.btn-animado {
  background: linear-gradient(45deg, #1e90ff, #022041);
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
}

.btn-animado:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(30, 144, 255, 0.3);
}

.btn-animado::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.btn-animado:hover::before {
  left: 100%;
}</code></pre>

      <h3>2. Card com Animação de Entrada</h3>
      <pre><code>@keyframes slideInFromLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.card {
  animation: slideInFromLeft 0.8s ease-out;
  transition: transform 0.3s ease;
}

.card:hover {
  transform: scale(1.05);
}</code></pre>

      <h3>3. Loading Spinner</h3>
      <pre><code>@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #1e90ff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}</code></pre>

      <h2>Animações de Texto</h2>
      
      <h3>Efeito Typewriter</h3>
      <pre><code>@keyframes typewriter {
  from { width: 0; }
  to { width: 100%; }
}

@keyframes blink {
  50% { border-color: transparent; }
}

.typewriter {
  overflow: hidden;
  border-right: 2px solid #1e90ff;
  white-space: nowrap;
  animation: 
    typewriter 3s steps(40, end),
    blink 0.75s step-end infinite;
}</code></pre>

      <h2>Performance e Boas Práticas</h2>
      
      <h3>Propriedades Otimizadas</h3>
      <p>Para melhor performance, prefira animar:</p>
      <ul>
        <li><code>transform</code> - Não causa reflow</li>
        <li><code>opacity</code> - Não causa repaint</li>
        <li><code>filter</code> - Processado pela GPU</li>
      </ul>

      <h3>Evite Animar</h3>
      <ul>
        <li><code>width/height</code> - Causa reflow</li>
        <li><code>top/left</code> - Use transform em vez disso</li>
        <li><code>box-shadow</code> - Use com moderação</li>
      </ul>

      <h3>Dicas de Performance</h3>
      <ul>
        <li>Use <code>will-change</code> para preparar animações</li>
        <li>Remova <code>will-change</code> após a animação</li>
        <li>Use <code>transform3d()</code> para ativar aceleração de hardware</li>
        <li>Limite o número de elementos animados simultaneamente</li>
      </ul>

      <h2>Responsividade em Animações</h2>
      <p>Considere as preferências do usuário:</p>

      <pre><code>@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}</code></pre>

      <h2>Ferramentas Úteis</h2>
      <ul>
        <li><strong>Animate.css:</strong> Biblioteca de animações prontas</li>
        <li><strong>Cubic-bezier.com:</strong> Gerador de curvas de timing</li>
        <li><strong>Animista:</strong> Gerador de animações CSS</li>
        <li><strong>DevTools:</strong> Para debugar animações</li>
      </ul>

      <h2>Conclusão</h2>
      <p>As animações CSS3 são uma ferramenta poderosa para criar experiências web envolventes. Quando usadas com moderação e foco na usabilidade, podem transformar completamente a percepção do usuário sobre seu site.</p>

      <p>Na VierCa, incorporamos animações sutis e eficazes em todos os nossos projetos, sempre priorizando performance e acessibilidade.</p>

      <p>Quer um site com animações profissionais? <a href="/contato" class="text-blue-600 hover:underline">Entre em contato</a> e vamos criar algo incrível juntos!</p>
    `,
  }

  return (
    <div className="min-h-screen">
      <Header />
      <BlogPostLayout1 post={postData} />
      <Footer />
    </div>
  )
}
