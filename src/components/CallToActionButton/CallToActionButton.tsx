import { ButtonLink } from "../ButtonLink";

export const CallToActionButton = ({
  align,
  buttonLabel,
  destination,
}: any) => {
  const alignMap: any = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };
  return (
    <div className={alignMap[align]}>
      <ButtonLink destination={destination} label={buttonLabel} />
    </div>
  );
};
