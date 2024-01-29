import { Box } from "@chakra-ui/react";
import { t } from "i18next";

const Massages = () => {
  return (
    <Box pt="80px">
      <h1>{t("pages.massages.title")}</h1>
    </Box>
  );
};

export default Massages;
