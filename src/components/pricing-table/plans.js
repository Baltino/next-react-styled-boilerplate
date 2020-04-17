const basicDetails = [
  "Punto de referencia: página del espacio donde el cliente está situado.",
  "Total de visitantes por día. Miércoles - Viernes - Sábado - Domingo",
  "Género: Hombres / Mujeres (solo residentes de España)",
  "Edad: 10-24 / 25-44 / 45-64 / 65+ (sólo residentes de España)"
]
export default [{
  id: "basic",
  name: "Básico",
  price: 50,
  details: [
    ...basicDetails,
    "No se diferencia entre Hombres / Mujeres",
    "3 gráficos"
  ]
}, {
  id: "medium",
  name: "Medium",
  price: 75,
  details: [
    ...basicDetails,
    "Lugar de residencia: Residentes / Residentes extranjero",
    "Día entero por horas",
    "5 gráficos"
  ]
}, {
  id: "premium",
  name: "Premium",
  price: 100,
  details: [
    ...basicDetails,
    "Municipio / Provincia / Región (País si es turista",
    "Actividad",
    "Casa",
    "Trabajo",
    "Actividad frecuente",
    "Renta (proximamente)",
    "7 gráficos"
  ]
}];
