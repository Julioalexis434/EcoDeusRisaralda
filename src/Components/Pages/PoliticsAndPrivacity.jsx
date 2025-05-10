import React from "react";
import ContainerText from "../Global/ContainerText";
import { TitleH1, TitleH2 } from "../Global/ContainerTitle";

const PoliticsAndPrivacity = () => {
  return (
    <section className="min-h-screen py-20 dark:text-white">
      <div className="w-[90%] mx-auto max-w-7xl space-y-8">
        <TitleH1 text="Política de Privacidad, Términos y Condiciones del Sistema EcoDeus Risaralda" />
        
        <div className="space-y-6">
          <ContainerText text="Esta Política de Privacidad, Términos y Condiciones, bajo el cumplimiento a lo dispuesto por la Ley 1581 de 2012, el Decreto 1377 de 2013 y demás normas complementarias, describen cómo recopilamos, usamos, almacenamos y protegemos la información personal de los usuarios del sistema EcoDeus Risaralda, así como las normas de uso de la plataforma. Al utilizar nuestra plataforma, el usuario acepta los términos descritos a continuación." />
        </div>

        <div className="space-y-6">
          <TitleH2 text="Recopilamos los siguientes datos personales" />
          <ul className="list-disc pl-8 space-y-2">
            <li>Nombre y apellido</li>
            <li>Correo electrónico</li>
            <li>Ubicación geográfica (si el usuario lo autoriza)</li>
            <li>Preferencias de sitios ecoturísticos</li>
            <li>Comentarios y calificaciones realizadas</li>
            <li>Datos de sesión y uso de la plataforma</li>
          </ul>
        </div>

        <div className="space-y-6">
          <TitleH2 text="Uso de la Información Recopilada" />
          <ul className="list-disc pl-8 space-y-2">
            <li>Mejorar la experiencia del usuario</li>
            <li>Personalizar las recomendaciones de sitios ecoturísticos</li>
            <li>Administrar las interacciones y comentarios dentro de la plataforma</li>
            <li>Garantizar la seguridad de la plataforma y prevenir fraudes</li>
            <li>Enviar notificaciones relevantes sobre eventos y sitios de interés</li>
          </ul>
        </div>

        <div className="space-y-6">
          <TitleH2 text="Almacenamiento y Seguridad de los Datos" />
          <ContainerText text="Implementamos medidas de seguridad adecuadas para proteger los datos de accesos no autorizados, modificaciones, divulgación o destrucción. Los datos están almacenados en servidores seguros con encriptación de información sensible." />
        </div>

        <div className="space-y-6">
          <TitleH2 text="No compartimos información personal con terceros, excepto en los siguientes casos" />
          <ul className="list-disc pl-8 space-y-2">
            <li>Cuando sea requerido por ley</li>
            <li>Con proveedores de servicios que nos ayudan a operar la plataforma (ejemplo: API de mapas)</li>
            <li>Con consentimiento explícito del usuario</li>
          </ul>
        </div>

        <div className="space-y-6">
          <TitleH2 text="Derechos del Usuario" />
          <ul className="list-disc pl-8 space-y-2">
            <li>Acceder, corregir o eliminar sus datos personales</li>
            <li>Retirar su consentimiento para el uso de ciertos datos</li>
            <li>Solicitar información sobre el tratamiento de sus datos</li>
          </ul>
        </div>

        <div className="space-y-6">
          <TitleH2 text="Uso de Cookies" />
          <ContainerText text="Utilizamos cookies para mejorar la experiencia de navegación y personalizar el contenido mostrado. El usuario puede configurar su navegador para rechazar o eliminar cookies." />
        </div>

        <div className="space-y-6">
          <TitleH2 text="Modificaciones a la Política de Privacidad, Términos y Condiciones" />
          <ContainerText text="Nos reservamos el derecho de modificar esta política en cualquier momento. Los cambios serán notificados a través de la plataforma." />
        </div>

        <div className="space-y-6">
          <TitleH2 text="Términos y Condiciones de Uso" />
          <ContainerText text="Uso de la Plataforma" style="font-bold" />
          <ContainerText text="El usuario se compromete a:" />
          <ul className="list-disc pl-8 space-y-2">
            <li>No utilizar la plataforma para actividades ilegales</li>
            <li>Proporcionar información veraz al registrarse y al interactuar en la plataforma</li>
            <li>No compartir datos personales de terceros sin su consentimiento</li>
            <li>No manipular ni realizar ataques contra la seguridad de la plataforma</li>
          </ul>

          <ContainerText text="Responsabilidad del Usuario" style="font-bold" />
          <ContainerText text="El usuario es responsable del uso que haga de la plataforma y del contenido que publique, incluyendo calificaciones y comentarios." />

          <ContainerText text="Restricciones de Uso" style="font-bold" />
          <ContainerText text="Nos reservamos el derecho de suspender o eliminar cuentas de usuarios que:" />
          <ul className="list-disc pl-8 space-y-2">
            <li>Infrinjan estas normas de uso</li>
            <li>Realicen actividades fraudulentas o malintencionadas</li>
            <li>Publiquen contenido ofensivo o inadecuado</li>
          </ul>

          <ContainerText text="Limitaciones de Responsabilidad" style="font-bold" />
          <ContainerText text="El sistema ecoturístico no se hace responsable de:" />
          <ul className="list-disc pl-8 space-y-2">
            <li>Errores en la información proporcionada por terceros</li>
            <li>Problemas técnicos que puedan afectar el acceso o uso de la plataforma</li>
            <li>Pérdidas de datos debido a circunstancias fuera de nuestro control</li>
          </ul>

          <ContainerText text="Terminación del Servicio" style="font-bold" />
          <ContainerText text="Podemos suspender temporal o permanentemente el servicio en caso de mantenimiento, actualizaciones o por decisiones operativas." />
        </div>

        <div className="space-y-6">
          <TitleH2 text="Cláusulas Adicionales" />
          <ContainerText text="Jurisdicción y Legislación Aplicable" style="font-bold" />
          <ContainerText text="Esta Política de Privacidad, Términos y Condiciones están regidos por las leyes del país donde opera la plataforma. Cualquier disputa será resuelta en los tribunales competentes." />

          <ContainerText text="Aplicación de la Ley 1581 de 2012" style="font-bold" />
          <ContainerText text="De acuerdo con la Ley 1581 de 2012 de Colombia sobre protección de datos personales, garantizamos que:" />
          <ul className="list-disc pl-8 space-y-2">
            <li>Los usuarios tienen derecho a conocer, actualizar y rectificar sus datos personales</li>
            <li>Se solicitará autorización expresa para el tratamiento de datos personales</li>
            <li>La recolección de datos será limitada a lo estrictamente necesario para los fines descritos</li>
            <li>Se adoptarán medidas de seguridad adecuadas para la protección de la información</li>
            <li>Los usuarios podrán presentar quejas ante la Superintendencia de Industria y Comercio en caso de vulneración de sus derechos</li>
          </ul>

          <ContainerText text="Contacto" style="font-bold" />
          <ContainerText text="Para cualquier consulta sobre esta política, el usuario puede contactarnos a través del correo " />
          <ContainerText text="soporte@sistemaEcoDeusRisaralda.com" style="font-bold" />
        </div>
      </div>
    </section>
  );
};

export default PoliticsAndPrivacity;
