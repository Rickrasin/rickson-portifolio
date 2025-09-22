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
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-4 ">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-textApp">
            {title}
          </h2>
          <span className="hidden md:inline h-px flex-1 bg-gradient-to-r from-azureEdge/60 via-azureSoft/40 to-transparent" />
        </div>
        {subtitle ? (
          <p className=" text-sm md:text-base text-textApp/70">
            {subtitle}
          </p>
        ) : null}

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        {
          SERVICES.map((s) => (
            <ServiceCard key={s.title} s={s} />
          ))
        }
      </div>
    </CardOutlineSection >
  );
}
