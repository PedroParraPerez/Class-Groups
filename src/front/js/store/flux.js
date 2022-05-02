const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLAPI : "https://3001-pedroparrap-classgroups-rwdt2zubbnk.ws-eu43.gitpod.io/api/",
			STUDENTS: [
				"Miguel Ángel Padilla",
				 "Alicia Garrote",
				 "Andrés Hermelo",
				"Carlos Pérez",
				"Jessica Rojas ",
				"Jesús Robles",
				"Joel Font",
				"Jonathan Díaz",
				"José Ignacio Casanova",
				"José Javier Bustillo",
				"Juan Enrique Arés",
				"Mateo Gómez",
				"Miguel Ángel Jurado",
				"Sergio Mendoza",
				
				
			
			  ],
			  numPersonPerGroup2: 2,
			  numPersonPerGroup3: 3,
			  allStudentInWeb: []
		},
		actions: {

		getStudent: async () => {
			const response = await fetch(getStore().URLAPI + "allstudents");
			const data = await response.json();
			
			setStore({ allStudentInWeb: data.results });
		  },
			
		}
	};
};

export default getState;
