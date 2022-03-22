import { PageContainer } from "../components/PageContainer";
import { PageTitle } from "../components/PageTitle";
import { CertificateForm } from "../components/CertificateForm";
import { CertificateCard } from "../components/CertificateCard";

export const GiveCertificate = () => {
  return (
    <PageContainer>
      <PageTitle>Certificate . Form</PageTitle>
      <CertificateForm />
    </PageContainer>
  );
};
