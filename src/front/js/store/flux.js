const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			URLAPI : "https://3001-pedroparrap-classgroups-puulb8r9vpf.ws-eu45.gitpod.io/api/",
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
				// "Juan Enrique Arés",
				// "Mateo Gómez",
				// "Miguel Ángel Jurado",
				// "Sergio Mendoza",
			  ],
			  numPersonPerGroup2: 2,
			  numPersonPerGroup3: 3,
			  modalLogin: false,
			  modalSignUp: false,
			  modalAddNewClass: false,
			  allStudentInWeb: [],
			  AllClasses: [],
			  oneClassInfo: [] ,
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
		modalAddNewClass : () => {
			const aux = getStore().modalAddNewClass
			setStore({ modalAddNewClass: !aux });
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

		
		getAllClasses: async () => {
			const response = await fetch(getStore().URLAPI + "profile/classes", {
			  method: "GET",
			  headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			  },
			});
			const data = await response.json();
	
			setStore({ AllClasses: data });
		  },
		  getClassInfo: async (id) => {
			const response = await fetch(getStore().URLAPI + "oneclassinfo/" + id, {
			  headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
				Authorization: `Bearer ${localStorage.getItem("token")}`,
			  },
			});
			const data = await response.json();
			
			setStore({ oneClassInfo: data.results });
		  },
		  AddNewClass: async (newclass) => {
			console.log(newclass)
			const response = await fetch(getStore().URLAPI + "addnewclass", {
				method: "POST",
				headers: {
				  "Content-Type": "application/json",
				  Accept: "application/json",
				  Authorization: `Bearer ${localStorage.getItem("token")}`,
				},
				body: JSON.stringify(newclass),
			  });
			  if(response.status == 200){
				  getActions().getAllClasses()
				  getActions().modalAddNewClass();
			  }else{
				  alert("Introduce el nombre de la clase")
			  }
		  },
		}
	};
};

export default getState;
