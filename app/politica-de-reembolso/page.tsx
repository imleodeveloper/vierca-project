import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RefreshCw, Clock, CheckCircle, XCircle, AlertTriangle, CreditCard } from "lucide-react"
import Link from "next/link"

export default function PoliticaReembolsoPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-green-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <RefreshCw className="w-8 h-8 text-emerald-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Política de Reembolso</h1>
            <p className="text-xl text-gray-600 mb-4">
              Garantia de satisfação com prazo de 7 dias para reembolso em casos específicos
            </p>
            <p className="text-sm text-gray-500">Última atualização: {new Date().toLocaleDateString("pt-BR")}</p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-emerald-50 border-y border-emerald-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex flex-col items-center">
                <Clock className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold text-lg">7 Dias</h3>
                <p className="text-gray-600">Prazo para solicitar reembolso</p>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold text-lg">Garantia</h3>
                <p className="text-gray-600">Satisfação ou seu dinheiro de volta</p>
              </div>
              <div className="flex flex-col items-center">
                <CreditCard className="w-8 h-8 text-emerald-600 mb-2" />
                <h3 className="font-semibold text-lg">Reembolso</h3>
                <p className="text-gray-600">Processado em até 5 dias úteis</p>
              </div>
            </div>
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
                  <RefreshCw className="w-5 h-5 text-emerald-600" />
                  Nossa Garantia de Satisfação
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  Na <strong>VierCa Tecnologia</strong>, acreditamos na qualidade dos nossos serviços e queremos que
                  você fique completamente satisfeito com o resultado. Por isso, oferecemos uma política de reembolso
                  clara e justa com prazo de <strong>7 dias</strong> para casos específicos.
                </p>
                <p>
                  Esta política se aplica a todos os nossos serviços, incluindo desenvolvimento de websites, e-commerce,
                  chatbots, landing pages e demais soluções tecnológicas, respeitando as condições descritas abaixo.
                </p>
              </CardContent>
            </Card>

            {/* Refund Period */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Prazo para Reembolso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <h3 className="text-xl font-semibold text-blue-900">7 Dias Corridos</h3>
                  </div>
                  <p className="text-blue-800">
                    Você tem <strong>7 dias corridos</strong> a partir da data de entrega do projeto ou início do
                    serviço para solicitar reembolso, desde que atenda aos critérios estabelecidos nesta política.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Contagem do Prazo:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        <strong>Projetos de Desenvolvimento:</strong> A partir da entrega e aprovação final
                      </li>
                      <li>
                        <strong>Serviços Mensais:</strong> A partir da ativação do serviço
                      </li>
                      <li>
                        <strong>Landing Pages:</strong> A partir da publicação online
                      </li>
                      <li>
                        <strong>Implementações:</strong> A partir da conclusão da instalação
                      </li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <AlertTriangle className="w-5 h-5 text-yellow-600 mt-0.5" />
                      <p className="text-yellow-800">
                        <strong>Importante:</strong> O prazo é contado em dias corridos (incluindo finais de semana e
                        feriados). Solicitações após o prazo não serão aceitas.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Eligible Cases */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  Casos Elegíveis para Reembolso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">O reembolso será concedido nas seguintes situações:</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-green-700">
                      1. Não Conformidade com Especificações
                    </h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Projeto entregue não atende às especificações acordadas</li>
                      <li>Funcionalidades essenciais não implementadas</li>
                      <li>Diferenças significativas do escopo aprovado</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-green-700">2. Problemas Técnicos Graves</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Sistema não funciona conforme especificado</li>
                      <li>Bugs críticos que impedem o uso normal</li>
                      <li>Problemas de performance que tornam o sistema inutilizável</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-green-700">3. Não Entrega no Prazo Acordado</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Atraso superior a 50% do prazo original sem justificativa</li>
                      <li>Não comunicação adequada sobre atrasos</li>
                      <li>Impossibilidade de conclusão do projeto</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-green-700">4. Cancelamento pela VierCa</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Impossibilidade técnica de realizar o projeto</li>
                      <li>Cancelamento por motivos internos da empresa</li>
                      <li>Mudanças regulamentares que impeçam a execução</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Non-Eligible Cases */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-red-600" />
                  Casos NÃO Elegíveis para Reembolso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">O reembolso NÃO será concedido nas seguintes situações:</p>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-red-700">1. Mudança de Opinião</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Desistência sem motivo técnico justificado</li>
                      <li>Mudança de estratégia comercial do cliente</li>
                      <li>Preferência por outro fornecedor</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-red-700">2. Projetos Parcialmente Executados</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Trabalho já iniciado e em conformidade com o acordado</li>
                      <li>Entregas parciais aprovadas pelo cliente</li>
                      <li>Recursos já consumidos no desenvolvimento</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-red-700">3. Alterações de Escopo</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Solicitações de mudanças após início do projeto</li>
                      <li>Requisitos não especificados no briefing inicial</li>
                      <li>Expectativas além do escopo contratado</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-red-700">4. Problemas Externos</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Falhas de terceiros (hospedagem, domínios, APIs externas)</li>
                      <li>Mudanças em plataformas de terceiros</li>
                      <li>Problemas de conectividade do cliente</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold mb-2 text-red-700">5. Serviços Já Utilizados</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Chatbots que já processaram conversas</li>
                      <li>Sites que já receberam tráfego significativo</li>
                      <li>Sistemas já em uso produtivo</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refund Process */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="w-5 h-5 text-purple-600" />
                  Processo de Reembolso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Como Solicitar Reembolso:</h3>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          1
                        </div>
                        <div>
                          <h4 className="font-semibold">Entre em Contato</h4>
                          <p className="text-gray-600">
                            Envie um e-mail para viercatech@gmail.com ou WhatsApp (11) 96738-1402 dentro do prazo de 7
                            dias
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          2
                        </div>
                        <div>
                          <h4 className="font-semibold">Forneça Informações</h4>
                          <p className="text-gray-600">
                            Inclua número do projeto, motivo do reembolso e evidências (se aplicável)
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          3
                        </div>
                        <div>
                          <h4 className="font-semibold">Análise da Solicitação</h4>
                          <p className="text-gray-600">
                            Nossa equipe analisará o caso em até 2 dias úteis e entrará em contato
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                          4
                        </div>
                        <div>
                          <h4 className="font-semibold">Processamento</h4>
                          <p className="text-gray-600">Se aprovado, o reembolso será processado em até 5 dias úteis</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Informações Necessárias:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Nome completo e dados de contato</li>
                      <li>Número do projeto ou contrato</li>
                      <li>Data de entrega ou início do serviço</li>
                      <li>Motivo detalhado da solicitação</li>
                      <li>Evidências ou documentação de suporte</li>
                      <li>Dados bancários para reembolso</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Refund Types */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Tipos de Reembolso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="border border-green-200 rounded-lg p-4 bg-green-50">
                    <h3 className="text-lg font-semibold mb-3 text-green-700">Reembolso Total</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Projeto não iniciado</li>
                      <li>Cancelamento pela VierCa</li>
                      <li>Não conformidade total com especificações</li>
                      <li>Problemas técnicos graves não resolvidos</li>
                    </ul>
                    <p className="mt-3 text-sm text-green-600">
                      <strong>100% do valor pago</strong>
                    </p>
                  </div>

                  <div className="border border-blue-200 rounded-lg p-4 bg-blue-50">
                    <h3 className="text-lg font-semibold mb-3 text-blue-700">Reembolso Parcial</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Projeto parcialmente executado</li>
                      <li>Entregas parciais aprovadas</li>
                      <li>Cancelamento após início dos trabalhos</li>
                      <li>Problemas resolvidos parcialmente</li>
                    </ul>
                    <p className="mt-3 text-sm text-blue-600">
                      <strong>Proporcional ao trabalho não executado</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Payment Methods */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Métodos de Reembolso</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Formas de Reembolso Disponíveis:</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <CreditCard className="w-6 h-6 text-blue-600" />
                        <div>
                          <h4 className="font-semibold">Transferência Bancária</h4>
                          <p className="text-sm text-gray-600">PIX ou TED (mais rápido)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 border rounded-lg">
                        <CreditCard className="w-6 h-6 text-green-600" />
                        <div>
                          <h4 className="font-semibold">Estorno no Cartão</h4>
                          <p className="text-sm text-gray-600">Para pagamentos via cartão</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Prazos de Processamento:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        <strong>PIX:</strong> Até 1 dia útil após aprovação
                      </li>
                      <li>
                        <strong>Transferência Bancária:</strong> Até 3 dias úteis após aprovação
                      </li>
                      <li>
                        <strong>Estorno no Cartão:</strong> 5 a 10 dias úteis (depende da operadora)
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Conditions */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                  Condições Especiais
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Serviços Mensais (Chatbots, Manutenção):</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Reembolso proporcional aos dias não utilizados</li>
                      <li>Cancelamento deve ser solicitado até o 7º dia do mês</li>
                      <li>Serviços já prestados não são reembolsáveis</li>
                      <li>Taxa de setup não é reembolsável após implementação</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Hospedagem Gratuita:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Hospedagem gratuita não gera direito a reembolso</li>
                      <li>Migração de dados pode ser cobrada separadamente</li>
                      <li>Backup dos dados fornecido quando solicitado</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Projetos Customizados:</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Código-fonte entregue mesmo em caso de reembolso parcial</li>
                      <li>Licenças de terceiros não são reembolsáveis</li>
                      <li>Trabalho de design aprovado não é reembolsável</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Dispute Resolution */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Resolução de Disputas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Processo de Mediação:</h3>
                    <p className="text-gray-700 mb-3">
                      Em caso de discordância sobre a elegibilidade do reembolso, seguiremos este processo:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-gray-700">
                      <li>Tentativa de resolução direta entre as partes</li>
                      <li>Análise técnica independente (se necessário)</li>
                      <li>Mediação através de câmara especializada</li>
                      <li>Arbitragem como último recurso</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">Compromisso com a Transparência</h4>
                    <p className="text-blue-800">
                      Mantemos registros detalhados de todos os projetos e comunicações para garantir transparência no
                      processo de análise de reembolso.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact for Refunds */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Contato para Reembolsos</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold mb-4">Para solicitar reembolso, entre em contato:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-semibold mb-2">E-mail (Recomendado)</h4>
                      <p className="text-gray-700">viercatech@gmail.com</p>
                      <p className="text-sm text-gray-600">Assunto: "Solicitação de Reembolso - [Número do Projeto]"</p>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2">WhatsApp</h4>
                      <p className="text-gray-700">(11) 96738-1402</p>
                      <p className="text-sm text-gray-600">Horário: Segunda a sexta, 9h às 18h</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Documentação Necessária:</h4>
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>Comprovante de pagamento</li>
                    <li>Contrato ou proposta comercial</li>
                    <li>Comunicações relevantes (e-mails, mensagens)</li>
                    <li>Evidências do problema (screenshots, vídeos)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Important Notes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5 text-yellow-600" />
                  Observações Importantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <ul className="space-y-2 text-gray-700">
                      <li>
                        <strong>Prazo Improrrogável:</strong> O prazo de 7 dias é improrrogável e conta a partir da
                        entrega/ativação
                      </li>
                      <li>
                        <strong>Análise Individual:</strong> Cada caso é analisado individualmente considerando as
                        circunstâncias específicas
                      </li>
                      <li>
                        <strong>Boa Fé:</strong> Esperamos que todas as solicitações sejam feitas de boa fé e com
                        justificativas válidas
                      </li>
                      <li>
                        <strong>Melhoria Contínua:</strong> Usamos feedback de reembolsos para melhorar nossos processos
                        e serviços
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-900 mb-2">Nosso Compromisso</h4>
                    <p className="text-green-800">
                      Estamos comprometidos em resolver qualquer problema de forma justa e transparente. Nosso objetivo
                      é sempre a satisfação do cliente e a entrega de soluções de qualidade.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates to Policy */}
            <Card>
              <CardHeader>
                <CardTitle>Alterações nesta Política</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Esta Política de Reembolso pode ser atualizada periodicamente. Quando fizermos alterações
                  significativas, notificaremos todos os clientes através de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>E-mail para clientes ativos</li>
                  <li>Aviso em nosso website</li>
                  <li>Comunicação em nossos canais oficiais</li>
                </ul>
                <p className="text-sm text-gray-600">
                  A versão mais recente desta política estará sempre disponível em nosso website. Recomendamos que você
                  revise periodicamente para se manter informado sobre nossas condições de reembolso.
                </p>

                <div className="mt-6 text-center">
                  <Button asChild>
                    <Link href="/contato">Solicitar Reembolso</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
