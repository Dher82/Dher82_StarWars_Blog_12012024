const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],

			Favoritos: []
		
			
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			guardaFavoritos(nombreItem){
				console.log (nombreItem)
				const store = getStore();
				const fav = store.Favoritos;
				const newFav = [...fav, { name: nombreItem, id:fav.length }]
				setStore({Favoritos: newFav})
			},
			eliminaFavorito(id){
				const store = getStore();
				const fav = store.Favoritos;
				const favActualizado = fav.filter((item) => item.id !== id);
				setStore({Favoritos: favActualizado})
		}
	}
	};
};

export default getState;
