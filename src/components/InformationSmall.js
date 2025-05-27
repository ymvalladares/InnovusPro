import { Box, Typography } from "@mui/material";
import React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
const InformationSmall = () => {
  const matches = useMediaQuery("(min-width:500px)");

  return (
    <Box
      sx={{
        height: { xs: "auto", sm: "100px" },
        background: "#FEF5E1",
        color: "black",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "space-around",
        px: 2,
        py: { xs: 2, sm: 0 },
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: { xs: 2, sm: 0 },
        }}
      >
        <Typography fontSize="1.1rem" fontWeight="bold">
          📦 Servicio Integral
        </Typography>
        <Typography variant="body2">
          Diseño, fabricación e instalación
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mb: { xs: 2, sm: 0 },
        }}
      >
        <Typography fontSize="1.1rem" fontWeight="bold">
          🕒 Puntualidad Garantizada
        </Typography>
        <Typography variant="body2">
          Cumplimos con los tiempos acordados
        </Typography>
      </Box>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Typography fontSize="1.1rem" fontWeight="bold">
          💬 Asesoramiento Personalizado
        </Typography>
        <Typography variant="body2">
          Te guiamos en cada paso del proyecto
        </Typography>
      </Box>
    </Box>
  );
};

export default InformationSmall;
