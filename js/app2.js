var me = {

	firstName : "Andréa",
	lastName : "Buisset",
	birthday : "10/02/1994",
	github : "AmbreB",
	occupation : "UI/UX Designer",

	getFullName : function(){
		return this.firstName + ' ' + this.lastName;
	},
	getOccupation : function(){
		return this.occupation;
	},
	setFirstName : function(newFirstName){
		this.firstName = newFirstName;
		return this.getFullName();
	},
	setLastName : function(newLastName){
		this.lastName = newLastName;
		return this.getFullName();
	},
	getField : function(fieldName){
		if ( me[fieldName] == undefined ) {
			return "Ce field n'existe pas, c*nnard !"
		} else {
			return me[fieldName];
		}
	},
	setField : function(fieldName, fieldValue){
		return this[fieldName] = fieldValue;
	},
	getGithub : function(){
		return 'https://github.com/' + this.github;
	},
	setGithub : function(newGithub){
		this.github = newGithub;
		return this.github;
	},
	getInfos : function(){
		return "Bonjour, je m'appelle " + this.getFullName() + '\n' 
		+ "Je suis née le " + this.birthday + ' et je suis ' + this.occupation + '\n' 
		+ "Vous pourrez retrouver tous mes projets sur " + this.github;
	},
};