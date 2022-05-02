const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLAPI : "https://3001-pedroparrap-classgroups-m2cqaif9czb.ws-eu43.gitpod.io/api/",
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
			  modalLogin: false,
			  modalSignUp: false,
			  allStudentInWeb: [],
		},
		actions: {
		
		modalLogin : () => {
			const aux = getStore().modalLogin
			setStore({ modalLogin: !aux });
		},
		modalSingUp : () => {
			const aux = getStore().modalSignUp
			setStore({ modalSignUp: !aux });
		},
		logIn: async (teacher) => {
			const response = await fetch(getStore().URLAPI + "login", {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			  },
			  body: JSON.stringify(teacher),
			});
			if (response.status == 200) {
				const data = await response.json();
			  	localStorage.setItem("token", data.token);
			  	localStorage.setItem("logIn", true);
			  	getActions().modalLogin()
			  	return true;
			} else {
			  alert("Contraseña o usuario incorrectos");
			  return false;
			}
		  },
		logOut : () => {
			localStorage.removeItem("logIn");
			localStorage.removeItem("token");
			return true
		},
		// Functions for Token
		registerTeacher: async (teacher) => {
			const response = await fetch(getStore().URLAPI + "signupteacher", {
			  method: "POST",
			  headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			  },
			  body: JSON.stringify(teacher),
			});
			if (response.status == 201) {
			  const data = await response.json();
			  localStorage.setItem("token", data.token);
			  localStorage.setItem("logIn", true);
			  getActions().modalSingUp()

			  return true;
			} else {
			  alert("No se ha podido realizar el registro");
			  return false;
			}
		  },

		getStudent: async () => {
			const response = await fetch(getStore().URLAPI + "allstudents");
			const data = await response.json();
			
			setStore({ allStudentInWeb: data.results });
		  },
			
		}
	};
};

export default getState;
