import { BasicInfo } from "../../domain";

type LandingPageProps = {
  basicInfo: BasicInfo;
};

function LandingPage(props: LandingPageProps) {
  const { basicInfo } = props;
  const { name, role, email, phoneNumber, linkedIn, github } = basicInfo;

  return (
    <>
      <h1>{name}</h1>
      <h2>{role}</h2>
      <p>{email}</p>
      <p>{phoneNumber}</p>
      <p>{linkedIn}</p>
      <p>{github}</p>
    </>
  );
}

export { LandingPage };
