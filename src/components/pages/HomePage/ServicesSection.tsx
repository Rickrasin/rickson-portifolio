import { SERVICES } from "@/lib/data";
import { ServiceItem } from "@/lib/types";
import ServiceCard from "@/components/ui/ServiceCard/ServiceCard";
import CardOutlineSection from "@/components/ui/CardSection/CardOutlineSection";

type ServiceSectionProps = {
  title?: string;
  subtitle?: string;
  services: ServiceItem[]
};

export default function ServicesSection({ title = "Meus Serviços", subtitle }: ServiceSectionProps) {
  return (
    <CardOutlineSection id={"services"} ariaLabel="Seção de Serviços">
      {/* Cabeçalho */}
      <div className="flex flex-col gap-2 text-center md:text-start">
        <div className="flex items-center justify-center md:justify-start gap-4 ">
          <span className=" md:hidden h-px flex-1 bg-gradient-to-l from-azureEdge/60 via-azureSoft/40 to-transparent" />
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp">
            {title}
          </h2>
          <span className=" md:hidden h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
          <span className="hidden md:inline h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
        </div>
        {subtitle ? (
          <p className="text-sm md:text-base text-textApp/70 ">
            {subtitle}
          </p>
        ) : null}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        {
          SERVICES.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))
        }
      </div>
    </CardOutlineSection >
  );
}
