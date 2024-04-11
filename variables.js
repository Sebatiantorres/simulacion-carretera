const week = [
  [
    //norte sur
    {
      startHour: 6,
      startMinutes: 0,
      endHour: 9,
      endMinutes: 0,
      duration: 180,
      totals: 119,
      travelDuration: 18,
    },
    {//sur norte
      startHour: 6,
      startMinutes: 0,
      endHour: 9,
      endMinutes: 0,
      duration: 180,
      totals: 117,
      travelDuration: 6,
    },
  ],
  [
    {// 11:30 norte sur lunes a viernes
      startHour: 11,
      startMinutes: 30,
      endHour: 13,
      endMinutes: 0,
      duration: 90,
      totals: 105,
      travelDuration: 18,
    },
    {// 11:30 sur norte  lunes a viernes
      startHour: 11,
      startMinutes: 30,
      endHour: 13,
      endMinutes: 0,
      duration: 90,
      totals: 98,
      travelDuration: 6,
    },
  ],
  [
    {/*Sentido Norte – Sur   (LUNES A VIERNES)
      5:00 p.m. – 7:30 p.m.   120 vehiculos
 */
      startHour: 17,
      startMinutes: 0,
      endHour: 19,
      endMinutes: 30,
      duration: 255,
      totals: 120,
      travelDuration: 18,
    },
    {/*Sentido Sur – Norte    (LUNES A VIERNES)
      5:00 p.m. – 9:15 p.m.    76  vehiculos
      */
      startHour: 17,
      startMinutes: 0,
      endHour: 21,
      endMinutes: 15,
      duration: 255,
      totals: 76,
      travelDuration: 6,
    },
  ],
];

const weekend = [
  [/*Sentido Norte – Sur   (SABADO A DOMINGO)
1:00 p.m. – 3:00 p.m.    107 vehiculos
 */
    {
      startHour: 13,
      startMinutes: 0,
      endHour: 15,
      endMinutes: 0,
      duration: 120,
      totals: 107,
      travelDuration: 8,
    },
    {/* Sentido Sur – Norte    (SABADO A DOMINGO)
7:00 a.m. – 9:30 a.m.    105 vehiculos
*/
      startHour: 13,
      startMinutes: 0,
      endHour: 15,
      endMinutes: 0,
      duration: 120,
      totals: 105,
      travelDuration: 1,
    },
  ],
  [
    {
      startHour: 7,
      startMinutes: 0,
      endHour: 9,
      endMinutes: 30,
      duration: 150,
      totals: 107,
      travelDuration: 8,
    },
    {
      startHour: 7,
      startMinutes: 0,
      endHour: 9,
      endMinutes: 30,
      duration: 150,
      totals: 105,
      travelDuration: 1,
    },
  ],
  [
    {
      startHour: 18,
      startMinutes: 0,
      endHour: 20,
      endMinutes: 0,
      duration: 120,
      totals: 80,
      travelDuration: 8,
    },
    {
      startHour: 18,
      startMinutes: 0,
      endHour: 20,
      endMinutes: 0,
      duration: 150,
      totals: 54,
      travelDuration: 1,
    },
  ],
  [
    {
      startHour: 16,
      startMinutes: 30,
      endHour: 22,
      endMinutes: 0,
      duration: 330,
      totals: 80,
      travelDuration: 8,
    },
    {
      startHour: 16,
      startMinutes: 30,
      endHour: 22,
      endMinutes: 0,
      duration: 330,
      totals: 54,
      travelDuration: 1,
    },
  ],
];

const razones = [
  "Mantenimiento Áreas Verdes",
  "Mantenimiento Sistemas Eléctricos",
  "Reparaciones menores en vía",
  "Colisiones Varias",
  "Cierres Preventivos",
  "Manifestaciones Generales (Colectividad y sectores Particulares).",
];

const probInterrupcion = [
  350 / 525600, // 0.00086
  197 / 525600, // 0.00068
];



const densidadMax = 125;
