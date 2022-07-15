export const utilDataSubmitForm = ({ dataFormik, name }) => {
  const { date, hour, greeting, bodyMsg } = dataFormik;

  const dateArray = date.split("-");
  const formatDay = dateArray.reverse().join("/");

  const dayAndHour = {};

  if (!hour) dayAndHour.day = formatDay;
  else {
    const turnDate = date + " " + hour;
    dayAndHour.day = formatDay;
    dayAndHour.schedule = new Date(turnDate).toLocaleTimeString().slice(0, -3);
  }

  const greetingValues = {
    "good-morning": "Buenos días",
    "good-night": "Buenas noches",
    "good-afternoon": "Buenss tardes",
  };

  const greetingSelected = greetingValues[greeting];

  const message = `${greetingSelected}, ${bodyMsg}. En la fecha: ${
    dayAndHour.day
  }${
    dayAndHour.schedule ? `, en horario: ${dayAndHour.schedule} hs.` : "."
  } Atentamente ${name}.`;

  return { message };
};
