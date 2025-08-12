// IMPORTS
import { Html, Button, Preview, Head, Body } from "@react-email/components";

// TYPES
type VerificationEmailProps = {
  url: string;
};

// DEFINE EMAIL COMPONENT
export const VerificationEmail: React.FC<VerificationEmailProps> = ({
  url,
}) => {
  return (
    <Html>
      <Head />
      <Preview>Please verify your email address</Preview>
      <Body>
        <Button href={url}>Verify Email</Button>
      </Body>
    </Html>
  );
};
