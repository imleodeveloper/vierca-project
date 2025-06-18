import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  FileText,
  Users,
  CreditCard,
  Shield,
  AlertTriangle,
  Scale,
} from "lucide-react";

export default function TermosServicoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Termos de Serviço
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Condições gerais que regem a utilização dos nossos serviços de
              desenvolvimento e tecnologia
            </p>
            <p className="text-sm text-gray-500">
              Última atualização: {new Date().toLocaleDateString("pt-BR")}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Introdução e Aceitação
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Bem-vindo à <strong>VierCa Tech</strong> ("VierCa", "nós",
                  "nosso" ou "empresa"). Estes Termos de Serviço ("Termos")
                  regem o uso dos nossos serviços de desenvolvimento de
                  software, criação de websites, chatbots, e-commerce e demais
                  soluções tecnológicas.
                </p>
                <p>
                  Ao contratar nossos serviços, acessar nosso website ou
                  utilizar nossas plataformas, você ("Cliente", "você" ou
                  "usuário") concorda em cumprir e estar vinculado a estes
                  Termos. Se você não concordar com qualquer parte destes
                  Termos, não deve utilizar nossos serviços.
                </p>
                <p>
                  <strong>Importante:</strong> Leia estes Termos cuidadosamente
                  antes de utilizar nossos serviços. Estes Termos constituem um
                  acordo legal vinculativo entre você e a VierCa Tecnologia.
                </p>
              </CardContent>
            </Card>

            {/* Services */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-green-600" />
                  Descrição dos Serviços
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A VierCa oferece os seguintes serviços principais:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Desenvolvimento de websites customizados</li>
                    <li>Criação de e-commerce e lojas virtuais</li>
                    <li>Desenvolvimento e implementação de chatbots com IA</li>
                    <li>Landing pages otimizadas para conversão</li>
                    <li>Sites em WordPress</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Hospedagem e manutenção de websites</li>
                    <li>Consultoria em tecnologia</li>
                    <li>Suporte técnico e manutenção</li>
                    <li>Integração de sistemas e APIs</li>
                    <li>Otimização de performance e SEO</li>
                  </ul>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Nota:</strong> Os serviços específicos, prazos,
                  valores e condições serão detalhados em proposta comercial
                  individual para cada projeto.
                </p>
              </CardContent>
            </Card>

            {/* Account Registration */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Cadastro e Conta de Usuário</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Requisitos para Cadastro:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Ser maior de 18 anos ou ter autorização legal para
                        contratar
                      </li>
                      <li>
                        Fornecer informações verdadeiras, precisas e atualizadas
                      </li>
                      <li>
                        Manter a confidencialidade das credenciais de acesso
                      </li>
                      <li>
                        Notificar imediatamente sobre uso não autorizado da
                        conta
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Responsabilidades do Usuário:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Manter informações de conta atualizadas</li>
                      <li>Usar a conta apenas para fins legítimos</li>
                      <li>Não compartilhar credenciais com terceiros</li>
                      <li>Respeitar os direitos de propriedade intelectual</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Terms */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  Condições de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Estrutura de Pagamento:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        <strong>Projetos até R$ 10.000:</strong> 50% no início +
                        50% na entrega
                      </li>
                      <li>
                        <strong>Projetos acima de R$ 10.000:</strong>{" "}
                        Parcelamento conforme cronograma acordado
                      </li>
                      <li>
                        <strong>Serviços Mensais:</strong> Pagamento antecipado
                        até o dia 5 de cada mês
                      </li>
                      <li>
                        <strong>Implementações:</strong> Taxa de setup +
                        mensalidade conforme plano escolhido
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Condições Gerais:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Pagamentos via PIX, transferência bancária ou cartão de
                        crédito
                      </li>
                      <li>Juros de 2% ao mês sobre pagamentos em atraso</li>
                      <li>Suspensão de serviços após 15 dias de atraso</li>
                      <li>Todos os valores incluem impostos aplicáveis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Project Development */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Desenvolvimento de Projetos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Processo de Desenvolvimento:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Briefing detalhado e aprovação de escopo</li>
                      <li>Desenvolvimento seguindo metodologias ágeis</li>
                      <li>
                        Entregas parciais para validação (quando aplicável)
                      </li>
                      <li>Testes e homologação antes da entrega final</li>
                      <li>Treinamento e documentação incluídos</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Prazos e Entregas:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Prazos definidos em proposta comercial específica</li>
                      <li>
                        Atrasos por alterações de escopo serão renegociados
                      </li>
                      <li>Cliente tem até 7 dias para aprovar entregas</li>
                      <li>
                        Silêncio do cliente será considerado aprovação tácita
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Alterações de Escopo:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Alterações devem ser solicitadas por escrito</li>
                      <li>Impacto em prazo e custo será avaliado</li>
                      <li>Aprovação prévia necessária para implementação</li>
                      <li>Cobrança adicional conforme complexidade</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Intellectual Property */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-orange-600" />
                  Propriedade Intelectual
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Direitos do Cliente:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Propriedade total do código-fonte desenvolvido
                        especificamente
                      </li>
                      <li>Direitos de uso sobre design e layout criados</li>
                      <li>Licença perpétua para uso do sistema desenvolvido</li>
                      <li>
                        Direito de modificação e distribuição (código
                        customizado)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Direitos da VierCa:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Propriedade de frameworks e bibliotecas próprias</li>
                      <li>
                        Direito de usar projeto como referência (com
                        autorização)
                      </li>
                      <li>Propriedade de metodologias e processos internos</li>
                      <li>Direito de reutilizar conhecimento adquirido</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Licenças de Terceiros:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Softwares de terceiros mantêm suas licenças originais
                      </li>
                      <li>
                        Cliente responsável por licenças adicionais necessárias
                      </li>
                      <li>
                        VierCa não se responsabiliza por violações de terceiros
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Warranties and Support */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Garantias e Suporte</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Garantia de Funcionamento:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        30 dias de garantia contra defeitos de funcionamento
                      </li>
                      <li>
                        Correção gratuita de bugs identificados no período
                      </li>
                      <li>Suporte técnico incluído por 30 dias</li>
                      <li>
                        Garantia não cobre alterações ou novos desenvolvimentos
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Suporte Técnico:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Suporte via e-mail e WhatsApp</li>
                      <li>Tempo de resposta: até 24 horas (dias úteis)</li>
                      <li>
                        Suporte emergencial disponível (cobrança adicional)
                      </li>
                      <li>Planos de manutenção mensal disponíveis</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hosting and Maintenance */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Hospedagem e Manutenção</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Hospedagem Inicial Gratuita:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Hospedagem gratuita por tempo limitado conforme projeto
                      </li>
                      <li>
                        Upgrade necessário conforme crescimento do tráfego
                      </li>
                      <li>Notificação prévia sobre necessidade de upgrade</li>
                      <li>Migração assistida quando necessário</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Serviços de Manutenção:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Atualizações de segurança</li>
                      <li>Backups regulares</li>
                      <li>Monitoramento de performance</li>
                      <li>Suporte técnico contínuo</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Limitations and Liability */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                  Limitações e Responsabilidades
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Limitações de Responsabilidade:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Responsabilidade limitada ao valor pago pelo serviço
                      </li>
                      <li>Não responsabilidade por lucros cessantes</li>
                      <li>Exclusão de danos indiretos ou consequenciais</li>
                      <li>Não garantia de resultados comerciais específicos</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Responsabilidades do Cliente:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Fornecer informações precisas e completas</li>
                      <li>Aprovar entregas dentro dos prazos estabelecidos</li>
                      <li>Manter backups independentes quando necessário</li>
                      <li>Cumprir obrigações legais relacionadas ao projeto</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Força Maior:</h3>
                    <p className="text-gray-700">
                      Não seremos responsáveis por atrasos ou falhas causadas
                      por eventos fora do nosso controle, incluindo desastres
                      naturais, falhas de terceiros, problemas de infraestrutura
                      ou mudanças regulamentares.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Termination */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Rescisão e Cancelamento</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Rescisão pelo Cliente:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Cancelamento de serviços mensais com 30 dias de
                        antecedência
                      </li>
                      <li>
                        Projetos em andamento: pagamento proporcional ao
                        trabalho realizado
                      </li>
                      <li>Reembolso conforme Política de Reembolso (7 dias)</li>
                      <li>
                        Entrega de arquivos e códigos desenvolvidos até a data
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Rescisão pela VierCa:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Inadimplência superior a 30 dias</li>
                      <li>Violação dos termos de uso</li>
                      <li>Comportamento inadequado ou abusivo</li>
                      <li>Solicitações que violem leis ou regulamentos</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Efeitos da Rescisão:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Suspensão imediata de todos os serviços</li>
                      <li>Entrega de trabalhos concluídos (se pagos)</li>
                      <li>Remoção de acessos e credenciais</li>
                      <li>Manutenção de confidencialidade mútua</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Privacy and Data */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Privacidade e Proteção de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  O tratamento de dados pessoais é regido por nossa{" "}
                  <a
                    href="/politica-privacidade"
                    className="text-blue-600 hover:underline"
                  >
                    Política de Privacidade
                  </a>
                  , que faz parte integrante destes Termos. Destacamos:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    Conformidade com a LGPD (Lei Geral de Proteção de Dados)
                  </li>
                  <li>
                    Coleta mínima de dados necessários para prestação dos
                    serviços
                  </li>
                  <li>Segurança e confidencialidade das informações</li>
                  <li>Direitos do titular dos dados garantidos</li>
                  <li>Não compartilhamento com terceiros sem autorização</li>
                </ul>
              </CardContent>
            </Card>

            {/* Prohibited Uses */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Usos Proibidos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  É expressamente proibido utilizar nossos serviços para:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Atividades ilegais ou fraudulentas</li>
                    <li>Violação de direitos de terceiros</li>
                    <li>Distribuição de malware ou vírus</li>
                    <li>Spam ou comunicações não solicitadas</li>
                    <li>Conteúdo ofensivo ou discriminatório</li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Violação de propriedade intelectual</li>
                    <li>Atividades que prejudiquem nossa reputação</li>
                    <li>Tentativas de acesso não autorizado</li>
                    <li>Sobrecarga intencional de sistemas</li>
                    <li>Revenda não autorizada de serviços</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scale className="w-5 h-5 text-indigo-600" />
                  Resolução de Conflitos
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Mediação e Arbitragem:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Tentativa de resolução amigável em primeiro lugar</li>
                      <li>Mediação através de câmara especializada</li>
                      <li>Arbitragem como alternativa ao judiciário</li>
                      <li>Custos compartilhados entre as partes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Foro e Legislação:
                    </h3>
                    <p className="text-gray-700">
                      Estes Termos são regidos pelas leis brasileiras. Para
                      questões não resolvidas por mediação ou arbitragem, fica
                      eleito o foro da comarca de São Paulo/SP, com renúncia
                      expressa a qualquer outro, por mais privilegiado que seja.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* General Provisions */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Disposições Gerais</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Alterações dos Termos:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Reservamos o direito de alterar estes Termos</li>
                      <li>
                        Notificação prévia de 30 dias para alterações
                        significativas
                      </li>
                      <li>
                        Continuidade do uso implica aceitação das alterações
                      </li>
                      <li>Versão mais recente sempre disponível no website</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Independência das Cláusulas:
                    </h3>
                    <p className="text-gray-700">
                      Se qualquer disposição destes Termos for considerada
                      inválida ou inexequível, as demais disposições
                      permanecerão em pleno vigor e efeito.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Acordo Integral:
                    </h3>
                    <p className="text-gray-700">
                      Estes Termos, juntamente com a Política de Privacidade e
                      propostas comerciais específicas, constituem o acordo
                      integral entre as partes, substituindo todos os acordos
                      anteriores.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card>
              <CardHeader>
                <CardTitle>Informações de Contato</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Para dúvidas sobre estes Termos de Serviço ou questões
                  relacionadas aos nossos serviços, entre em contato:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>VierCa Tecnologia</strong>
                  </p>
                  <p>E-mail: viercatech@gmail.com</p>
                  <p>WhatsApp: (11) 96738-1402</p>
                  <p>Website: https://vierca-ia.vercel.app</p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Horário de atendimento: Segunda a sexta, das 9h às 18h
                  (horário de Brasília)
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
