import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { PlansSection } from "@/components/home/plans-section"
import { PaymentTermsSection } from "@/components/home/payment-terms-section"
import { BenefitsSection } from "@/components/home/benefits-section"
import { SupportSection } from "@/components/home/support-section"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <PlansSection />
        <PaymentTermsSection />
        <BenefitsSection />
        <SupportSection />
      </main>
      <Footer />
    </div>
  )
}
