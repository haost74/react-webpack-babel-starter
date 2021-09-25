const store = createStore( reducer, {
    contacts: {
        contactlist: [],
        newContact: { }
    },
    ui: {
        isContactFormHidden: true

        }
})

const reducer = (state, action) => {
	switch(action.type) {
		
        case "HANDLE_INPUT_CHANGE":
    	break;
        
        case "ADD_NEW_CONTACT": 
		break;
       
        case "TOGGLE_CONTACT_FORM":
        break;
	}
    
    return state;
}