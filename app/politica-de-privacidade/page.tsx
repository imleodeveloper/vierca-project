import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Eye, Lock, Users, FileText, Mail } from "lucide-react";

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Política de Privacidade
            </h1>
            <p className="text-xl text-gray-600 mb-4">
              Transparência total sobre como coletamos, usamos e protegemos seus
              dados pessoais
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
                  <Eye className="w-5 h-5 text-green-600" />
                  Introdução
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p>
                  A <strong>VierCa Tech</strong> ("nós", "nosso" ou "empresa")
                  está comprometida em proteger e respeitar sua privacidade.
                  Esta Política de Privacidade explica como coletamos, usamos,
                  armazenamos e protegemos suas informações pessoais quando você
                  utiliza nossos serviços, visita nosso website ou interage
                  conosco.
                </p>
                <p>
                  Esta política está em conformidade com a Lei Geral de Proteção
                  de Dados (LGPD - Lei nº 13.709/2018) e outras legislações
                  aplicáveis de proteção de dados.
                </p>
              </CardContent>
            </Card>

            {/* Data Collection */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  Informações que Coletamos
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    1. Informações Fornecidas Diretamente
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Cadastro e Login:</strong> Nome completo, e-mail,
                      telefone, senha (criptografada)
                    </li>
                    <li>
                      <strong>Formulários de Contato:</strong> Nome, e-mail,
                      telefone, empresa, mensagem, preferências de serviço
                    </li>
                    <li>
                      <strong>Informações de Projeto:</strong> Detalhes sobre
                      seus projetos, requisitos técnicos, orçamento
                    </li>
                    <li>
                      <strong>Comunicações:</strong> Conteúdo de e-mails,
                      mensagens e outras comunicações conosco
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    2. Informações Coletadas Automaticamente
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Dados de Navegação:</strong> Endereço IP, tipo de
                      navegador, sistema operacional, páginas visitadas
                    </li>
                    <li>
                      <strong>Cookies e Tecnologias Similares:</strong>{" "}
                      Preferências, sessões de login, análise de uso
                    </li>
                    <li>
                      <strong>Dados de Uso:</strong> Como você interage com
                      nossos serviços, frequência de uso, recursos utilizados
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    3. Informações de Terceiros
                  </h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      Dados de redes sociais quando você conecta suas contas
                    </li>
                    <li>
                      Informações de parceiros comerciais (quando aplicável)
                    </li>
                    <li>Dados de verificação de identidade e validação</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* How We Use Data */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-purple-600" />
                  Como Utilizamos suas Informações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Finalidades do Tratamento:
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        Fornecer e melhorar nossos serviços de desenvolvimento e
                        tecnologia
                      </li>
                      <li>
                        Processar e responder suas solicitações e comunicações
                      </li>
                      <li>Criar e gerenciar sua conta de usuário</li>
                      <li>Enviar atualizações sobre projetos e serviços</li>
                      <li>Realizar análises para melhorar nossos serviços</li>
                      <li>Cumprir obrigações legais e regulamentares</li>
                      <li>Prevenir fraudes e garantir a segurança</li>
                      <li>
                        Enviar comunicações de marketing (com seu consentimento)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-2">
                      Base Legal (LGPD):
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>
                        <strong>Execução de contrato:</strong> Para fornecer os
                        serviços contratados
                      </li>
                      <li>
                        <strong>Consentimento:</strong> Para comunicações de
                        marketing e cookies não essenciais
                      </li>
                      <li>
                        <strong>Legítimo interesse:</strong> Para melhorar
                        nossos serviços e prevenir fraudes
                      </li>
                      <li>
                        <strong>Cumprimento de obrigação legal:</strong> Para
                        atender requisitos fiscais e legais
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Sharing */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Mail className="w-5 h-5 text-orange-600" />
                  Compartilhamento de Informações
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  <strong>
                    Não vendemos, alugamos ou comercializamos suas informações
                    pessoais.
                  </strong>{" "}
                  Podemos compartilhar suas informações apenas nas seguintes
                  situações:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Prestadores de Serviços:</strong> Empresas que nos
                    ajudam a operar nossos serviços (hospedagem, e-mail,
                    analytics)
                  </li>
                  <li>
                    <strong>Parceiros Técnicos:</strong> Quando necessário para
                    desenvolvimento de projetos específicos
                  </li>
                  <li>
                    <strong>Obrigações Legais:</strong> Quando exigido por lei,
                    ordem judicial ou autoridades competentes
                  </li>
                  <li>
                    <strong>Proteção de Direitos:</strong> Para proteger nossos
                    direitos, propriedade ou segurança
                  </li>
                  <li>
                    <strong>Transações Comerciais:</strong> Em caso de fusão,
                    aquisição ou venda de ativos
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Data Security */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-red-600" />
                  Segurança dos Dados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Implementamos medidas técnicas e organizacionais para proteger
                  suas informações:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Criptografia de dados em trânsito e em repouso</li>
                  <li>
                    Controles de acesso rigorosos e autenticação multifator
                  </li>
                  <li>Monitoramento contínuo de segurança</li>
                  <li>Backups regulares e seguros</li>
                  <li>Treinamento regular da equipe sobre proteção de dados</li>
                  <li>Auditorias de segurança periódicas</li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  <strong>Importante:</strong> Embora implementemos medidas de
                  segurança robustas, nenhum sistema é 100% seguro. Recomendamos
                  que você também tome precauções para proteger suas
                  informações.
                </p>
              </CardContent>
            </Card>

            {/* Data Retention */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Retenção de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Mantemos suas informações pessoais pelo tempo necessário para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Dados de Conta:</strong> Enquanto sua conta estiver
                    ativa ou conforme necessário para fornecer serviços
                  </li>
                  <li>
                    <strong>Dados de Projeto:</strong> Por até 5 anos após a
                    conclusão do projeto para suporte e garantia
                  </li>
                  <li>
                    <strong>Dados Financeiros:</strong> Conforme exigido pela
                    legislação fiscal (até 5 anos)
                  </li>
                  <li>
                    <strong>Dados de Marketing:</strong> Até você retirar o
                    consentimento ou solicitar exclusão
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* User Rights */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Seus Direitos (LGPD)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Você tem os seguintes direitos em relação aos seus dados
                  pessoais:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Confirmação:</strong> Saber se tratamos seus dados
                    </li>
                    <li>
                      <strong>Acesso:</strong> Obter cópia dos seus dados
                    </li>
                    <li>
                      <strong>Correção:</strong> Corrigir dados incompletos ou
                      incorretos
                    </li>
                    <li>
                      <strong>Anonimização:</strong> Tornar dados anônimos
                    </li>
                  </ul>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>
                      <strong>Bloqueio:</strong> Suspender o tratamento
                    </li>
                    <li>
                      <strong>Eliminação:</strong> Excluir dados desnecessários
                    </li>
                    <li>
                      <strong>Portabilidade:</strong> Transferir dados para
                      outro fornecedor
                    </li>
                    <li>
                      <strong>Revogação:</strong> Retirar consentimento a
                      qualquer momento
                    </li>
                  </ul>
                </div>
                <p className="mt-4">
                  Para exercer seus direitos, entre em contato conosco através
                  do e-mail: <strong>viercatech@gmail.com</strong>
                </p>
              </CardContent>
            </Card>

            {/* Cookies */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Cookies e Tecnologias Similares</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Utilizamos cookies e tecnologias similares para:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    <strong>Cookies Essenciais:</strong> Necessários para o
                    funcionamento do site (login, segurança)
                  </li>
                  <li>
                    <strong>Cookies de Performance:</strong> Para analisar como
                    você usa nosso site (Google Analytics)
                  </li>
                  <li>
                    <strong>Cookies de Funcionalidade:</strong> Para lembrar
                    suas preferências
                  </li>
                  <li>
                    <strong>Cookies de Marketing:</strong> Para personalizar
                    anúncios (apenas com consentimento)
                  </li>
                </ul>
                <p className="mt-4 text-sm text-gray-600">
                  Você pode gerenciar suas preferências de cookies nas
                  configurações do seu navegador.
                </p>
              </CardContent>
            </Card>

            {/* International Transfers */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Transferências Internacionais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Alguns de nossos prestadores de serviços podem estar
                  localizados fora do Brasil. Quando isso ocorre, garantimos
                  que:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>
                    A transferência seja necessária para a execução dos serviços
                  </li>
                  <li>O país de destino ofereça grau de proteção adequado</li>
                  <li>Sejam implementadas salvaguardas apropriadas</li>
                  <li>Você seja informado sobre essas transferências</li>
                </ul>
              </CardContent>
            </Card>

            {/* Children */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Menores de Idade</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Nossos serviços são direcionados para pessoas maiores de 18
                  anos. Não coletamos intencionalmente informações pessoais de
                  menores de 18 anos sem o consentimento dos pais ou
                  responsáveis legais. Se tomarmos conhecimento de que coletamos
                  dados de um menor sem consentimento adequado, tomaremos
                  medidas para excluir essas informações.
                </p>
              </CardContent>
            </Card>

            {/* Changes */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Alterações nesta Política</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Podemos atualizar esta Política de Privacidade periodicamente.
                  Quando fizermos alterações significativas, notificaremos você
                  através de:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>E-mail para o endereço cadastrado em sua conta</li>
                  <li>Aviso em nosso website</li>
                  <li>Notificação em nossos serviços</li>
                </ul>
                <p className="mt-4">
                  Recomendamos que você revise esta política regularmente para
                  se manter informado sobre como protegemos suas informações.
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Contato e Encarregado de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Se você tiver dúvidas sobre esta Política de Privacidade ou
                  quiser exercer seus direitos, entre em contato conosco:
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>VierCa Tecnologia</strong>
                  </p>
                  <p>E-mail: viercatech@gmail.com</p>
                  <p>WhatsApp: (11) 96738-1402</p>
                  <p>
                    <strong>Encarregado de Dados (DPO):</strong>{" "}
                    viercatech@gmail.com
                  </p>
                </div>
                <p className="mt-4 text-sm text-gray-600">
                  Responderemos às suas solicitações dentro de 15 dias úteis,
                  conforme estabelecido pela LGPD.
                </p>
              </CardContent>
            </Card>

            {/* Authority */}
            <Card>
              <CardHeader>
                <CardTitle>Autoridade de Proteção de Dados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Se você não estiver satisfeito com nossa resposta às suas
                  preocupações sobre privacidade, você tem o direito de
                  apresentar uma reclamação à Autoridade Nacional de Proteção de
                  Dados (ANPD):
                </p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>
                      ANPD - Autoridade Nacional de Proteção de Dados
                    </strong>
                  </p>
                  <p>Website: https://www.gov.br/anpd</p>
                  <p>E-mail: comunicacao@anpd.gov.br</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
