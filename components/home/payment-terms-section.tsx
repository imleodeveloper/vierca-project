import Image from "next/image"

export function PaymentTermsSection() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <h3 className="text-lg font-semibold text-[#022041]">Termos de pagamento</h3>
          <p className="text-gray-600">O pagamento pode ser parcelado em até 12x</p>
          <div className="flex items-center">
            <Image src="/cards.avif" alt="Cartões aceitos" width={200} height={60} className="rounded" />
          </div>
        </div>
      </div>
    </section>
  )
}
