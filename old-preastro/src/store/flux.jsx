const getState = ({ setStore }) => {
	return {
		store: {
			theme: null
		},
		actions: {
			changeTheme: theme => {
                setStore({ theme });
            },
		}
	};
};

export default getState;